var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
     music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(95,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,190,30);
    block2.shapeColor = "orange";
   
    block3 = createSprite(495,580,190,30);
    block3.shapeColor = "red";

    block4 = createSprite(695,580,190,30);
    block4.shapeColor = "black";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "pink";
    ball.velocityX=3;
    ball.velocityY=3;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    if (ball.x<0){
        music.stop()
        ball.velocityX=3;
    }else if (ball.x>800){
        music.stop()
        ball.velocityX=3;
    }
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    else if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    else if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.stop();
        ball.bounceOff(block3);
    }
    else if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "black";
        music.play();
        ball.bounceOff(block4);
    }
    
    if(ball.y<0){
        music.stop()
        ball.velocityY=3;
    }
    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
