
import { StandingRight, SittingRight, RunningRight, JumpingRight, FallingRight, RollingRight, Diving, Hit, State, states } from './state.js';

export class Player {
    constructor(game) {
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.ctx = game.ctx;
        this.game = game;

        this.states = [
            new StandingRight(this.game),
            new SittingRight(this.game),
            new RunningRight(this.game),
            new JumpingRight(this.game),
            new FallingRight(this.game),
            new Diving(this.game),
            new Hit(this.game),
            new RollingRight(this.game)];
        this.currentState = this.states[2];

        this.image = document.getElementById('dogImg');

        this.width = 100;
        this.height = 91.3;

        this.x0 = this.gameWidth / 2 - this.width / 2;
        this.y0 = this.gameHeight - this.height - game.bottomMargin;

        this.x = this.x0;
        this.y = this.y0;

        this.frameX = 0;
        this.frameY = 0;

        this.speed = 0;
        this.maxSpeed = this.game.gameSpeed;

        this.maxFrame = this.currentState.maxOfXFrames;
        this.vy = 0;
        this.weight = 1;
        this.factor = 5;
        this.index = 0;
    }

    draw() {

        if (this.game.debug) {
            this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
        this.ctx.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

    }

    updateXFrame() {
        this.frameX = Math.floor(this.index / this.factor) % this.maxFrame;
        if (this.frameX === this.maxFrame) {

            this.frameX = 0;
        }
        this.index += 1;
    }

    update(inputHandler) {
        this.checkCollision();
console.log(inputHandler.lastKey);
        const stateName = this.currentState.getState(inputHandler);
        this.setState(stateName !== '' && stateName !== undefined ? stateName : this.currentState.stateName);

        this.x += this.speed;
        this.y += this.vy;

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > this.x0) {
            this.x = this.x0;
        }

        if (this.y > this.y0) {
            this.y = this.y0;
        }

        // jumping
        if (!this.onGround()) {
            this.vy += this.weight;
        } else {
            this.vy = 0;
        }

        this.updateXFrame();
    }

    setState(stateName) {
        const state = this.states.find(s => s.stateName === stateName);
        this.currentState = state;
        this.frameY = this.currentState.frameY;
        this.maxFrame = this.currentState.maxOfXFrames;
        this.speed = this.currentState.getXSpeed(this);
        this.game.gameSpeed = this.speed;
    }

    onGround() {
        return this.y >= this.gameHeight - this.height - this.game.bottomMargin;
    }

    checkCollision() {
        this.game.enemies.forEach(enemy => {
            if (enemy.x < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y + enemy.height > this.y &&
                enemy.y < this.y + this.height) {
                enemy.markedForDeletion = true;
                this.game.addCollisionAnimation(enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5);
                if (this.currentState.stateName === states.DIVING || this.currentState.stateName === states.ROLLING_RIGHT) {

                    this.game.score++;
                } else {
                    this.setState(states.HIT);
                    this.resetCounter();
                }

            }

        });
    }

    resetCounter() {
        this.index = 0;
    }

    decreaseVY(value) {
        this.vy -= value;
    }

    resetVY(){
        this.vy = 0;
    }
}