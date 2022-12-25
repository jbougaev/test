import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningRight, RunningLeft, JumpingLeft, JumpingRight, FallingLeft, FallingRight } from './state.js';

export class Player {
    constructor(game) {
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.ctx = game.ctx;
        this.game = game;

        this.states = [new StandingRight(),
        new StandingLeft(),
        new FallingLeft(),
        new SittingRight(),

        new RunningLeft(),
        new RunningRight(),
        new JumpingLeft(),
        new JumpingRight(),
        new SittingLeft(),
        new FallingRight()];
        this.currentState = this.states[5];

        this.image = document.getElementById('dogImg');

        this.width = 200;
        this.height = 181.83;

        this.x0 = this.gameWidth / 2 - this.width / 2;
        this.y0 = this.gameHeight - this.height - game.bottomMargin;

        this.x = this.x0;
        this.y = this.y0;

        this.frameX = 0;
        this.frameY = 0;

        this.speed = 0;
        this.maxSpeed = 10;

        this.maxFrame = this.currentState.maxOfXFrames;
        this.vy = 0;
        this.weight = 1;
        this.factor = 5;
        this.index = 0;
    }

    draw() {

       
        this.ctx.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

    }

    updateXFrame() {
        this.frameX = Math.floor(this.index / this.factor) % this.maxFrame;
        if (this.frameX === this.maxFrame - 1) {

            this.frameX = 0;
        }
        this.index += 1;
    }
    
    update(input) {
        const stateName = this.currentState.getState(input, this);
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
        this.speed = this.currentState.setSpeed(this);
    }

    onGround() {
        return this.y >= this.gameHeight - this.height - this.game.bottomMargin;
    }
}