const canvas = document.getElementById('mycanvas');
console.log('sd');
let ctx;   //undefined

//6876 × 5230

const sWidth = 575;  //6876 / 12
const sHeight = 523;
let sX = 0;
let sY = 0;
let dX = 0;
let dY = 0;
const dWidth = 575;
const dHeight = 523;




const image = new Image();
image.src = './images/shadow_dog.png';

if (canvas.getContext) {
    ctx = canvas.getContext('2d');

    console.log(ctx);


} else {
    console.log('canvas is not supported');
}

let position = 0;
const factor = 5;
let frame = 0;

function animate() {
    position = Math.floor( frame / factor) % 7 ;  /// 0, 1, 2, 3, 4, 5 (1), 6 (1), ..... 10 (2)

    console.log(position);

    if(position === 6){
        position = 0;
    }
    
    sX = position * sWidth;

    ctx.clearRect(0, 0, dWidth, dHeight);
    ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

    frame =  frame + 1; 

    window.requestAnimationFrame(animate);
}


animate();