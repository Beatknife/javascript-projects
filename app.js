const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generatePassword = document.getElementById("generatePassword");
const newPwdLbl = document.getElementById("newPwdLabel");
const passwordLengthDisplay = document.getElementById("passwordLengthDisplay");

const passwordLength = 10;
passwordLengthDisplay.textContent = `Choose an attribute and then click "CREATE PASSWORD" to create a ${passwordLength} digit password.`;

generatePassword.onclick = function(){
    let generatedPassword = generatePasswordFunc(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    newPwdLbl.textContent = `Generated Password: ${generatedPassword}`;
}


function generatePasswordFunc(pwdLength, isIncludeLowerCase, isIncludeUpperCase, isIncludeNumbers, isIncludeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    if (isIncludeLowerCase.checked) {
        allowedChars += lowercaseChars;
    } 

    if (isIncludeUpperCase.checked) {
        allowedChars += uppercaseChars;
    } 

    if (isIncludeNumbers.checked) {
        allowedChars += numberChars;
    } 

    if (isIncludeSymbols.checked) {
        allowedChars += symbolChars;
    } 

    if(pwdLength < 1){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < pwdLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}