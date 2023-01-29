export class Particle {
    constructor(game) {

        this.ctx = game.ctx;
        this.game = game;
        this.markedForDeletion = false;

    }

    update() {
       this.x = this.x - this.speedX - this.game.gameSpeed;
        this.y = this. y - this.speedY;
       this.size = this.size* 0.97;
       if(this.size < 0.5){
        this.markedForDeletion = true;
       }
    }

   
}


export class Dust extends Particle {
    constructor(game, x, y) {
        super(game);
        this.size = Math.random() * 10 + 10;
        this.x = x;
        this.y = y;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = 'rgba(0,0,0,0.2)';
    }


    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}


export class Fire extends Particle {
    constructor(game, x, y) {
        super(game);
        this.size = Math.random() * 100 + 50;
        this.x = x;
        this.y = y;
        this.speedX = 1;
        this.speedY = 1;
        this.image = document.getElementById('fire');
        this.angle = 0;
        this.va = Math.random() * 0.2 - 0.1;
    }

    update(){
        super.update();
        this.angle+=this.va;
        this.x+=Math.sin(this.angle * 10);
    }


    draw(){
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.angle);
        this.ctx.drawImage(this.image, -this.size*0.5, -this.size*0.5, this.size, this.size);
        this.ctx.restore();
    }
}

