/* 
Make a responsive OrderNow form where the user can see how many doughnuts they have left to order
and produce a receipt at the end when they press order now
*/





//grab Form
var OrderNowForm = document.getElementById("OrderNow");

//Grab Page Items
var orderFirstName = document.getElementById("FirstNameOrder");
var orderLastName = document.getElementById("LastNameOrder");
var orderAdress = document.getElementById("Adress");
var platterMSG = document.getElementById("PlatterErrorMsg");
var flavorContainer = document.getElementById("FlavorSelectorContainer");
var platterContainer = document.getElementById("PlatterSizeContainer");
var leftButton = document.getElementsByClassName("left-button");
var rightButton = document.getElementsByClassName("right-button")
var PlatterOptions = document.getElementsByClassName("OrderCardContainer");
console.log(PlatterOptions)

//Grabing Input fields by ID
var fudge = document.getElementById("DeepFudge");
var apple = document.getElementById("AppleFrit");
var custard = document.getElementById("Custard");
var jellu = document.getElementById("Jelly");
var sprinkle = document.getElementById("Sprinkle");
var beignet = document.getElementById("Beignets");
var glazed = document.getElementById("Glaze");

//setting A value to assign to the Input Fields
var fudgeValue = 0
var appleValue = 0
var custardValue = 0
var jelluValue = 0
var sprinkleValue = 0
var beignetValue = 0
var glazedValue = 0

//Adding Event Listeners
platterContainer.addEventListener('click', platterPicker)
window.addEventListener("load", PopulateForm);
OrderNowForm.addEventListener('submit',priceCalculator)

/*
//Loop Through OrderCard To Change Background Color
for (item of PlatterOptions){
    item.addEventListener('click',isChecked);
}
function isChecked(e){
    let value = e.target;
    let container = value.parentNode
    console.log(value);
    console.log(container)
    if (value.checked){
        container.style.backgroundColor = "greenyellow";
    }
    else{
        container.style.backgroundColor = "393957"
    }
}
*/

//Call function from Database.js to see if logged in and fill in page with values
function PopulateForm(){
    if (loggedInStatus()){
        console.log("You are logged in")
        let Data = retrieveDataBase();
        let index = localStorage.getItem("CustomerID")

        orderFirstName.value = Data[index].firstName;
        orderLastName.value = Data[index].lastName;
    }
}

//Function to decide which platter was picked and assigning it a value
var PlatterSize = 0;
function platterPicker(){
    let passing = false
    if(document.getElementById("peasent").checked){
        PlatterSize = 24;
        platterMSG.textContent = "You Have " + PlatterSize + " Doughnut's Left"
        platterMSG.className = ""
        PlatterOptions[0].style.backgroundColor = "greenyellow";
        PlatterOptions[1].style.backgroundColor = "#393957";
        PlatterOptions[2].style.backgroundColor = "#393957";
        passing = true
    }
    else if(document.getElementById("noble").checked){
        PlatterSize = 60;
        platterMSG.textContent = "You Have " + PlatterSize + " Doughnut's Left"
        platterMSG.className = ""
        PlatterOptions[0].style.backgroundColor = "#393957";
        PlatterOptions[1].style.backgroundColor = "greenyellow";
        PlatterOptions[2].style.backgroundColor = "#393957";
        passing = true
    }
    else if(document.getElementById("king").checked){
        PlatterSize = 120;
        platterMSG.textContent = "You Have " + PlatterSize + " Doughnut's Left"
        platterMSG.className = ""
        PlatterOptions[0].style.backgroundColor = "#393957";
        PlatterOptions[1].style.backgroundColor = "#393957";
        PlatterOptions[2].style.backgroundColor = "greenyellow";
        passing = true
    }
    else{
        platterMSG.textContent = "You Must Select A Platter Size"
        platterMSG.className = "InValid"
        passing = false
    }
    return passing
}


//Loop adding events to each of the left buttons 
for (item of leftButton){
    item.addEventListener("click", (e) => { removeDoughnuts(e) } )
    item.addEventListener('click', doughnutsLeft)
}

