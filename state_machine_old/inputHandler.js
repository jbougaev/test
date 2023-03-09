export const Key = {
    KD_LEFT: 0,
    KD_RIGHT: 1,
    KD_DOWN: 2,
    KD_UP: 3,  
    KD_ENTER: 4
}



export class InputHandler {
    constructor(game) {
        this.game = game;
        this.lastKey = [];

        window.addEventListener('keydown', (event) => {
         
            switch (event.key) {
                case "ArrowLeft":
                    if (this.lastKey.indexOf(Key.KD_LEFT) === -1) {
                    this.lastKey.push(Key.KD_LEFT);
                    }
                    break;
                case "ArrowRight":
                    if (this.lastKey.indexOf(Key.KD_RIGHT) === -1) {
                    this.lastKey.push(Key.KD_RIGHT);
                    }
                    break;
                case "ArrowDown":
                    if (this.lastKey.indexOf(Key.KD_DOWN) === -1) {
                    this.lastKey.push(Key.KD_DOWN);
                    }
                    break;
                case "ArrowUp":
                    if (this.lastKey.indexOf(Key.KD_UP) === -1) {
                    this.lastKey.push(Key.KD_UP);
                    }
                    break;
                case "Enter":
                    if (this.lastKey.indexOf(Key.KD_ENTER) === -1) {
                    this.lastKey.push(Key.KD_ENTER);
                    }

                    break;
                case "d":
                    this.game.debug = !this.game.debug;
                    break;
                default:
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {          
            switch (event.key) {
                case "ArrowLeft":
                    if (this.lastKey.indexOf(Key.KD_LEFT) > -1) {
                        this.lastKey.splice(this.lastKey.indexOf(Key.KD_LEFT), 1);
                    }
                    break;
                case "ArrowRight":
                    if (this.lastKey.indexOf(Key.KD_RIGHT) > -1) {
                        this.lastKey.splice(this.lastKey.indexOf(Key.KD_RIGHT), 1);
                    }
                  
                    break;
                case "ArrowDown":
                    if (this.lastKey.indexOf(Key.KD_DOWN) > -1) {
                        this.lastKey.splice(this.lastKey.indexOf(Key.KD_DOWN), 1);
                    }
                  
                    break;
                case "ArrowUp":
                    if (this.lastKey.indexOf(Key.KD_UP) > -1) {
                        this.lastKey.splice(this.lastKey.indexOf(Key.KD_UP), 1);
                    }
                  
                    break;
                case "Enter":
                    if (this.lastKey.indexOf(Key.KD_ENTER) > -1) {
                        this.lastKey.splice(this.lastKey.indexOf(Key.KD_ENTER), 1);
                    }
                    break;
                default:
                    break;
            }
        });
    }
}