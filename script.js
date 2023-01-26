/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");
let storyopening=document.querySelector(".story-opening");
let Button1=document.querySelector(".option-one");
let Button2=document.querySelector(".option-two");
let option1=document.querySelector(".option-one-screen");
let option2=document.querySelector(".option-two-screen");
let endingOne=document.querySelector(".option-one-end");
let endingTwo=document.querySelector(".option-two-end");




Button1.onclick=function(){
option1.style.display="block";
storyopening.style.display="none";
option2.style.display="none";
};


Button2.onclick=function(){
option2.style.display="block";
storyopening.style.display="none";
    option1.style.display="none";
};

option1.onclick=function(){
endingOne.style.display="block";
  storyopening.style.display="none";
};

endingOne.onclick=function(){
endingTwo.style.display="block";

};

