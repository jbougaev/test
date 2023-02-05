export class UI {
    constructor(game) {
        this.game = game;
        this.ctx = this.game.ctx;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
    }

    draw() {
        this.ctx.font = this.fontSize + 'px ' + this.fontFamily;
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score: ' + this.game.score, 20, 50);

        this.ctx.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        this.ctx.fillText('Time: ' + this.game.time, 20, 100);
        if (this.game.gameOver) {
            this.ctx.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            this.ctx.fillText('Game is over!', this.game.gameWidth * 0.4, this.game.gameHeight * 0.4);
        }
    }
}