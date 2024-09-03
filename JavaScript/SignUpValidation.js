/* 
This script will look through a users sign up form and validate 
the values for proper account creation.
This will also toggle displaying the rules for the sign up form.
If correct the new account is created using the data and is then sent into a 
function to record it to a txt file.
*/

//Variables For Form Items to Validate
var firstName = document.getElementById("FirstName");
var lastName = document.getElementById("LastName");
var userName = document.getElementById("UserName");
var password = document.getElementById("Password");
var confPass = document.getElementById("ConfirmPassword");
var address = document.getElementById("Adress");

//Grabbing Form

var SignUpForm = document.getElementById("SignUp");




// Events
firstName.addEventListener("keyup", firstNameValidation)
firstName.addEventListener("focus", openFirstNameRules);
firstName.addEventListener("blur", closeFirstNameRules)

lastName.addEventListener("keyup", lastNameValidation);
lastName.addEventListener("focus", openLastNameRules);
lastName.addEventListener("blur", closeLastNameRules);

userName.addEventListener("keyup", userNameValidation);
userName.addEventListener("focus", openUserNameRules);
userName.addEventListener("blur", closeUserNameRules);

password.addEventListener("keyup", passwordValidation);
password.addEventListener("focus", openPasswordRules);
password.addEventListener("blur", closePasswordRules);

confPass.addEventListener("blur", confirmPasswordValidation)






SignUpForm.addEventListener('submit', SignUpValidationFunc) //Validation For Submitting To TXT file

// Functions

                //First Name Validation
function firstNameValidation(e){
    let value = firstName.value;
    let symbols = /[%^&*()]/;
    let numbers = /[1234567890]/;
    let firstNameRules = document.getElementsByClassName("firstNameRules");
    for (item of firstNameRules){
        item.id = "InValid"
    }


    if (value.length > 3){
        firstName.className = "InputValid";
        firstNameRules[0].id = "Valid";
    }
    else{
        firstName.className = "InputInValid";
        return false
        /* Think ahead with the data flow and use functions for multiple purposes , by using a return statement
        I can then use this on the submit function and return error just by calling the function inside the 
        submit function */
    }
    if (value.length < 20){
        firstName.className = "InputValid";
        firstNameRules[1].id = "Valid";
    }
    else{
        firstName.className = "InputInValid";
        return false 
    }
    //True if found False if not found so you must reverse it 
    if (!symbols.test(value)){
        firstName.className = "InputValid";
        firstNameRules[2].id = "Valid";
    }
    else{
        firstName.className = "InputInValid";
        return false
    }
    if (!numbers.test(value)){
        firstName.className = "InputValid";
        firstNameRules[3].id = "Valid";
    }
    else{
        firstName.className = "InputInValid";
        return false
    }

    return true
}
function openFirstNameRules(e){
    let rules = document.getElementById("firstNameRules");
    rules.className = "firstNameRuleON";

    if (firstNameValidation()){
        firstName.className = "InputValid";
    }
    else{
        firstName.className = "InputInValid";
    }
}
function closeFirstNameRules(e){
    let rules = document.getElementById("firstNameRules");
    rules.className = "firstNameRulesOFF";

    if (firstNameValidation()){
        firstName.className = "InputValid";
    }
    else{
        firstName.className = "InputInValid";
    }
}
                //Last Name Validation
function lastNameValidation(e){
    let value = lastName.value;
    let symbols = /[%^&*()]/;
    let numbers = /[1234567890]/;
    let lastNameRules = document.getElementsByClassName("lastNameRules");
    for (item of lastNameRules){
        item.id = "InValid"
    }


    if (value.length > 3){
        lastName.className = "InputValid";
        lastNameRules[0].id = "Valid";
    }
    else{
        lastName.className = "InputInValid";
        return false
        /* Think ahead with the data flow and use functions for multiple purposes , by using a return statement
        I can then use this on the submit function and return error just by calling the function inside the 
        submit function */
    }
    if (value.length < 20){
        lastName.className = "InputValid";
        lastNameRules[1].id = "Valid";
    }
    else{
        lastName.className = "InputInValid";
        return false 
    }
    //True if found False if not found so you must reverse it 
    if (!symbols.test(value)){
        lastName.className = "InputValid";
        lastNameRules[2].id = "Valid";
    }
    else{
        lastName.className = "InputInValid";
        return false
    }
    if (!numbers.test(value)){
        lastName.className = "InputValid";
        lastNameRules[3].id = "Valid";
    }
    else{
        lastName.className = "InputInValid";
        return false
    }

    return true
}
function openLastNameRules(e){
    let rules = document.getElementById("lastNameRules");
    rules.className = "lastNameRulesON";
    if (lastNameValidation()){
        lastName.className = "InputValid";
    }
    else{
        lastName.className = "InputInValid";
    }  
}
function closeLastNameRules(e){
    let rules = document.getElementById("lastNameRules");
    rules.className = "lastNameRulesOFF";
    if (lastNameValidation()){
        lastName.className = "InputValid";
    }
    else{
        lastName.className = "InputInValid";
    } 
}           
                //User Name Validation
