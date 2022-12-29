import { Player } from './player.js';
import { InputHandler } from './inputHandler.js';

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.player = new Player(this);
        this.inputHandler = new InputHandler();

    }

    update() {
        this.player.update(this.inputHandler.lastKey);

    }

    draw() {
        this.player.draw();
    }
}