//function to remove doughnuts 4 at a time and then assign the value to the input field
function removeDoughnuts(e){
    e.preventDefault();
    let target = e.target.id

    console.log(typeof fudgeValue)
    if (target == "fudgeLeft"){
        if (fudgeValue == 0){
            return false
        }
        else{
            console.log("HELLOOO")
            fudgeValue = fudgeValue -4;
            fudge.value = fudgeValue;
        }
    }
    else if (target == "appleLeft"){
        if (appleValue == 0){
            return false
        }
        else{
            appleValue = appleValue -4;
            apple.value = appleValue;
        }
    }
    else if (target == "custardLeft"){
        if (custardValue == 0){
            return false
        }
        else{
            custardValue = custardValue -4;
            custard.value = custardValue;
        }
    }
    else if (target == "jellyLeft"){
        if (jelluValue == 0){
            return false
        }
        else{
            jelluValue = jelluValue -4;
            jellu.value = jelluValue;
        }
    }
    else if (target == "sprinkleLeft"){
        if (sprinkleValue == 0){
            return false
        }
        else{
            sprinkleValue = sprinkleValue -4;
            sprinkle.value = sprinkleValue;
        }
    }
    else if (target == "beignetsLeft"){
        if (beignetValue == 0){
            return false
        }
        else{
            beignetValue = beignetValue -4;
            beignet.value = beignetValue;
        }
    }
    else if (target == "glazedLeft"){
        if (glazedValue == 0){
            return false
        }
        else{
            glazedValue = glazedValue -4;
            glazed.value = glazedValue;
        }
    }


}

//loop adding events to each of the right buttons 
for (item of rightButton){
    item.addEventListener("click", (e) => { addDoughnuts(e) })
    item.addEventListener('click', doughnutsLeft)
}


//functions to add doughnuts 4 at a time adn then assign the value of the input field
function addDoughnuts(e){
    e.preventDefault();
    let target = e.target.id

    console.log(typeof fudgeValue)
    console.log(fudgeValue + "please brio")

    if (target == "fudgeRight"){
        if (fudgeValue >= 0){
            fudgeValue = fudgeValue + 4;
            fudge.value = fudgeValue;
        }
        else{
           return false
        }
    }
    else if (target == "appleRight"){
        if (appleValue >= 0){
            appleValue = appleValue + 4;
            apple.value = appleValue
        }
        else{
            return false
        }
    }
    else if (target == "custardRight"){
        if (custardValue >= 0){
            custardValue = custardValue + 4;
            custard.value = custardValue
        }
        else{
            return false
        }
    }
    else if (target == "jellyRight"){
        if (appleValue >= 0){
            jelluValue = jelluValue + 4;
            jellu.value = jelluValue
        }
        else{
            return false
        }
    }
    else if (target == "sprinkleRight"){
        if (sprinkleValue >= 0){
            sprinkleValue = sprinkleValue + 4;
            sprinkle.value = sprinkleValue
        }
        else{
            return false
        }
    }
    else if (target == "beignetsRight"){
        if (sprinkleValue >= 0){
            beignetValue = beignetValue + 4;
            beignet.value = beignetValue
        }
        else{
            return false
        }
    }
    else if (target == "glazedRight"){
        if (glazedValue >= 0){
            glazedValue = glazedValue + 4;
            glazed.value = glazedValue
        }
        else{
            return false
        }
    }

}


//Function for changing the value of the "Doughnuts left text"
function doughnutsLeft(){
    let doughnutsLeft = (PlatterSize - (fudgeValue + appleValue + custardValue + jelluValue + 
                        sprinkleValue + beignetValue + glazedValue))
    platterMSG.textContent = "You Have " + doughnutsLeft + " Doughnut's Left"
    console.log(doughnutsLeft)

    if (doughnutsLeft <= 0){
        platterMSG.textContent = "You Have Reached Max Amount Of Doughnuts, Please Change Platter Size, Remove Doughnuts Or Refresh Page"
        platterMSG.className = "InValid"
     }
    return doughnutsLeft
}

function priceCalculator(e){
    e.preventDefault()

    const FUDGE = 3.99
    const APPLE = 4.99
    const CUST = 1.99
    const JELLY = 1.99
    const SPRINKLE = 2.99
    const BEIGNETS = 5.99
    const GLAZED = 1.99
    const SALES = 0.07




    let fudgePRICE = FUDGE * fudgeValue;
    let applePRICE = APPLE * appleValue;
    let custPRICE = CUST * custardValue;
    let jellyPRICE = JELLY * jelluValue;
    let sprinklePRICE = SPRINKLE * sprinkleValue;
    let beignetPRICE = BEIGNETS * beignetValue;
    let glazedPRICE = GLAZED * glazedValue;

    let total = fudgePRICE + applePRICE + custPRICE + jellyPRICE + sprinklePRICE + beignetPRICE
                + glazedPRICE;

    
    let salestotalPrice = total * SALES;

    let theFINALE = total + salestotalPrice 

    console.log("Fudge FInal PRice is" + fudgePRICE)
    console.log("apple FInal PRice is" + applePRICE)
    console.log("cust FInal PRice is" + custPRICE)
    console.log("jellu FInal PRice is" + jellyPRICE)
    console.log("sprink FInal PRice is" + sprinklePRICE)
    console.log("beign FInal PRice is" + beignetPRICE)
    console.log("glaze FInal PRice is" + glazedPRICE)
    console.log("total FInal PRice is" + total)
    console.log("sales FInal PRice is" + salestotalPrice)
    console.log("FINALL FInal PRice is" + theFINALE)

    createReceipt(fudgePRICE, applePRICE, custPRICE, jellyPRICE, sprinklePRICE,beignetPRICE,glazedPRICE,
        fudgeValue, appleValue, custardValue, jelluValue,sprinkleValue, beignetValue, glazedValue,
        total,salestotalPrice,theFINALE);
}




