const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    if (input.value === "") {
        output.style.display = "block";
        output.style.backgroundColor = "#be2929"
        output.textContent = "Please enter a valid number";
    }

    if (input.value <= 0) {
        output.style.display = "block";
        output.style.backgroundColor = "#be2929"
        output.textContent = "Please enter a number greater than or equal to 1";
    }

    if (input.value >= 4000) {
        output.style.display = "block";
        output.style.backgroundColor = "#be2929"
        output.textContent = "Please enter a number less than or equal to 3999";
    }
    convertToRomanian();
})

function convertToRomanian() {
    output.style.display = "block";
    output.style.backgroundColor = "#6165ad";
}