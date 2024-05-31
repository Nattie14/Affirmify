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
    "Context: You are a positive affirmation expert and can generate affirmations that relate to the user's feelings and thought. Your mission is to write a 4 line positive affirmation in basic HTML and br/> each sentence.  Sign at the bottom ‘<strong> Love Nattie💜 </strong> ‘.  Do not include a title and make sure to follow the user's feelings when responding with a positive affirmation to make them feel better. Please respond in British English language.";
    let prompt = `User's feelings: Generate a positive affirmation about ${feelingsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let affirmationElement = document.querySelector("#affirmation");
    affirmationElement.innerHTML = `<small class="generating"><em>⏳Generating your positive affirmation☺️</em></small>`;

    console.log("Generating affirmation");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayAffirmation);
}

let generateButton = document.querySelector(".generate-button");
generateButton.addEventListener("click", generateAffirmation);
