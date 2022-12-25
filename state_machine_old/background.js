export class Background{
    constructor(game, image,speed){
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        
        this.ctx  = game.ctx;
       
        this.image = image;
       
        this.speed = speed ;

        this.x = 0;
        this.y = 0 ;
    }

    update(){
        if(this.x < - this.gameWidth) {
            this.x = 0;
        }else{
            this.x = Math.floor(this.x - this.speed);
        }
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.gameWidth, this.gameHeight);
        this.ctx.drawImage(this.image, this.x + this.gameWidth, this.y, this.gameWidth, this.gameHeight);
    }
}