function preload() {
    
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
tint_color = "";
}
function draw() {
fill("Ff0000")
stroke("Ff0000")
circle(20, 20, 20)
}
function filter_tint()
{
tint_color = document.getElementById("color_name").value
}