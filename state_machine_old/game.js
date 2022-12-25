import { Player } from './player.js';
import { InputHandler } from './inputHandler.js';

import { BackgroundLayer } from './background.js';

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.bottomMargin = 130;

        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;

        this.player = new Player(this);

        this.gameSpeed = 10;

        this.background1 = new BackgroundLayer(this, document.getElementById('layer1'), 0.2);
        this.background2 = new BackgroundLayer(this, document.getElementById('layer2'), 0.4);
        this.background3 = new BackgroundLayer(this, document.getElementById('layer3'), 0.6);
        this.background4 = new BackgroundLayer(this, document.getElementById('layer4'), 0.8);
        this.background5 = new BackgroundLayer(this, document.getElementById('layer5'), 1);

        this.inputHandler = new InputHandler();
    }

    update() {
        this.background1.update();
        this.background2.update();
        this.background3.update();
        this.background4.update();
        this.background5.update();
        this.player.update( this.inputHandler.lastKey);
    }

    draw() {
        this.background1.draw( this.ctx);
        this.background2.draw( this.ctx);
        this.background3.draw( this.ctx);
        this.background4.draw( this.ctx);
        this.background5.draw( this.ctx);
        this.player.draw( this.ctx);

    }
}