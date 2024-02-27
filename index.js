let noOfElements = document.querySelectorAll("button").length;

// code for click events

for (let i = 0 ; i < noOfElements; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       let buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       animation(buttonInnerHTML);
       
    });
    
}

// code for keyboard events

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
});


// function to make sound in both the cases

function makeSound (key){

    switch(key){
       
        case "w" :
         let crash = new Audio ('sounds/crash.mp3');
         crash.play();
        break;
        case "a" :
         let kick = new Audio ('sounds/kick-bass.mp3');
         kick.play();
        break;
        case "s" :
         let snare = new Audio ('sounds/snare.mp3');
         snare.play();
        break;
        case "d" :
         let tom1 = new Audio ('sounds/tom-1.mp3');
         tom1.play();
        break;
        case "j" :
         let tom2 = new Audio ('sounds/tom-2.mp3');
         tom2.play();
        break;
        case "k" :
         let tom3 = new Audio ('sounds/tom-3.mp3');
         tom3.play();
        break;
        case "l" :
         let tom4 = new Audio ('sounds/tom-4.mp3');
         tom4.play();
        break;
    
         
    }
}

// adding animation to keys 

function animation (currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
    },100);
}

