function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/a71QhgK3g/model.json',modelLoaded);
    }
    function modelLoaded(){
    classifier.classify(gotResults);
    }
    function gotResults(error,results){
    if(error){
    console.log(error);
    }
    else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    
    document.getElementById("result_label").innerHTML="I can hear:- "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy:- "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
    
img=document.getElementById("animal_image");
    
    if(results[0].label=="Meowing"){
    img.src="meowing.gif";
    }
    else if(results[0].label=="Barking"){
    img.src="barking.gif";
    }
    else if(results[0].label=="Roaring"){
    img.src="roaring.gif";
    }
    else{
    img.src="mooing.gif";
    }
    }
    }