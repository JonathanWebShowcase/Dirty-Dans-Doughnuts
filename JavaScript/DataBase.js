/*
Since I cannot write to a txt file using vanilla js I will simple hard code my
customers information in an array of objects so I can work with the individual customers information
*/

//location.reload()
//CleanUpEverything()


//function that creates and instance of an object and then sends the array into a function to 
//add to Local storage
var Customers = FreshComputer()

function createCustomer(firstName,lastName,userName,passWord,address){
    let customer = new Object();
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.userName = userName;
    customer.passWord = passWord;
    customer.address = address;
    customer.orders = [];
    Customers.push(customer)
    addCustomersToDataBase(Customers);
}
//function to add customers toLocalStorage
function addCustomersToDataBase(newstring){
    let Data = JSON.stringify(newstring) //stringify the data
    localStorage.setItem("MyData", Data); //add key to string and put in local storage
}

//Function to retrieve the data in Local Storage, Returns the array of objects 
function retrieveDataBase(){
    let stringData = localStorage.getItem("MyData") //grab string data
    let DATABASESTUFF = JSON.parse(stringData); //turn to code to return the array of objects 
    console.log(DATABASESTUFF);
    return DATABASESTUFF;
}

//Function to update Local Storage when An order is placed
function addReceipt(){
    //Take the value of who is logged in
    //Take the current Data into a variable
    //push into the customers order array
    //Send Updated Data to Local Storage
}

//Function that runs when you have logged in and assigns a value for the index of the object
function isLoggedIn(index){
    //When you log in it will find the first instance of that username within the array
    let stringData = JSON.stringify(index);
    localStorage.setItem("CustomerID", stringData);
    //and then pass a number variable to represent the index
    localStorage.setItem("LoggedIN", "true");
    //Store that number into local storage as a new key so we can do the gabagoo
}

//Returns the status of wether or not you are logged in by checking the truthy value of wether 
//Local storage has something
function loggedInStatus(){
    if (localStorage.getItem("LoggedIN")){
        return localStorage.getItem("CustomerID")
    }
    else{
        return false
    }
}

function WhichCustomer(){
    let CustomerIndex = localStorage.getItem("CustomerID")
    let Index = JSON.parse(CustomerIndex);
    return Index
}

function FreshComputer(){
    if (retrieveDataBase()){
        return retrieveDataBase()
    }
    else{
        return [{
            firstName: "Student",
            lastName: "Trials",
            userName: "PCCCPanther123",
            passWord: "Jr09152003##",
            orders: []
        }]
    }
}

function CleanUpEverything(){
    localStorage.clear("CustomerID")
    localStorage.clear("LoggedIN")
    localStorage.clear("MyData")
}
