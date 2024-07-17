const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    convertToRomanian(input.value);
})

function convertToRomanian(number) {

    const romanianCharacters = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let roman = "";

    if (number === "") {
        output.style.display = "block";
        output.style.backgroundColor = "#be2929"
        output.textContent = "Please enter a valid number";
        return;
    }

    if (number <= 0) {
        output.style.display = "block";
        output.style.backgroundColor = "#be2929"
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (number >= 4000) {
        output.style.display = "block";
        output.style.backgroundColor = "#be2929"
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    for (let key in romanianCharacters) {
        while (number >= romanianCharacters[key]) {
            roman += key;
            number -= romanianCharacters[key];
        }
    }

    output.style.display = "block";
    output.textContent = roman;
}