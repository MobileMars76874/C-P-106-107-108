prediction = null;

Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function C_I()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Tudcoijgo/model.json",modelLoaded);
function modelLoaded(){
console.log("Model Loaded!");
}

function Image_I(){
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results){
if (error) {
console.log(error);
}
else{
console.log(results);
prediction = results[0].label
document.getElementById("result_gesture_name").innerHTML = prediction;
speak();
if(prediction == "amazing"){
document.getElementById("E").innerHTMl = "&#x1F44C;"
}
else if(prediction == "best"){
document.getElementById("E").innerHTML = "&#128077;"
}
else if(prediction == "victory"){
document.getElementById("E").innerHTML = "&#9996;"
}
}
}

function speak(){
synth = window.speechSynthesis;
s_prediction = "The prediction is"+prediction;
var utter_this = new SpeechSynthesisUtterance(s_prediction);
synth.speak(utter_this);
}

