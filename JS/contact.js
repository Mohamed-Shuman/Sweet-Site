// form check
let emailInp = document.querySelector(".email")
let regExp = /(\W|^)[\w.\-]{0,25}@(yahoo|hotmail|gmail)\.com(\W|$)/;
// \W matches any character that’s not a letter, digit, or underscore. It prevents the regex from matching characters before or after the email address.
// ^ matches the start of a new line. Allows the regex to match the address if it appears at the beginning of a line, with no characters before it.
// $ matches the end of a line. Allows the regex to match the address if it appears at the end of a line, with no characters after it.
document.forms[0].onsubmit= function (e) {
    if(regExp.test(emailInp.value) === false){
        e.preventDefault();
    }
};