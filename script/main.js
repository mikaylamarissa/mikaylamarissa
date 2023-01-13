// //Small Pizza = 4$ Medium Pizza = 5$ Large Pizza = 7$
let pizzaSizes = new Array();
pizzaSizes["10"] = 4;
pizzaSizes["12"] = 5;
pizzaSizes["15"] = 7;

function getPizzaPrices() {
    let pizzaPrice = 0;
    //pull from the form with the id myForm
    let theForm = document.forms["myForm"];
    //get info from the radio buttons
    let selectedPizza = theForm.elements["Size_rg"];
    // because we have 3 radio buttons we need to do use .length
    //time to loop through the radio buttons
    for (let i = 0; i < selectedPizza.length; i++) {
        if (selectedPizza[i].checked) {
            // the pizza price is  the value of the selected radio button
            pizzaPrice = pizzaSizes[selectedPizza[i].value];
            //if we are selected then we will end this loop
            break;
        }
    }
    return pizzaPrice;
}
//Toppings = $0.50 each
function toppingsAmount() {
    let anchovies = document.getElementById("Anchovies_cb");
    let doubleCheese = document.getElementById('DoubleCheese_cb');
    let pepperoni = document.getElementById('Pepperoni_cb');
    let mushrooms = document.getElementById('Mushroom_cb');
    // let anchoviesPrice = 0;
    // let pepperoniPrice = 0;
    // let doubleCheesePrice = 0;
    // let mushroomsPrice = 0;
    let toppingsTotal = 0;
    if (anchovies.checked) {
        toppingsTotal++;
    }
    if (doubleCheese.checked) {
        toppingsTotal++;
    }
    if (pepperoni.checked) {
        toppingsTotal++;
    }
    if (mushrooms.checked) {
        toppingsTotal++;
    }
    return toppingsTotal;
}
//calculate the subtotal
function getPizzaPriceSubTotal() {
    //here we will get the subtotal by calling our function
    let pizzaSubtotal = getPizzaPrices() + (toppingsAmount() * 0.5);
    //the subtotal will be inputted into the Subtotal input box
    document.getElementById('SubTotal_tb').value = pizzaSubtotal.toFixed(2);
    return pizzaSubtotal;
}

//GST = 7% PST = 7%
function getPizzaPriceTaxes() {
    let taxes = getPizzaPriceSubTotal() * 0.07;
    let taxesRounded = (Math.round(taxes * 100) / 100);
    document.getElementById('GST_tb').value = taxesRounded.toFixed(2);
    document.getElementById('PST_tb').value = taxesRounded.toFixed(2);
    return taxesRounded;
}

function totalPrice() {
    let subtotal = getPizzaPriceSubTotal();
    let gst = getPizzaPriceTaxes();
    let pst = getPizzaPriceTaxes();
    let total = subtotal + gst + pst;
    document.getElementById('Total_tb').value = total.toFixed(2);
    return total;
}

function validateForm() {
    //creating an if statement that checks all the statements
    //wondering if I should have multiple else if statements rather than one really long if statment.
    let okay = true;
    let myForm = document.forms["myForm"];
    let message = "";
    //this will check to see if the First Name input box is filled out
    if (myForm.elements["FirstName_tf"].value == null || myForm.elements["FirstName_tf"].value == "") {
        okay = false;
        message += "First Name, ";
        //this will check to see if the Last Name input box is filled out
    }
    if (myForm.elements["LastName_tf"].value == null || myForm.elements["LastName_tf"].value == "") {
        okay = false;
        message += "Last Name, "
        //this will check to see if the address field has been filled out
    }
    if (myForm.elements["Address_tf"].value == null || myForm.elements["Address_tf"].value == "") {
        okay = false;
        message += "Address, ";
        //this will check to see if the phone number field has been filled
    }
    if (myForm.elements["Phone_tf"].value == null || myForm.elements["FirstName_tf"].value == "") {
        okay = false;
        message += "Phone Number, ";
        //this will check to see if the Email input is filled out
    }
    if (myForm.elements["Email_tf"].value == null || myForm.elements["Email_tf"].value == "") {
        okay = false;
        message += "Email, ";
        // this will check to see if one of the radio buttons has been checked
        //if small is checked then it will return true 
    }
    // Check the Radio Buttons
    let radioGroup = myForm.elements["Size_rg"];
    if (myForm.elements.Size_rg[0].checked) {
        okay;
    } else if (myForm.elements.Size_rg[1].checked) {
        okay;
    } else if (myForm.elements.Size_rg[2].checked) {
        okay;
    } else {
        message += " Pizza Size."
        okay = false;
    }
    //check the selects
    if (myForm.elements["Payment_menu"].selectedIndex == 0) {
        okay = false;
        //add a message
        message += "Select a Payment Method";
    }
    if (!okay) {
        alert("Please enter your: " + message + ".");
    }
    return okay;
}