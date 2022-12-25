export class BackgroundLayer{
    constructor(game, image,speedModifier){
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
        this.ctx  = game.ctx;
       
        this.image = image;

        this.image1 = document.getElementById('layer2');
       
        this.speed = this.game.gameSpeed * speedModifier ;
        this.speedModifier = speedModifier;
        this.x = 0;
        this.y = 0 ;
    }

    update(){
        if(this.x < - this.gameWidth || this.x > this.gameWidth) {
            this.x = 0;
        }else{
            this.x = Math.floor(this.x - this.speed);
        }

        this.speed = this.game.gameSpeed * this.speedModifier ;
    }

    draw(){
        this.ctx.drawImage(this.image, this.x - this.gameWidth, this.y, this.gameWidth, this.gameHeight);
        this.ctx.drawImage(this.image, this.x, this.y, this.gameWidth, this.gameHeight);
        this.ctx.drawImage(this.image, this.x + this.gameWidth, this.y, this.gameWidth, this.gameHeight);
    }
}