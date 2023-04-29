export class Particle {
    constructor(game) {

        this.ctx = game.ctx;
        this.game = game;
        this.markedForDeletion = false;

    }

    update() {
        this.x = this.x - this.speedX - this.game.gameSpeed;
        this.y = this.y - this.speedY;
        this.size = this.size * 0.97;  //length of a tail
        if (this.size < 0.5) {
            this.markedForDeletion = true;
        }
    }
}


export class Dust extends Particle {
    constructor(game) {
        super(game);
        this.size = Math.random() * 10 + 10;
        this.x = this.game.player.x + this.game.player.width * 0.6;
        this.y = this.game.player.y + this.game.player.height;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = 'rgba(0,0,0,0.2)';
    }


    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}


export class Fire extends Particle {
    constructor(game) {
        super(game);
        this.size = Math.random() * 100 + 50;   //50 - 150
        this.x = this.game.player.x + this.game.player.width * 0.5- this.size * 0.5;
        this.y = this.game.player.y + this.game.player.height * 0.5 - this.size * 0.5;
        this.speedX = 1;
        this.speedY = 1;
        this.image = document.getElementById('fire');
      //  this.angle = 0;
     //  this.velocityOfAngle = Math.random() * 0.2 - 0.1;
    }

    update() {
        super.update();
      //  this.angle += this.velocityOfAngle;
      //  this.x += Math.sin(this.angle * 10);
    }


    draw() {
        // this.ctx.save();
        // if (this.game.debug) {
        //     this.ctx.strokeRect(this.x, this.y, this.size, this.size);
        // }
        // this.ctx.translate(this.x, this.y);
        // this.ctx.rotate(this.angle);
        // this.ctx.drawImage(this.image, 0, 0, this.size, this.size);
        // this.ctx.restore();
        this.ctx.drawImage(this.image,this.x, this.y, this.size, this.size);
    }
}

export class Splash extends Particle {
    constructor(game) {
        super(game);
        this.size = Math.random() * 100 + 100;
        this.x = this.game.player.x + this.game.player.width * 0.5 - this.size * 0.5;
        this.y = this.game.player.y + this.game.player.height - this.size * 0.5;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 2 + 2;
        this.gravity = 0;
        this.image = document.getElementById('fire');
        
    }

    update() {
        super.update();
        this.gravity += 0.1;
        this.y += this.gravity;
       
       
    }

    draw() {
        if (this.game.debug) {
            this.ctx.strokeRect(this.x, this.y, this.size, this.size);
        }
        this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}

