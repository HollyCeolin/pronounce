const Rollbar = require("rollbar");

let cinnamon = document.querySelector('img')
let consonants = document.getElementById('cons')
let continents = document.getElementById('continent')
let synonym = document.getElementById('synonym')
const grammarAlert1 = evt => {
    alert("It's pronounced sin-uh-mun, NOT synonym")
    Rollbar.log("clicked")
};

const grammarAlert2 = evt => {
    alert("These are NOT continents, but, they are kaan·suh·nuhnts!")
};

const grammarAlert3 = evt => {
    alert("These are actual continents, as you can see, they look NOTHING like consonants!")
};

const grammarAlert4 = evt => {
    alert("Unlike the cinnamon from above, this is actually pronounced, si·nuh·nuhmz")
}

cinnamon.addEventListener('click', grammarAlert1)
consonants.addEventListener('click', grammarAlert2)
continents.addEventListener('click', grammarAlert3)
synonym.addEventListener('click', grammarAlert4)