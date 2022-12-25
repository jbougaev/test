const circle = {
    x: 500,
    y: 500
}
const canvas = document.getElementById('mycanvas');
let direction = 'right';

let context;

function init() {   

    if (canvas.getContext) {
        context = canvas.getContext('2d');

        //circle
        drawCircle( context);

        canvas.addEventListener('click', function (event) {
           circle.x = event.x;
           circle.y = event.y;
           // drawCircle(context);

        });

        window.addEventListener('keydown', function (event) {   //TODO

            switch (event.key) {
                case "ArrowLeft":
                    direction = 'left';

                    break;

                case "v":
                    /////////
                    break;
                case "ArrowRight":
                    direction = 'right';
                 
                    break;
                case "ArrowDown":
                    //////////
                    break;
                default:
                    /////
                    break;
            }



        });



    } else {
        console.log('canvas is not supported');
    }

}

function drawCircle( context) { 

    if(direction === 'right'){
        circle.x = circle.x + 1;
        circle.y = circle.y + 1;
    } else if(direction === 'left'){
        circle.x = circle.x - 1;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "red";
    context.lineWidth = 4;
    context.beginPath();
    context.arc(circle.x, circle.y, 50, 0, 2 * Math.PI);
    context.stroke();
}

function animate(){
    drawCircle(context);
    window.requestAnimationFrame(animate);
}

init();

animate();

