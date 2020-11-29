let name = document.getElementById('name');
let email = document.getElementById('email');
let textarea = document.getElementById('textarea');
let submit = document.getElementById('submit');

name.addEventListener('input', checkIfEmpty);
email.addEventListener('input', checkIfEmpty);
textarea.addEventListener('input', checkIfEmpty);

function checkIfEmpty() {
    if(name.value === "" || email.value === "" || textarea.value === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
}

submit.addEventListener('click', checkRegex);

let anyWordCharacter = /\w/;
let onlyLettersAndSpace = /^[a-zA-Z\s]+$/;
//let startWithCapitalLetter = /[A-Z]{1}[a-z]+/;
let emailRegex = /^[\w]+@[\w]+\.[\w]+$/;

function checkRegex() {
    if(anyWordCharacter.test(name.value) && onlyLettersAndSpace.test(name.value) && emailRegex.test(email.value)) {
        alert(`Thanks ${name.value}! Message has been sent!`);
        name.value = "";
        email.value = "";
    } else if (!anyWordCharacter.test(name.value) || !onlyLettersAndSpace.test(name.value)) {
        alert("Name should contain any character and only letters and space");
    } else if (!emailRegex.test(email.value)){
        alert("Email should has @ and . characters");
    }
}
