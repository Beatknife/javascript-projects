const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const alphanumerical = "abcçdefgğhıijklmnoöprsştuüvyzqwx0123456789"

checkBtn.addEventListener("click", () => {
  if(textInput.value === "") {
    alert("Please input a value");
    return;
  };

  isPalindrome(textInput.value);
})

function isPalindrome(str) {
  console.log("zort");
  let cleanedStr = str.toLowerCase()
                  .split("")
                  .filter((char) => alphanumerical.includes(char))
                  .join("");
  console.log(cleanedStr)

  let reversedStr = cleanedStr.split("").reverse().join("");
  if(cleanedStr === reversedStr) {
    console.log("zort2");
    return result.innerHTML = `<strong>${str}</strong> is a palindrome`;
  }

  return result.innerHTML = `<strong>${str}</strong> is not a palindrome`;
}