import { Player } from './player.js';
import { InputHandler } from './inputHandler.js';

import { BackgroundLayer } from './background.js';
import { FlyingEnemy, GroundEnemy, ClimbingEnemy } from './enemy.js';
import {UI} from './ui.js';

export class Game {
    constructor(canvas, ctx) {
        this.debug = false;
        this.background = true;
        this.enimies = true;
        this.flyingEnimies = true;
        this.groundEnimies = true;
        this.climbingEnimies = true;
        this.canvas = canvas;
        this.ctx = ctx;
        this.bottomMargin = 130;
        this.gameSpeed = 3;
        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;
        this.score = 0;

        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);

        if (this.background) {
            this.background1 = new BackgroundLayer(this, document.getElementById('layer1'), 0.2);
            this.background2 = new BackgroundLayer(this, document.getElementById('layer2'), 0.4);
            this.background3 = new BackgroundLayer(this, document.getElementById('layer3'), 0.6);
            this.background4 = new BackgroundLayer(this, document.getElementById('layer4'), 0.8);
            this.background5 = new BackgroundLayer(this, document.getElementById('layer5'), 1);
        }

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.enemyFactor = 15;

        this.particles = [];

        this.ui = new UI(this);
    }

    update() {
        if (this.background) {
            this.background1.update();
            this.background2.update();
            this.background3.update();
            this.background4.update();
            this.background5.update();
        }
        this.player.update(this.inputHandler);

        if (this.enimies) {
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
        }

        this.particles.forEach(particle => {
            particle.update();
            if (particle.markedForDeletion) {
                this.particles.splice(this.particles.indexOf(particle), 1);
            }
        });

        if(this.particles.length > 50){
            this.particles.slice(0,50);
        }

       
    }

    draw() {
        if (this.background) {
            this.background1.draw(this.ctx);
            this.background2.draw(this.ctx);
            this.background3.draw(this.ctx);
            this.background4.draw(this.ctx);
            this.background5.draw(this.ctx);
        }

        if (this.enimies) {
            this.enemies.forEach(enemy => enemy.draw());
        }

       

        this.player.draw();
        this.ui.draw();

        if (this.particles) {
            this.particles.forEach(particle => particle.draw());
        }
    }

    addEnemy() {
        if (this.enimies && this.flyingEnimies) {
            this.enemies.push(new FlyingEnemy(this));
        }

        if (this.enimies) {
            if (this.gameSpeed > 0) {
                if (Math.random() < 0.5) {
                    if (this.groundEnimies) {
                        this.enemies.push(new GroundEnemy(this));
                    }

                } else {
                    if (this.climbingEnimies) {
                        this.enemies.push(new ClimbingEnemy(this));
                    }
                }

            }
        }
    }
}