import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight } from "./state.js";


export class Player {

    constructor(game) {
        this.gameWidth = game.canvas.width;
        this.gameHeight = game.canvas.height;

        this.width = 200;
        this.height = 181.83;

        this.x = 0;
        this.y = this.gameHeight - this.height;

        this.image = document.getElementById('dogImg');

        this.frameX = 0;
        this.frameY = 0;

        this.states = [new StandingLeft(), new StandingRight(), new SittingLeft(), new SittingRight(), new RunningLeft(), new RunningRight() ];
        this.currentState = this.states[1];

        this.speed = 0;
        this.maxSpeed = 10;

    }

    update(lastKey){
        //get the next state name based on the last key pressed
        let stateName = this.currentState.getState(lastKey);

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

        //limitation
        if(this.x > this.gameWidth - this.width){
            this.x = this.gameWidth - this.width
        }else if(this.x < 0){
            this.x = 0;
        }
    }


    draw(ctx){
        ctx.drawImage(this.image, 
            this.width * this.frameX, this.height * this.frameY, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }
}








