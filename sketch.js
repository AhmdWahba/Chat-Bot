
let logo;

let inp; // input variable
let sendBtn; //send button variable
let navBtn;
let humanText="";
let boText = "";
let speechRec;
// let myVoice;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#000080');


  imageMode(CENTER); //adjust image mode
  //Using a call back function to load first image
  loadImage('EUE-Logo.png', logo => {
    image(logo, width / 2, height / 2 - 100, 500, 150);
  });
    //input field form
    inp = createInput('');
    inp.position(50, height - 350); // positioning the text area
    inp.attribute('placeholder','ask bot')// placeholder
    inp.size(windowWidth -250);  // text area width

    inp.input(humanInputEvent);// calling the input function

    //send button
    sendBtn = createButton('send');
    sendBtn.position(width-150,height-300);//btn position
    sendBtn.size(100);
    sendBtn.mousePressed(submitQuestion);
    sendBtn.addClass("btn btn-warning");

    //navigate button 
    navBtn = createButton('use sound');
    navBtn.position(width-150,300);
    navBtn.size(100);
    navBtn.mousePressed(navigate);
    navBtn.addClass("btn btn-warning")

    // let myVoice =new p5.Speech();
    // myVoice.speak("say anything");

  // myVoice = new p5.Speech();
  speechRec = new p5.SpeechRec('en-us',gotSpeech);
  gotSpeech();
  speechRec.start(true,false);

  //draw an empty textbox
  rectX = width / 2;
  rectY = height - 125;
  rectMode(CENTER);
  rect(rectX, rectY, windowWidth - 50, 200, 20);


}
//Speech function 
function gotSpeech(){
  if(speechRec.resultValue == true){
    console.log(speechRec.resultString);
    myVoice.speak(speechRec.resultString);

    humanText = speechRec.resultString;
  }
}

function submitQuestion(){
  setTimeout( () =>{
    console.log("aaaaaaaa")
    humanText = inp.value();
  }, 2000)
}

function humanInputEvent(){
  console.log("this is the user input:"+ this.value);
}

function navigate(){
  //
  inp.hide();// hide text area
  sendBtn.hide();//hide send btn
}

function draw() {
  //background(220);
  // clear the chat by making white baground every time
  fill(255);
  rectX = width / 2;
  rectY =  height - 125;
  rectMode(CENTER);
  rect(rectX,rectY, windowWidth-50,200,20)


   //human text
  textSize(20);
  textAlign(LEFT);
  fill(0);
  textFont('sans');
  text("> Human text:" + humanText, (width/15), height-200);

  // if else bot statements
  if (humanText.includes("hello")){
    boText ="hello there!"
  }else if (humanText.includes("good morning")){
    boText = "guten morgen"
  }else if( humanText != ""){
    boText = "I cannot understand u, please ask again"
  }
  // draw bot text inside the box
  let padding =20;
  textSize(20);
  textAlign(RIGHT);
  strokeWeight(1);
  stroke(20);
  text(boText +": Bot respond <", rectX, rectY+ (3*padding) ,windowWidth -75,190);

  }
  //gotSpeech();


