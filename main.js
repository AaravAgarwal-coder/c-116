noseX = 0;
noseY = 0;


function preload(){
    clown_nose = loadImage("https://i.postimg.cc/cJ0FnXJM/clown-nose-pic.jpg");
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x-5px;
       noseY = results[0].pose.nose.y-5px;

       console.log("nose x = " + noseX);
       console.log("nose y = " + noseY);
    }
    
}

function draw()
{
    Image(video, 0, 0, 350, 350);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 25);
    Image(clown_nose, noseX, noseY, 35, 35);

}

function take_snapshot(){
    save("myFilterImage.png");
}

