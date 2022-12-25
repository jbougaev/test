export const Key = {
    KD_LEFT: 0,
    KD_RIGHT: 1,
    KD_DOWN: 2,
    KD_UP: 3,
    KU_LEFT: 4,
    KU_RIGHT: 5,
    KU_UP: 6,
    KU_DOWN: 7
}



export class InputHandler {
    constructor() {
        this.lastKey = '';
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.lastKey = Key.KD_LEFT;
                    break;
                case "ArrowRight":
                    this.lastKey = Key.KD_RIGHT;
                    break;
                case "ArrowDown":
                    this.lastKey = Key.KD_DOWN;
                    break;
                case "ArrowUp":
                    this.lastKey = Key.KD_UP;
                    break;
                default:
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {

            switch (event.key) {
                case "ArrowLeft":
                    this.lastKey = Key.KU_LEFT;
                    break;
                case "ArrowRight":
                    this.lastKey = Key.KU_RIGHT;
                    break;
                case "ArrowDown":
                    this.lastKey = Key.KU_DOWN;
                    break;
                case "ArrowUp":
                    this.lastKey = Key.KU_UP;
                    break;
                default:
                    break;
            }
        });
    }
}