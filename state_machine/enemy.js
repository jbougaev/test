export class Enemy {
    constructor(game) {
        this.frameX = 0;
        this.frameY = 0;
        this.index = 0;
        this.factor = 5;
        this.ctx = game.ctx;
        this.game = game;
    }

    update() {
       this.x = this.x - this.speedX - this.game.gameSpeed;
        this.y = this.y + this.speedY;
        this.updateXFrame();
    }

    draw() {
        if(this.game.debug){
            this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
        this.ctx.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    updateXFrame() {
        this.frameX =  Math.floor(this.index / this.factor) % this.numberOfFrames;
        if (this.frameX === this.numberOfFrames) {

            this.frameX = 0;
        }
        this.index += 1;

        if(this.x + this.width < 0){
            this.markedForDeletion = true;
        }
    }
}


export class FlyingEnemy extends Enemy {
    constructor(game) {
        super(game);
        this.width = 60;
        this.height = 44;
       
        this.x = Math.random() * this.game.gameWidth / 2 + this.game.gameWidth;
        this.y = Math.random() * this.game.gameHeight / 2;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.numberOfFrames = 6;
        this.image = document.getElementById('enemy_fly');
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.1 + 0.1;  // 0.1 do 0.2
    }

    update(){
        super.update();
        this.angle  = this.angle + this.angleSpeed;
        this.y = this.y + Math.sin(this.angle);
    }
}

export class GroundEnemy extends Enemy {
    constructor(game) {
        super(game);
        this.width = 60;
        this.height = 87;
       
        this.x = this.game.gameWidth;
        this.y = this.game.gameHeight  - this.height - this.game.bottomMargin;
        this.speedX = 0;
        this.speedY = 0;
        this.numberOfFrames = 2;
        this.image = document.getElementById('enemy_plant');
    }




}
export class ClimbingEnemy extends Enemy {
    constructor(game) {
        super(game);
        this.width = 120;
        this.height = 144;
       
        this.x = this.game.gameWidth;
        this.y = Math.random()*this.game.gameHeight*0.5;
        this.speedX = 0;
        this.speedY =  Math.random() > 0.5 ? 1 : -1;
        this.numberOfFrames = 5;
        this.image = document.getElementById('enemy_spider_big');
    }


    update(){
        super.update();
        if(this.y > this.game.gameHeight - this.height  - this.game.bottomMargin){
            this.speedY = this.speedY * -1;
        }
        if(this.y < 0 - this.height){
            this.markedForDeletion = true;
        }
    }

    draw(){
        super.draw();
       this.ctx.beginPath();
       this.ctx.moveTo(this.x + this.width / 2, 0);
       this.ctx.lineTo(this.x + this.width  /2, this.y + 50);
       this.ctx.stroke();

    }
}