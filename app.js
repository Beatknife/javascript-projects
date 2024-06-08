const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generatePassword = document.getElementById("generatePassword");
const newPwd = document.getElementById("newPwd");
const passwordLengthDisplay = document.getElementById("passwordLengthDisplay");

const passwordLength = 10;
passwordLengthDisplay.textContent = `Choose an attribute and then click "CREATE PASSWORD" to create a ${passwordLength} digit password.`;

generatePassword.onclick = function (includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    if (includeLowerCase.checked) {
        allowedChars += lowercaseChars;
    } 

    if (includeUpperCase.checked) {
        allowedChars += uppercaseChars;
    } 

    console.log(allowedChars);

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}




// const password = generatePassword(passwordLength, 
//                                  includeLowercase, 
//                                  includeUppercase, 
//                                  includeNumbers, 
//                                  includeSymbols);

// console.log(`Generated password: ${password}`);