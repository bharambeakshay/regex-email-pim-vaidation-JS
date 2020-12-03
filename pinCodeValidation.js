//uc1 pincode validation for  6 digit number
//uc2 pattern validates numbers only as input , 
//it restricts special characters or alphabets
let pincodeRegex = RegExp("[1-9]{1}[0-9]{5}");
function PincodeValidation(pincode) {
    if (pincodeRegex.test(pincode) && pincode.length === 6) {
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