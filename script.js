const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
/* linking the html elements to javascript variables through the DOM i think */
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let passwordLengthInputEl = document.getElementById("passwordLength")

/* calls the function that generates the password twice */
function setPassword() {
    password1El.textContent = generatePassword();
    password2El.textContent = generatePassword();

}
 /*uses the math functions to generate a random number. Used in for loop to create password string */
function generatePassword() {
    let tempArray = [];
    for (let i = 0; i < passwordLengthInputEl.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        
        tempArray += characters[randomIndex];
        ;
    }
    return tempArray;
}