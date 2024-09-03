
//Grabbing elements to work with
var HamborgorButtonOpen = document.getElementById("ButContainerNav");
var HamborgorButtonClose = document.getElementById("ButContainer");
var HamborgorMenuItems = document.getElementsByClassName("hamborgerItem");

//Adding Events
HamborgorButtonOpen.addEventListener('click',OpenMenu);
HamborgorButtonClose.addEventListener('click',CloseMenu);

//Adding Events to each of the items
for (listItem of HamborgorMenuItems){
    listItem.addEventListener('click',CloseMenu);
    console.log(listItem)
}

//Function to open menu
function OpenMenu(e){
    let Menu = document.getElementById("BurgerMenu")
    Menu.className = "HamborgorON"
}

//function to close menu
function CloseMenu(e){
    let Menu = document.getElementById("BurgerMenu")
    Menu.className = "HamborgorOFF"
}
