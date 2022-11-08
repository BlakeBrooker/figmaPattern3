function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);


    fill(0,0,0);
    circle(400, 400, 600);

    fill(255,255,255);
    circle(400, 400, 500);

    fill(0,0,0);
    circle(400, 400, 400);

    fill(255, 255, 255);
    circle(400, 400, 300);

    fill(0,0,0);
    circle(400, 400, 200);

    fill(255, 255, 255);
    circle(400, 400, 100);

    fill(0,0,0);
    circle(400, 400, 50);

    fill(255, 255, 255);
    circle(400, 400, 25);

    fill(0,0,0);
    line(25, 100, 780, 700);
    
    fill(0,0,0);
    line(700, 100, 100, 700);
  
}