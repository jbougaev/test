import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight, JumpingLeft, JumpingRight, FallingLeft, FallingRight } from "./state.js";


export class Player {

    constructor(game) {
        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;
        this.game = game;
        this.ctx = this.game.ctx;
        this.width = 200;
        this.height = 181.83;

        this.x0 = 0;
        this.y0 = this.gameHeight - this.height;

        this.x = this.x0;
        this.y = this.y0;

        this.image = document.getElementById('dogImg');

        this.frameX = 0;
        this.frameY = 0;

        this.states = [new StandingLeft(), new StandingRight(), new SittingLeft(), new SittingRight(), new RunningLeft(), new RunningRight(), new JumpingLeft(), new JumpingRight(), new FallingLeft(), new FallingRight()];
        this.currentState = this.states[1];

        this.speed = 0;
        this.maxSpeed = this.game.gameSpeed;

        this.index = 0
        this.numberOfFrames = 0;
        this.animationSpeedModifier = 5;

        this.speedY = 0;
        this.weight = 1;

    }

    update(lastKey) {
        //get the next state name based on the last key pressed
        let stateName = this.currentState.getState(lastKey, this);

        // check if state Name is defined
        stateName = stateName === '' || stateName === undefined ? this.currentState.stateName : stateName;

        //find a state object based on the next state name
        const state = this.states.find((state) => {
            return state.stateName === stateName;
        });

        //set the currnet frames row
        this.frameY = state.frameY;

        this.currentState = state;

        //get a speed of the current state
        this.speed = this.currentState.getSpeed(this);

        //moving
        this.x = this.x + this.speed;
        this.y = this.y + this.speedY;

        //limitation
        if (this.x > this.gameWidth/2 - this.width) {
            this.x = this.gameWidth/2 - this.width;
        } else if (this.x < 0) {
            this.x = 0;
        }

        if (this.y > this.y0) {
            this.y = this.y0;
        }

        //update x frames
        this.numberOfFrames = this.currentState.numberOfFrames;
        this.frameX = Math.floor(this.index / this.animationSpeedModifier) % this.numberOfFrames;
        if (this.frameX === this.numberOfFrames) {

            this.frameX = 0;
        }
        this.index = this.index + 1;

        if (!this.isOnGround()) {
            this.speedY = this.speedY + 1;
        } else {
            this.speedY = 0;
        }
    }


    draw() {

        this.ctx.drawImage(this.image,
            this.width * this.frameX, this.height * this.frameY, this.width, this.height,
            this.x, this.y, this.width, this.height);
    }

    isOnGround() {
        return this.y === this.y0;
    }
}








