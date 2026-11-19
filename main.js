const getFortunes = require('./fortunes.json')

function getFortune() {
    const randomIndex = Math.floor(Math.random() * getFortunes.length);
    return getFortunes[randomIndex];
}

module.exports = getFortune;

const message = getFortune();
console.log(message);