function createReceipt(fudgePRICE, applePRICE, custPRICE, jellyPRICE, sprinklePRICE,beignetPRICE,glazedPRICE,
    fudgeValue, appleValue, custardValue, jelluValue,sprinkleValue, beignetValue, glazedValue,
    total,salestotalPrice,theFINALE){
    let AddReceipt = document.getElementById("AddReceipt")
    let OrderItemContainer = document.createElement("section");
    OrderItemContainer.className = "OrderItemContainer";

    let OrderDate = document.createElement("h1");
    OrderDate.className = "OrderDate"

    let adress = document.createElement("h6")
    adress.className = "adress"

    let OrderHistory = document.createElement("ul")
    OrderHistory.className = "OrderHistory"

    let arrayOfitems = []
    for (let i = 0; i < 7; i++) {
        let OrderItem = document.createElement("li")
        OrderItem.className = "OrderItem"
        arrayOfitems.push(OrderItem);
    }


    let Calculation = document.createElement("section")
    Calculation.className = "Calculation";

    let doughnutsTOTAL = document.createElement('p')
    let SalesTax = document.createElement('p')
    let TOTAL = document.createElement('p')

    
    doughnutsTOTAL.className = "doughnutstotal"
    SalesTax.className = "sales"
    TOTAL.className = "total"

    Calculation.appendChild(doughnutsTOTAL)
    Calculation.appendChild(SalesTax)
    Calculation.appendChild(TOTAL)


    OrderItemContainer.appendChild(OrderDate)
    OrderItemContainer.appendChild(adress)
    OrderItemContainer.appendChild(OrderHistory)
    OrderItemContainer.appendChild(Calculation)
    for (item of arrayOfitems){
        OrderHistory.appendChild(item)
    }



    OrderDate.textContent = "Date";
    adress.textContent = "THis Is Narnia"
    arrayOfitems[0].textContent = "Fudge - " + fudgeValue + " - $" + fudgePRICE 
    arrayOfitems[1].textContent = "Apple - " + appleValue + " - $" + applePRICE 
    arrayOfitems[2].textContent = "Custard - " + custardValue + " - $" + custPRICE 
    arrayOfitems[3].textContent = "Jelly - " + jelluValue + " - $" + jellyPRICE 
    arrayOfitems[4].textContent = "Sprinkle - " + sprinkleValue + " - $" + sprinklePRICE 
    arrayOfitems[5].textContent = "Beignets - " + beignetValue + " - $" + beignetPRICE 
    arrayOfitems[6].textContent = "Glazed - " + glazedValue + " - $" + glazedPRICE 

    doughnutsTOTAL.textContent = "Total Doughnut Class $ " + total.toFixed(2)
    SalesTax.textContent = "Total Sales Class $ " + salestotalPrice.toFixed(2)
    TOTAL.textContent = "Your Total Price $ " + theFINALE.toFixed(2)
    


    AddReceipt.appendChild(OrderItemContainer)




}
/*
function createOrderObject(
    fudgePrice, applePrice, custPrice, jellyPrice, sprinkPrice, beignetPrice, glazedPRICE,
    fudgeAmount, appleAmount, custAmount, jellyAmount, sprinkleAmount, beignAmount, glazedAmount,
    totaldoughnuts, salesblepor, thefinalcost){
    let order = new Object();
    order.fudgeTotalPrice = fudgePrice ;
    order.appleTotalPrice = applePrice
    order.custardTotalPrice = custPrice
    order.jellyTotalPrice = jellyPrice
    order.sprinkleTotalPrice = sprinkPrice
    order.beignetTotalPrice = beignetPrice
    order.glazedTotalPrice = glazedPRICE

    order.fudgeTotal = fudgeAmount
    order.appleTotal = appleAmount
    order.custTotal = custAmount
    order.jellyTotal = jellyAmount
    order.sprinkTotal = sprinkleAmount
    order.beignTotal = beignAmount
    order.glazedTotal = glazedAmount;

    order.doughnutTotal = totaldoughnuts
    order.salesTax = salesblepor
    order.final = thefinalcost;

    console.log(totaldoughnuts)
    console.log(salesblepor)
    console.log(thefinalcost)

    if (loggedInStatus()){
        let data = retrieveDataBase();
        let customer = WhichCustomer();
        data[customer].orders.push(order)
        console.log(data);
    }
    else{
        //error
    }

  
   
}
*/