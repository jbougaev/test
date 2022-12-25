import { Key } from './inputHandler.js';
export const states = {
    STANDING_RIGHT: 0,
    STANDING_LEFT: 1,
    SITTING_RIGHT: 2,
    SITTING_LEFT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMPING_LEFT: 6,
    JUMPING_RIGHT: 7,
    FALLING_LEFT: 8,
    FALLING_RIGHT: 9
}

export class State {
    constructor(frameY, maxOfXFrames, stateName) {
        this.frameY = frameY;
        this.maxOfXFrames = maxOfXFrames;
        this.stateName = stateName;
    }

    setSpeed(player) {
        return 0;
    }
}

export class StandingLeft extends State {
    constructor() {
        super(1, 7, states.STANDING_LEFT);
    }

    getState(input, player) {
        if (input === Key.KU_LEFT) {
            return states.RUNNING_LEFT;
        } 
        
        else if (input === Key.KD_DOWN) {
            return states.SITTING_LEFT;
        }  else if (input === Key.KD_UP) {
            return states.JUMPING_LEFT;
        }
    }
}

export class StandingRight extends State {
    constructor() {
        super(0, 7, states.STANDING_RIGHT);
    }

    getState(input, player) {
       if(input === Key.KU_RIGHT){
            return states.RUNNING_RIGHT;
        } 
        
        else if (input === Key.KD_DOWN) {
            return states.SITTING_RIGHT;
        }  else if (input === Key.KD_UP) {
            return states.JUMPING_RIGHT;
        }
    }
}

export class SittingLeft extends State {
    constructor() {
        super(9, 5, states.SITTING_LEFT);

    }

    getState(input, player) {
        if (input === Key.KD_RIGHT) {
            return states.SITTING_RIGHT;
        } else if (input === Key.KD_UP) {
            return states.RUNNING_LEFT;
        }else if (input === Key.KD_LEFT) {
            return states.RUNNING_LEFT;
        }
    }
}

export class SittingRight extends State {
    constructor() {
        super(8, 5, states.SITTING_RIGHT);

    }

    getState(input, player) {
        if (input === Key.KD_LEFT) {
            return states.SITTING_LEFT;
        } else if (input === Key.KD_UP) {
            return states.RUNNING_RIGHT;
        }else if (input === Key.KD_RIGHT) {
            return states.RUNNING_RIGHT;
        }
    }
}

export class RunningLeft extends State {
    constructor() {
        super(7, 9, states.RUNNING_LEFT);
    }

    setSpeed(player) {
        return - player.maxSpeed;
    }

    getState(input, player) {
        if (input === Key.KD_UP) {
            return states.JUMPING_LEFT;
        }else if(input === Key.KD_RIGHT){
            return states.RUNNING_RIGHT;
        }else if(input === Key.KD_DOWN){
            return states.SITTING_LEFT;
        }else if(input === Key.KD_LEFT){
            return states.STANDING_LEFT;
        }
    }
}

export class RunningRight extends State {
    constructor() {
        super(6, 9, states.RUNNING_RIGHT);
    }

    setSpeed(player) {

        return player.maxSpeed;
    }

    getState(input, player) {
        if (input === Key.KD_UP) {
            return states.JUMPING_RIGHT;
        }else if(input === Key.KD_RIGHT){
            return states.STANDING_RIGHT;
        }else if(input === Key.KD_DOWN){
            return states.SITTING_RIGHT;
        }else if(input === Key.KD_LEFT){
            return states.RUNNING_LEFT;
        }
    }
}

export class JumpingLeft extends State {
    constructor() {
        super(3, 7, states.JUMPING_LEFT);
    }

    setSpeed(player) {

        if (player.onGround()) {
            player.vy -= 30;
        }
        return -player.maxSpeed * 0.5;
    }

    getState(input, player) {
        if (input === Key.KD_RIGHT) {
            return states.JUMPING_RIGHT;
        } else if (player.vy > 0) {
            return states.FALLING_LEFT
        }
    }
}

export class JumpingRight extends State {
    constructor() {
        super(2, 7, states.JUMPING_RIGHT);
    }

    setSpeed(player) {

        if (player.onGround()) {
            player.vy -= 30;
        }
        return player.maxSpeed * 0.5;

    }

    getState(input, player) {
        if (input === Key.KD_LEFT) {
            return states.JUMPING_LEFT;

        } else if (player.vy > 0) {
            return states.FALLING_RIGHT;
        }
    }
}

export class FallingLeft extends State {
    constructor() {
        super(5, 7, states.FALLING_LEFT);

    }


    getState(input, player) {
        if (input === Key.KD_RIGHT) {
            return states.FALLING_RIGHT;
        } else if (player.onGround()) {
            return states.RUNNING_LEFT;
        }
    }
}

export class FallingRight extends State {
    constructor() {
        super(4, 7, states.FALLING_RIGHT);
    }


    getState(input, player) {
        if (input === Key.KD_LEFT) {
            return states.FALLING_LEFT;
        } else if (player.onGround()) {
            return states.RUNNING_RIGHT;
        }
    }
}
