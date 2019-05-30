let selectedColorCasualShirt = "selectColorCasualShirt";
let myOrder = [];
let myOrderString = "";

function initiateGUI() {

    selectedColorCasualShirt = $("#selectColorCasualShirt").val();

    $("#selectColorCasualShirt").change(function () {
        selectedColorCasualShirt = $("#selectColorCasualShirt").val();
        console.log(selectedColorCasualShirt);

        if (selectedColorCasualShirt === "Black") {

            $("#casualShirt").attr("src", "src\\img\\men_shirt_casual_black.jpg");

        } else if (selectedColorCasualShirt === "White") {

            $("#casualShirt").attr("src", "src\\img\\men_shirt_casual_white.jpg");

        } else if (selectedColorCasualShirt === "Blue") {

            $("#casualShirt").attr("src", "src\\img\\men_shirt_casual_royalBlue.jpg");
        }
    });

    //let result = getLatestDefinitionID();
}

async function getLatestDefinitionID() {

    let URL = "https://morcote.herokuapp.com/rest/process-definition/digibp-template:26:890828a7-7ca2-11e9-b5c0-8e83571e468a/start";

    const response = await fetch(URL, {method: 'GET', mode: 'cors', headers: {'Content-Type': 'application/json'}});

    let res = response.json();

    console.log("Response ", res);

    return res;
}

function addItemToCart1() {
    let size = document.getElementById('selectSizeBusinessShirt');
    let value = size.options[size.selectedIndex].value;

    createOrder("item1", value, "white");
}

function addItemToCart2() {
    let size = document.getElementById('selectSizeCasualShirt');
    let value = size.options[size.selectedIndex].value;

    let color = document.getElementById('selectColorCasualShirt');
    let value2 = color.options[color.selectedIndex].value;

    createOrder("item2", value, value2);
}

function addItemToCart3() {
    let size = document.getElementById('selectSizeBusinessShirtWoman');
    let value = size.options[size.selectedIndex].value;

    createOrder("item3", value, "lightBlue");
}

function addItemToCart4() {
    let size = document.getElementById('selectSizeCasualShirtWoman');
    let value = size.options[size.selectedIndex].value;

    createOrder("item4", value, "blackWhitePlaid");
}

function sendOrder() {

    console.log("Cart ", myOrder);
    console.log(JSON.stringify(myOrder));

    if (myOrder.length !== 0) {
        myOrderString = createOrderString();
    }

    console.log("myOrderString ", myOrderString);

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let mail = document.getElementById("mail").value;
    let street = document.getElementById("street").value;
    let streetNumber = document.getElementById("streetNumber").value;
    let postCode = document.getElementById("postCode").value;
    let city = document.getElementById("city").value;

    let x = {
        variables: {
            shoppingCart: {
                value: null,
                type: 'String'
            },
            order: {
                value: myOrderString,
                type: 'String'
            },
            FirstName: {
                value: firstName,
                type: 'String'
            },
            LastName: {
                value: lastName,
                type: 'String'
            },
            Mail: {
                value: mail,
                type: 'String'
            },
            Street: {
                value: street,
                type: 'String'
            },
            StreetNumber: {
                value: streetNumber,
                type: 'String'
            },
            PostCode: {
                value: postCode,
                type: 'String'
            },
            City: {
                value: city,
                type: 'String'
            }
        }
    };

    console.log("x ", x);
    let t = JSON.stringify(x);
    console.log("le json ", t);

    let myResponse = sendRequest2(t);
    console.log("Response ", myResponse);

    alert("Thank you for your order!");
    window.location.reload();
}

async function sendRequest2(t) {
    //let URL = "https://morcote.herokuapp.com/rest/process-definition/digibp-template:26:890828a7-7ca2-11e9-b5c0-8e83571e468a/start";
    let URL = "https://morcote.herokuapp.com/rest/process-definition/WebShopProcess:1:685e9042-7d3f-11e9-848f-ceacf307023c/start";

    const response = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: t
    });

    let res = response.json();

    console.log("Response ", res);

    return res;
}

function createOrderString() {

    let myString = "";

    for (let i = 0; i < myOrder.length; i++) {
        myString += myOrder[i].id + "." + myOrder[i].amount + ";";
    }

    return myString;
}

