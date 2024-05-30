function generateAffirmation(event) {
    event.preventDefault();

    

    new Typewriter("#affirmation", {
        strings:"You are more than strong!!" ,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

  
}

let generateButton = document.querySelector(".generate-button"); 
generateButton.addEventListener("click", generateAffirmation); 

