export class CollisionAnimation {
    constructor(game, x, y) {
        this.ctx = game.ctx;
        this.game = game;
        this.markedForDeletion = false;
        this.image = document.getElementById('boom');
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.sizeModifier = Math.random() + 0.5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x;
        this.y = y;
        this.frameX = 0;
        this.maxFrame = 4;
        this.factor = 5;
        this.index = 0;
        this.sound = new Audio();
        this.sound.src = "./sound/crash.wav";
    }

    update() {
        this.x -= this.game.gameSpeed;
        this.updateXFrame();
        this.sound.play();
    }

    updateXFrame() {
        this.frameX = Math.floor(this.index / this.factor) % this.maxFrame;
        if (this.frameX === this.maxFrame -1) {

            this.markedForDeletion = true;
        }
        this.index += 1;
    }


    draw() {
        if(this.game.debug){
            this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
      
        this.ctx.drawImage(this.image, this.spriteWidth * this.frameX, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}