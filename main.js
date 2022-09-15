status="";
input_name="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(480,380);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_of_model").innerHTML="Status: Detecting Objects";
    input_name=document.getElementById("input_name").value;
    console.log(input_name);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    
}
