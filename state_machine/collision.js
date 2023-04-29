export class Collision{
    constructor(game, x, y){
        this.ctx = game.ctx;
        this.game = game;
        this.image = document.getElementById('boom');
        this.spriteWidth  = 100;
        this.spriteHeight = 90;
        this.factor = Math.random() + 0.5;
        this.width = this.spriteWidth * this.factor;
        this.height = this.spriteHeight * this.factor;
        this.frameX = 0;
        this.maxFrame = 4;
        this.markedForDeletion = false;
        this.x = x;
        this.y = y;

        this.factor = 5;
        this.index = 0;
        this.sound = new Audio();
        this.sound.src = "./sound/crash.wav";
    }

    draw() {
        this.ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0,
             this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

    update() {
        this.x = this.x - this.game.gameSpeed;
        this.updateXFrame();
        this.sound.play();
    }

    updateXFrame() {
        this.frameX = Math.floor(this.index / this.factor) % this.maxFrame;
        if (this.frameX === this.maxFrame - 1) {
            this.markedForDeletion = true;
        }
        this.index += 1;
    }
}