function userNameValidation(e){
    let value = userName.value;
    let symbols = /[!@#$%^&*()]/;
    let numbers = /[1234567890]/;
    let userNameRules = document.getElementsByClassName("userNameRules")
    let userNameRulesContainer = document.getElementById("userNameRules")
    for (items of userNameRules){
        items.id = "InValid"
    }

    if (value.length > 5){
        userName.className = "InputValid";
        userNameRules[0].id = "Valid";
    }
    else{
        userName.className = "InputInValid";
        return false;
    }
    if (value.length < 15){
        userName.className = "InputValid";
        userNameRules[1].id = "Valid";
    }
    else{
        userName.className = "InputInValid";
        return false;
    }
    if (numbers.test(value)){
        userName.className = "InputValid";
        userNameRules[2].id = "Valid";
    }
    else{
        userName.className = "InputInValid";
        return false;
    }
    if (!symbols.test(value)){
        userName.className = "InputValid";
        userNameRules[3].id = "Valid";
    }
    else{
        userName.className = "InputInValid";
        return false
    }


    let userNameContainer = document.getElementById("DoesUserExist")
    let MSGFOrUSER = document.getElementById("UserMSG")

    function CheckUserNames(){
        console.log("Inside")
        let Data;
        let returnVariable;
        if (retrieveDataBase()){
            Data = retrieveDataBase()
            let arrayOfUserNames =[];
            for (items of Data){
                let value = items.userName;
                arrayOfUserNames.push(value);
                console.log(arrayOfUserNames)
            }

           for(item of arrayOfUserNames){
            console.log("THe Item is" + item)
            console.log("The Input value is " + userName.value)
            if (userName.value == item){
                console.log("they be matching")
                returnVariable = true
                break
            }
            else{
                console.log("Thats him officer")
                returnVariable = false
            }
           }
        }

        return returnVariable

    }
    let userExist = CheckUserNames();
    console.log(userExist)
    if (userExist){
        console.log("ImInside here so why no work")
        userNameContainer.className = "userNameRulesON"
        userNameRulesContainer.className = "userNameRulesOFF"
        MSGFOrUSER.textContent = "Username Taken"
        MSGFOrUSER.className = "InvalidMsg"
        return false
    }
    else{
        userNameContainer.className = "userNameRulesOFF"

    }

    return true;

}
function openUserNameRules(e){
    let rules = document.getElementById("userNameRules");
    rules.className = "userNameRulesON"

    if (userNameValidation()){
        userName.className = "InputValid";
    }
    else{
        userName.className = "InputInValid";
    }  
}
function closeUserNameRules(e){
    let rules = document.getElementById("userNameRules");
    rules.className = "userNameRulesOFF"

    if (userNameValidation()){
        userName.className = "InputValid";
    }
    else{
        userName.className = "InputInValid";
    }  
}
                //Password Validation
function passwordValidation(e){
    let value = password.value;
    let symbols = /[!@#$%^&*()]/;
    let numbers = /[1234567890]/;
    let Upper = /[A-Z]/;
    let Lower = /[a-z]/;
    let passwordRules = document.getElementsByClassName("passwordRules");
    for (item of passwordRules){
        item.id = "InValid"
    }

    if (value.length > 6){
        password.className = "InputValid";
        passwordRules[0].id = "Valid";
    }
    else{
        password.className = "InputInValid";
        return false;
    }
    if (Upper.test(value)){
        password.className = "InputValid";
        passwordRules[1].id = "Valid";
    }
    else{
        password.className = "InputInValid";
        return false;
    }
    if (Lower.test(value)){
        password.className = "InputValid";
        passwordRules[2].id = "Valid";
    }
    else{
        password.className = "InputInValid";
        return false;
    }
    if (numbers.test(value)){
        password.className = "InputValid";
        passwordRules[3].id = "Valid";
    }
    else{
        password.className = "InputInValid";
        return false;
    }
    if (symbols.test(value)){
        password.className = "InputValid";
        passwordRules[4].id = "Valid"
    }
    else{
        password.className = "InputInValid";
        return false;
    }

    return true


}
function openPasswordRules(e){
    let rules = document.getElementById("passwordRules");
    rules.className = "passwordRulesON"

    if (passwordValidation()){
        password.className = "InputValid";
    }
    else{
        password.className = "InputInValid";
    }  
}
function closePasswordRules(e){
    let rules = document.getElementById("passwordRules");
    rules.className = "passwordRulesOFF"

    if (passwordValidation()){
        password.className = "InputValid";
    }
    else{
        password.className = "InputInValid";
    }  
}
                //Confirm Password Validation
function confirmPasswordValidation(e){
    let passing = false
    let original = password.value;
    let container = document.getElementById("passwordConfirmRules");
    let rules = document.getElementsByClassName("passwordConfirmRules");
    container.className = "passwordConfirmRulesON"
    if (original === confPass.value && passwordValidation()){
        rules[0].id = "Valid"
        rules[0].textContent = "Password Matches"
        confPass.className = "InputValid";
        setTimeout(closeConfirmPasswordRules, 5000)
    }
    else if (!passwordValidation()){
        confPass.className = "InputInValid";
        rules[0].id = "InValid"
        rules[0].textContent = "Please Enter A Valid Password"
    }
    else{
        confPass.className = "InputInValid";
        rules[0].id = "InValid"
        rules[0].textContent = "Passwords Do Not Match"
    }
}
function closeConfirmPasswordRules(e){
    let container = document.getElementById("passwordConfirmRules")
    container.className = "passwordConfirmRulesOFF"
}



//Final Function to see if all the form data is valid and then sends to the createCustomer function from
//database.js 
function SignUpValidationFunc(e){
    e.preventDefault();
    let MsgContainer = document.getElementById("FinalMess")
    let Msg = document.getElementById("MsgForEnd");

    if (firstNameValidation &&
        lastNameValidation &&
        userNameValidation &&
        passwordValidation&&
        confirmPasswordValidation){

            Msg.className = "ValidMsg"
            Msg.textContent = "Welcome" + firstName.value

            createCustomer(firstName.value,lastName.value,userName.value,password.value)

            SignUpForm.reset()
        }
        else{
            Msg.className = "InvalidMsg"
            Msg.textContent = "Something Went Wrong"
        }

}