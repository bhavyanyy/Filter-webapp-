noseX=0;
noseY=0;
rightearX=0;
rightearY=0;
leftearX=0;
leftearY=0;
function preload(){
lipstick=loadImage("https://i.postimg.cc/JnYcYCbm/png-transparent-lip-mouth-lips-people-cartoon-lip-removebg-preview.png");
earings=loadImage("https://i.postimg.cc/hjPcyDhv/485-4857256-earring-transparent-png-one-earring-transparent-background-png-removebg-preview.png");
earings2=loadImage("https://i.postimg.cc/hjPcyDhv/485-4857256-earring-transparent-png-one-earring-transparent-background-png-removebg-preview.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300);

image(lipstick,noseX-35,noseY+5,70,40);
image(earings,rightearX+25,rightearY,20,30);
image(earings2,leftearX+138,leftearY,20,30);

}

function take_snapshot(){
    save('bhavya.png')
}

function modelLoaded(){
console.log('modelLoaded');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = "+ noseX);
    console.log("nose y = "+ noseY);

  rightearX=results[0].pose.nose.x;
  rightearY=results[0].pose.nose.y;

  console.log("rightEar x = "+ rightearX);
    console.log("rightEar y = "+ rightearX);

  lefttearX=results[0].pose.nose.x;
    leftearY=results[0].pose.nose.y;
  
    console.log("leftEar x = "+ leftearX);
      console.log("leftEar y = "+ leftearX);


 
}

}