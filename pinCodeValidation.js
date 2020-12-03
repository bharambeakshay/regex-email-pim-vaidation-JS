//uc1 pincode validation for  6 digit number
// the following pattern validates numbers only as input , 
//pincodeRegex restricts special characters or alphabets (uc2) at start as well as at end (uc3)
// uc4 spacing after 3 digit is added
let pincodeRegex = RegExp("^[0-9]{3}[ ]*[0-9]{3}$");
function PincodeValidation(pincode) {
    if (pincodeRegex.test(pincode)) {
        console.log(pincode + "  is in valid format");
    }
    else throw "Invalid Pincode Format";
}
try {
    //readline-sync waits for users response and make it synchronised
    var readline = require('readline-sync');
    let pincode = readline.question(" Please Enter the pincode for validation: ");
    PincodeValidation(pincode);
}
catch (e) {
    console.log(e);
}