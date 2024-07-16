const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    convertToRomanian(input.value);
})

function convertToRomanian(number) {
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

    
}