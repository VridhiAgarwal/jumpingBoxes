var canvas;
var music;
var v1;
var v2;
var v3;
var v4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    v1=createSprite(0,580,360,30);
    v1.shapeColor="purple"

    v2=createSprite(295,580,200,30);
    v2.shapeColor="coral"

    v3=createSprite(515,580,200,30);
    v3.shapeColor="blue"

    v4=createSprite(740,580,220,30);
    v4.shapeColor="yellow"

    ball=createSprite(500,100,40,40);
    ball.shapeColor="white"
    ball.velocityX=5;
    ball.velocityY=7;
    //create 4 different surfaces


 
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edge=createEdgeSprites();
    ball.bounceOff(edge);
    if(v1.isTouching(ball)||ball.bounceOff(v1)){
    ball.shapeColor="purple";
    }
    if(v2.isTouching(ball)||ball.bounceOff(v2)){
        ball.shapeColor="coral";
        }
        if(v3.isTouching(ball)||ball.bounceOff(v3)){
            ball.shapeColor="blue"; 
            }
            if(v4.isTouching(ball)||ball.bounceOff(v4)){
                ball.shapeColor="yellow";
                }       
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
}
