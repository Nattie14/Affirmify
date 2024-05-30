function displayAffirmation(response) {
    new Typewriter("#affirmation", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateAffirmation(event) {
    event.preventDefault();

    let feelingsInput = document.querySelector("#user-feelings");

    let apiKey = "ba4608fb3t14e3e4af50o5a7601d9309";
    let context = 
    "You are a positive affirmation expert and can generate affirmations that relate to the user's feelings and thought. Your mission is to write a 4-6 line affirmation in basic HTML and br/> each sentence. Sign at the bottom 'With love Nattie💜' and make sure to sign only in bold and italics, the rest of the affrimation should remain normal text in <strong> at the bottom. Do not include a title and make the line height 1.5. Make sure to follow the user's feelings when responding with a positive affirmation to make them feel better. Please respond in british english langauge";
    let prompt = `User's feelings: Generate a positive affirmation about ${feelingsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    console.log("Generating affirmation");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayAffirmation);
}

let generateButton = document.querySelector(".generate-button");
generateButton.addEventListener("click", generateAffirmation);
