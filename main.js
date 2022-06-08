var SpeechRecognition = window.webkitSpeechRecognition;
  
var my_agent= new SpeechRecognition();

 
function my_start()
{
    document.getElementById("textbox").innerHTML = ""; 
    my_agent.start();
} 
 
my_agent.onresult = function(event) {

 console.log(event); 

 my_content = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = my_content;


  if(my_content == "take my selfie"){
    agent_speak();
    
    //setTimeout(function(){},time in ms);

    setTimeout(function(){
        
        take_snapshot();

    },5000);
  ;
    
  }

 


}

function agent_speak(){

    var synth = window.speechSynthesis;

    var speak_data = "Taking your selfie in 5 seconds" ;

    var utter_data = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_data);

    Webcam.attach(my_cam);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality:90
     
});

my_cam = document.getElementById('camera');

function take_snapshot(){

    Webcam.snap(function(data_image){
        
        document.getElementById("result").innerHTML = "<img src = '" + data_image + "' id = 'my_selfie'>";

    });

 save_image();
}


function save_image(){

  my_save_tag = document.getElementById("save_link");
  my_image = document.getElementById("my_selfie").src;
  my_save_tag.href = my_image;

  my_save_tag.click();
  

}