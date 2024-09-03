/*
Validate Username and password to see if they match what is already in the 
LocalStorage Database
*/
// Starting to Use IIFE to avoid global issues

let LoginForm = document.getElementById("LoginForm");
let username = document.getElementById("username");
let password = document.getElementById("password");

LoginForm.addEventListener("submit", LoggingIn);



//uses the retrieveDataBase function to make an array of all the usernames
function getUserNames(){
    let Data = retrieveDataBase();
    let arrayOfUserNames = [];
    console.log(Data)
    for (items of Data){
        let value = items.userName;
        arrayOfUserNames.push(value);
    }
    return arrayOfUserNames
}
//uses the retrieveDataBase function to make an array of all the passwords
function getPassWords(){
    let Data = retrieveDataBase();
    let arrayOfPasswords = [];
    for (items of Data){
        let value = items.passWord;
        arrayOfPasswords.push(value);
    }
    return arrayOfPasswords
}

let UserNamesArray = getUserNames();
let PassWordsArray = getPassWords();

function checkUserAccount(){
    let uservalue = username.value;
    let passvalue = password.value;
    let user;
    let pass;
    for (inUsername of UserNamesArray){ //checks if username matches one in array
        if (uservalue === inUsername){
            console.log("match user")
            user = true;
            break;
        }
        else{
            user = false;
        }
    }
    for (inPassword of PassWordsArray){ //checks if password matches one in array
        if (passvalue === inPassword){
            pass = true;
            console.log("match password")
            break;
        }
        else{
            pass = false;
        }
    }
    console.log ("this is pass " + pass)
    console.log ("this is user " + user)
    if (user && pass){
        console.log("does this work?")
        let trialOne = UserNamesArray.indexOf(uservalue);
        let trialTwo = PassWordsArray.indexOf(passvalue);
        console.log(trialOne + "proof")
        console.log(trialTwo + "proof")
        let indexPath = trialOne
        console.log("indexPaths is " + indexPath)
        isLoggedIn(indexPath); //sends index of where the user information is in the array so we can access info eslewhere
        return true
    }
    else{
        return false
    }

}

function LoggingIn(e){
    let Msg = document.getElementById("Messege");
    let container = document.getElementById("MsgText");
    e.preventDefault();
    if (checkUserAccount()){
        console.log("checkUsername Retuened true")
        container.className = "showMsg"
        Msg.textContent = "Welcome!"
        Msg.className = "Valid"
    }
    else{
        container.className = "showMsg"
        Msg.className = "InValid"
        Msg.textContent = " Invalid Token(s) Please Try Again"
    }

    /*runs the check userAccount function and displays messeges to the user when something is valid or invalid*/
}
