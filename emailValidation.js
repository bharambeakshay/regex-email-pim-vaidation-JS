const readline = require('readline-sync');

//uc1 validating first part of the email 

let emailRegex = RegExp("^[A-Za-z]{3,}$")

function EmailValidation(email) {
    if (emailRegex.test(email)) {
        console.log(email + "  is in valid format");
        return true;
    }
    else throw "Incorect Email Format";
}

try {

    let email = readline.question(" Please Enter the email for validation: ");
    EmailValidation(email);
}
catch (e) {
    console.log(e);
}