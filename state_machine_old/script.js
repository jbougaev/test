
import { Game } from './game.js';

window.addEventListener('load', function () {

    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const canvas = document.getElementById('mycanvas');
    let ctx;   //undefined

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        game(canvas, ctx);


    } else {
        console.log('canvas is not supported');
    }


});

function game(canvas, ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas, ctx);


    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

       game.update();
       game.draw();
        window.requestAnimationFrame(animate);
    }
    animate();
}


