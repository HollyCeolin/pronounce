let cinnamon = document.querySelector('img')
let consonants = document.getElementById('cons')
let continents = document.getElementById('continent')
let synonym = document.getElementById('synonym')
let directory = document.getElementById('directory')
let deer = document.getElementById('deer')
let kelvin = document.getElementById('kelvin')
let lukas = document.getElementById('lukas')
const grammarAlert1 = evt => {
    alert("It's pronounced sin-uh-mun, NOT synonym")
};

const grammarAlert2 = evt => {
    alert("These are NOT continents, but, they are kaan·suh·nuhnts!")
};

const grammarAlert3 = evt => {
    alert("These are actual continents, as you can see, they look NOTHING like consonants!")
};

const grammarAlert4 = evt => {
    alert("Unlike the cinnamon from above, this is actually pronounced, si·nuh·nuhmz")
};

const grammarAlert5 = evt => {
    alert("This is not a 'deer', it is a dr·ek·tr·ee")
};

const grammarAlert6 = evt => {
    alert("This is not a directory, but, it is a d-Ear")
};

const grammarAlert7 = evt => {
    alert("This is what happens when you leave early!")
};

const grammarAlert8 = evt => {
    alert("It is correctly spelled l u K a s!")
};



cinnamon.addEventListener('click', grammarAlert1)
consonants.addEventListener('click', grammarAlert2)
continents.addEventListener('click', grammarAlert3)
synonym.addEventListener('click', grammarAlert4)
directory.addEventListener('click',grammarAlert5)
deer.addEventListener('click', grammarAlert6)
kelvin.addEventListener('click', grammarAlert7)
lukas.addEventListener('click', grammarAlert8)