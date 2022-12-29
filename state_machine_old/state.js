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
    FALLING_RIGHT: 9,
    ROLLING_LEFT: 10,
    ROLLING_RIGHT: 11
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

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;

        if (keys.indexOf(Key.KD_LEFT) === -1) {
            return states.RUNNING_LEFT;
        }

        else if (keys.indexOf(Key.KD_DOWN) > -1) {
            return states.SITTING_LEFT;
        } else if (keys.indexOf(Key.KD_UP) > -1) {
            return states.JUMPING_LEFT;
        }
    }
}

export class StandingRight extends State {
    constructor() {
        super(0, 7, states.STANDING_RIGHT);
    }

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_RIGHT) === -1) {
            return states.RUNNING_RIGHT;
        }

        else if (keys.indexOf(Key.KD_DOWN) > -1) {
            return states.SITTING_RIGHT;
        } else if (keys.indexOf(Key.KD_UP) > -1) {
            return states.JUMPING_RIGHT;
        }
    }
}

export class SittingLeft extends State {
    constructor() {
        super(9, 5, states.SITTING_LEFT);

    }

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_RIGHT) > -1) {
            return states.SITTING_RIGHT;
        } else if (keys.indexOf(Key.KD_UP) > -1) {
            return states.RUNNING_LEFT;
        } else if (keys.indexOf(Key.KD_LEFT) > -1) {
            return states.RUNNING_LEFT;
        }
    }
}

export class SittingRight extends State {
    constructor() {
        super(8, 5, states.SITTING_RIGHT);

    }

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_LEFT) > -1) {
            return states.SITTING_LEFT;
        } else if (keys.indexOf(Key.KD_UP) > -1) {
            return states.RUNNING_RIGHT;
        } else if (keys.indexOf(Key.KD_RIGHT) > -1) {
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

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_UP) > -1) {
            return states.JUMPING_LEFT;
        } else if (keys.indexOf(Key.KD_RIGHT) > -1) {
            return states.RUNNING_RIGHT;
        } else if (keys.indexOf(Key.KD_DOWN) > -1) {
            return states.SITTING_LEFT;
        } else if (keys.indexOf(Key.KD_LEFT) > -1) {
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

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_UP) > -1) {
            return states.JUMPING_RIGHT;
        } else if (keys.indexOf(Key.KD_RIGHT) > -1) {
            return states.STANDING_RIGHT;
        } else if (keys.indexOf(Key.KD_DOWN) > -1) {
            return states.SITTING_RIGHT;
        } else if (keys.indexOf(Key.KD_LEFT) > -1) {
            return states.RUNNING_LEFT;
        } else if (keys.indexOf(Key.KD_ENTER) > -1) {
            return states.ROLLING_RIGHT;

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
        return -player.maxSpeed;
    }

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_RIGHT) > -1) {
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
        return player.maxSpeed;

    }

    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_LEFT) > -1) {
            return states.JUMPING_LEFT;

        } else if (player.vy > 0) {
            return states.FALLING_RIGHT;
        } else if(keys.indexOf(Key.KD_ENTER) > -1){
            return states.ROLLING_RIGHT;
        }
    }
}

export class FallingLeft extends State {
    constructor() {
        super(5, 7, states.FALLING_LEFT);
    }


    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_RIGHT) > -1) {
            return states.FALLING_RIGHT;
        } else if (player.onGround()) {
            return states.RUNNING_LEFT;
        }
    }

    setSpeed(player) {
        return -player.maxSpeed;
    }
}

export class FallingRight extends State {
    constructor() {
        super(4, 7, states.FALLING_RIGHT);
    }


    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;
        if (keys.indexOf(Key.KD_LEFT) > -1) {
            return states.FALLING_LEFT;
        } else if (player.onGround()) {
            return states.RUNNING_RIGHT;
        }else if(keys.indexOf(Key.KD_ENTER) > -1){
            return states.ROLLING_RIGHT;
        }
    }

    setSpeed(player) {
        return player.maxSpeed;
    }
}

export class RollingLeft extends State {
    constructor() {
        super(11, 7, states.ROLLING_LEFT);
    }


    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;

    }

    setSpeed(player) {
        return player.maxSpeed * 2;
    }
}

export class RollingRight extends State {
    constructor() {
        super(10, 7, states.ROLLING_RIGHT);
    }


    getState(inputHandler, player) {
        let keys = inputHandler.lastKey;;
        if (keys.indexOf(Key.KD_ENTER) === -1 && player.onGround()) {
            return states.RUNNING_RIGHT;
        }  else if(keys.indexOf(Key.KD_ENTER) > -1 &&  keys.indexOf(Key.KD_UP) > -1){
            if (player.onGround()) {
                player.vy -= 30;
            }
        }
    }

    setSpeed(player) {
        return player.maxSpeed * 2;
    }
}