function createOrder(itemType, size, color) {

    console.log(itemType, " ", size, " ", color);

    let itemID = 0;

    switch (itemType) {
        case "item1":
            if (size === "S") {
                console.log("has found");
                itemID = 1013;
            }
            if (size === "M") {
                itemID = 1014;
            }
            if (size === "L") {
                itemID = 1015;
            }
            if (size === "XL") {
                itemID = 1016;
            }
            break;
        case "item3":
            if (size === "S") {
                itemID = 1017;
            }
            if (size === "M") {
                itemID = 1018;
            }
            if (size === "L") {
                itemID = 1019;
            }
            if (size === "XL") {
                itemID = 1020;
            }
            break;
        case "item2":
            if (size === "S") {
                if (color === "Black") {
                    itemID = 1001;
                }
                if (color === "White") {
                    itemID = 1002;
                }
                if (color === "Blue") {
                    itemID = 1003;
                }
            }
            if (size === "M") {
                if (color === "Black") {
                    itemID = 1004;
                }
                if (color === "White") {
                    itemID = 1005;
                }
                if (color === "Blue") {
                    itemID = 1006;
                }
            }
            if (size === "L") {
                if (color === "Black") {
                    itemID = 1007;
                }
                if (color === "White") {
                    itemID = 1008;
                }
                if (color === "Blue") {
                    itemID = 1009;
                }
            }
            if (size === "XL") {
                if (color === "Black") {
                    itemID = 1010;
                }
                if (color === "White") {
                    itemID = 1011;
                }
                if (color === "Blue") {
                    itemID = 1012;
                }
            }
            break;
        case "item4":
            if (size === "S") {
                itemID = 1021;
            }
            if (size === "M") {
                itemID = 1022;
            }
            if (size === "L") {
                itemID = 1023;
            }
            if (size === "XL") {
                itemID = 1024;
            }
            break;
    }

    console.log("after switch");


    if (myOrder.length === 0) {
        myOrder.push({id: itemID, amount: 1});
        createShoppingCartTableEntry(itemID, itemType, color, size, 1);
        return;
    }

    var exists = false;

    console.log("order length ", myOrder.length);

    for (let i = 0; i < myOrder.length; i++) {
        console.log(myOrder[i].id, " - ", itemID);
        if (myOrder[i].id === itemID) {
            myOrder[i].amount++;
            console.log(myOrder[i].amount);
            exists = true;
            createShoppingCartTableEntry(itemID, itemType, color, size, 1);
        }
    }

    if (!exists) {
        myOrder.push({id: itemID, amount: 1});
        createShoppingCartTableEntry(itemID, itemType, color, size, 1);
    }
}

function createShoppingCartTableEntry(itemID, itemType, color, size, amount) {
    console.log("createShoppingCartTableEntry");

    let table = document.getElementById('tableShoppingCart');
    table.style.borderSpacing = "30px";

    let rowExists = document.getElementById(itemID.toString());

    console.log("rowExists", rowExists);

    if (rowExists !== null) {
        let currentValue = parseInt(rowExists.cells[3].innerText);
        rowExists.cells[3].innerText = (currentValue + 1).toString();
    } else {


        let newRow = table.insertRow(-1);
        newRow.id = itemID;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Delete";
        removeButton.onclick = function () {
            let index = this.closest('tr').rowIndex;
            console.log("rowIndex ", index);
            let myRow = document.getElementById(itemID.toString());
            console.log("myRow", myRow);
            let currentValue = myRow.cells[3].innerText;

            if (currentValue <= 1) {
                table.deleteRow(index);

            } else {
                myRow.cells[3].innerText = (currentValue - 1).toString();
            }

            for (let i = 0; i < myOrder.length; i++) {
                console.log(myOrder[i].id + " - " + itemID);
                if (myOrder[i].id === itemID) {
                    if (myOrder[i].amount >= 1) {
                        myOrder[i].amount--;
                    }
                }
            }

            console.log("myOrder ", myOrder);
        };

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        cell3.style.textAlign = 'center';
        cell4.style.textAlign = 'center';
        cell5.style.textAlign = 'center';

        let entry1 = document.createTextNode(itemType.toString());
        let entry2 = document.createTextNode(color.toString());
        let entry3 = document.createTextNode(size.toString());
        let entry4 = document.createTextNode(amount);

        cell1.appendChild(entry1);
        cell2.appendChild(entry2);
        cell3.appendChild(entry3);
        cell4.appendChild(entry4);
        cell5.appendChild(removeButton);
    }
}

function createOrder2(itemType, size, color) {

    console.log(itemType, " ", size, " ", color);

    if (myOrder.length !== 0) {

        let isAlreadyInTheCart = false;

        for (let i = 0; i < myOrder.length; i++) {

            if (myOrder[i].itemType === itemType) {

                isAlreadyInTheCart = true;

                let hasSameSize = false;
                let hasSameColor = false;

                let myArrayEntry;

                for (let j = 0; j < myOrder[i].kind.length; j++) {

                    myArrayEntry = myOrder[i].kind[j];

                    if (myOrder[i].kind[j].size === size) {

                        hasSameSize = true;
                        break;
                    }
                    // if (myOrder[i].kind[j].color === color) {
                    //     hasSameColor = true;
                    //     break;
                    // }
                }

                if (hasSameSize) {
                    myArrayEntry.numberOfItems++;
                } else {
                    myOrder[i].kind.push({color: color, size: size, numberOfItems: 1});
                }
            }
        }
        if (!isAlreadyInTheCart) {
            myOrder.push({itemType: itemType, kind: [{color: color, size: size, numberOfItems: 1}]});
        }
    } else {
        myOrder.push({itemType: itemType, kind: [{color: color, size: size, numberOfItems: 1}]});
    }
    console.log("myOrder ", myOrder);
}