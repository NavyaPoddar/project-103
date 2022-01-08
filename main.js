selfie = "";
Webcam.set({
    width:400,
    height:280,
    image_format : "png",
    png_quatlity: 100
});

cameradiv = document.getElementById("camera");

Webcam.attach("#camera");

function clickimage(){
    Webcam.snap(function(imageurl){
        document.getElementById("clicked_image").innerHTML = '<img id="selfie" src = "' + imageurl+'">';
        selfie = document.getElementById("selfie");
    });
}

console.log(ml5.version);

myimagemodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ftxsGSPSZ/model.json" , modelloaded);

function modelloaded(){
    console.log("My image model has loaded !")
}


function identifyimage(){
    myimagemodel.classify(selfie , getresults);
}

function getresults(error , results){

    if(error){
        console.error(error)
        }

        else {
            console.log(results);
            document.getElementById("emotion_name").innerHTML = results[0].label;
            document.getElementById("emotion_accuracy").innerHTML = results[0].confidence * 100 + "%";
        }
}
