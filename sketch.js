var canvas,box1,box2,box3,box4,box5;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces 
    box1 = createSprite(700,550,195,30);
    box1.shapeColor = "blue";
    box2 = createSprite(500,550,195,30);
    box2.shapeColor = "red";
    box3 = createSprite(300,550,195,30);
    box3.shapeColor = "yellow";
    box4 = createSprite(100,550,195,30);
    box4.shapeColor = "green";
    box5 = createSprite(random(20,750));
    box5.shapeColor = "white";
    box5.setVelocity(3,5);

    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();
    //add condition to check if box touching surface and make it box
if(box5.isTouching(box1)){
    box5.shapeColor = box1.shapeColor;
}
if(box5.isTouching(box2)){
    box5.shapeColor = box2.shapeColor;
}
if(box5.isTouching(box3)){
    box5.shapeColor = box3.shapeColor;
}
if(box5.isTouching(box4)){
    box5.shapeColor = box4.shapeColor;
}
box5.bounceOff(box1);
box5.bounceOff(box2);
box5.bounceOff(box3);
box5.bounceOff(box4);
box5.bounceOff(edges);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
}

