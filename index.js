const text = document.querySelector(".text");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const dotared = document.querySelector(".dotaredtext");
const dotagreen = document.querySelector(".dotagreentext");

function mix() {
    const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
    const commandir1 = getRandomNumber(numbers);
    const commandir2 = getRandomNumber(numbers.filter(num => num !== commandir1));
    text.innerHTML = `${commandir1} и ${commandir2}`
}

function mixTeams() {
    const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const command1 = getRandomNumber2(allNumbers, 4)
    const command2 = allNumbers.filter(num => !command1.includes(num))
    red.innerHTML = `${command1.join(" ")}`
    blue.innerHTML = `${command2.join(" ")}`
}

function mixDota() {
    const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const command1 = getRandomNumber2(allNumbers, 5)
    const command2 = allNumbers.filter(num => !command1.includes(num))
    dotared.innerHTML = `${command1.join(" ")}`
    dotagreen.innerHTML = `${command2.join(" ")}`
}

const getRandomNumber = (numbers) => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers.splice(randomIndex, 1)[0];
}
const getRandomNumber2 = (array, size) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}

function init() {
    mix()
    mixTeams()
    mixDota()
}
init()