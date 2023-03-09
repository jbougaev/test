import { Player } from './player.js';
import { InputHandler } from './inputHandler.js';

import { BackgroundLayer } from './background.js';
import { FlyingEnemy, GroundEnemy, ClimbingEnemy } from './enemy.js';
import { UI } from './ui.js';
import { Dust, Fire, Splash } from './particle.js';
import { CollisionAnimation } from './collisionAnimation.js';
export class Game {
    constructor(canvas, ctx) {
        this.debug = false;

        this.canvas = canvas;
        this.ctx = ctx;
        this.bottomMargin = 135;
        this.gameSpeed = 3;
        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;
        this.score = 0;

        this.time = 0;
        this.maxTime = 300;
        this.index = 0;
this.gameOver = false;
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);

      
            this.background1 = new BackgroundLayer(this, document.getElementById('layer1'), 0.2);
            this.background2 = new BackgroundLayer(this, document.getElementById('layer2'), 0.4);
            this.background3 = new BackgroundLayer(this, document.getElementById('layer3'), 0.6);
            this.background4 = new BackgroundLayer(this, document.getElementById('layer4'), 0.8);
            this.background5 = new BackgroundLayer(this, document.getElementById('layer5'), 1);
       

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.enemyFactor = 15;

        this.particles = [];

        this.collisionAnimations = [];

        this.ui = new UI(this);
    }

    update() {
        this.index += 1;
        this.time += this.index % 60 === 1 ? 1 : 0;
        if(this.time === this.maxTime){
            this.gameOver = true;
        }
        this.background1.update();
        this.background2.update();
        this.background3.update();
        this.background4.update();
        this.background5.update();

        this.player.update(this.inputHandler);


        if (this.enemyTimer > this.enemyInterval) {
            this.addEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer = this.enemyTimer + this.enemyFactor;
        }

        this.enemies.forEach(enemy => {
            enemy.update();
            if (enemy.markedForDeletion) {
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
        });


        this.particles.forEach(particle => {
            particle.update();
            if (particle.markedForDeletion) {
                this.particles.splice(this.particles.indexOf(particle), 1);
            }
        });

        if (this.particles.length > 50) {
            this.particles.slice(0, 50);
        }

        this.collisionAnimations.forEach(a => {
            a.update();
            if (a.markedForDeletion) {
                this.collisionAnimations.splice(this.collisionAnimations.indexOf(a), 1);
            }
        });

        console.log( this.collisionAnimations);

    }

    draw() {

        this.background1.draw(this.ctx);
        this.background2.draw(this.ctx);
        this.background3.draw(this.ctx);
        this.background4.draw(this.ctx);
        this.background5.draw(this.ctx);

        this.enemies.forEach(enemy => enemy.draw());
      
        this.player.draw();
        this.ui.draw();

        this.particles.forEach(particle => particle.draw());
        this.collisionAnimations.forEach(a => a.draw());

    }

    addEnemy() {

        this.enemies.push(new FlyingEnemy(this));

        if (this.gameSpeed > 0) {
            if (Math.random() < 0.5) {
                this.enemies.push(new GroundEnemy(this));
            } else {
                this.enemies.push(new ClimbingEnemy(this));
            }

        }

    }

    addDustParticle() {
        this.particles.unshift(new Dust(this));
    }

    addFireParticle() {
        this.particles.unshift(new Fire(this));
    }

    addSplashParticle() {
        this.particles.unshift(new Splash(this));
    }

    addCollisionAnimation(x, y) {
        this.collisionAnimations.push(new CollisionAnimation(this, x, y));
    }
}