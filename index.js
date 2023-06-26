const text = document.querySelector(".text");

const mix = () => {
    const random = Math.ceil(Math.random() * 8);
    if (random === 1) {text.innerHTML = `${random}-ый`}
    if (random === 2) {text.innerHTML = `${random}-ой`}
    if (random === 3) {text.innerHTML = `${random}-ий`}
    if (random === 4) {text.innerHTML = `${random}-ый`}
    if (random === 5) {text.innerHTML = `${random}-ый`}
    if (random === 6) {text.innerHTML = `${random}-ой`}
    if (random === 7) {text.innerHTML = `${random}-ой`}
    if (random === 8) {text.innerHTML = `${random}-ой`}
}