var img = new Image();


img.src = "i2.jpeg";

img.addEventListener('load', function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = 781;
    canvas.height = 600;
    let particlesArray = [];
    const n = 1;

    let mappedImage = [];


    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  

    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const alpha = pixels.data[(y * 4 * pixels.width) + (x * 4 + 3)];
            const b = calculateRelativeBrightness(red, green, blue);
            const cell = [b];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    console.log(mappedImage);

        //     let row = [];
    //     for (let x = 0; x < canvas.width; x++) {
    //         const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
    //         const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
    //         const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
    //         const alpha = pixels.data[(y * 4 * pixels.width) + (x * 4 + 3)];
    //         const b = calculateRelativeBrightness(red, green, blue);
    //         const cell = [

    //             cellBrightness = b,
    //         ];
    //         row.push(cell);
    //     }
    //     mappedImage.push(row);
    // }

    function calculateRelativeBrightness(r, g, b) {
        return Math.sqrt((r * r) * 0.299 + (g * g) * 0.587 + (b * b) * 0.114) / 100;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.velocity = Math.random() * 0.5;
            this.speed = 0;
            this.size =10;// Math.random() * 1.5 + 1;
            this.py = Math.floor(this.y);
            this.px = Math.floor(this.x); 
        }

        update() {    // 0 -2.5
            this.py = Math.floor(this.y);
            this.px = Math.floor(this.x);

            this.speed = mappedImage[this.py][this.px][0];

          //  let movement =this.speed;// (2.5 - this.speed);// + this.velocity; 
           let movement = (2.5 - this.speed);// + this.velocity;

            this.y +=  movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;

            }
        }

        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < n; i++) {
            particlesArray.push(new Particle());
        }
    }

    init();

    function animate() {
      //  ctx.clearRect(0, 0, canvas.width, canvas.height);
       // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha =0.05;
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


       // ctx.globalAlpha = 1;//0.2;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
           ctx.globalAlpha = particlesArray[i].speed/5;
            particlesArray[i].draw();

        }

        requestAnimationFrame(animate);
    }

    animate();

});