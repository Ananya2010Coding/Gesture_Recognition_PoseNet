noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550 , 600);
    canvas.position(800 , 100);

    video = createCapture(VIDEO);
    video.size(550 , 500);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!!");
}

function draw(){
    background("#969A97");
    fill("#F90093");
    stroke("#F90093");
    square(noseY , noseX , difference);
    document.getElementById("square_sides").innerHTML = "Width and Height of the SQUARE will be: "+difference+"px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX + "noseY = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = "+leftWristX+"right wrist x = "+rightWristX+"difference = "+difference);
    }
}