var submit1 = document.getElementById('submit1');
var items = document.getElementById('items');
var checkout = document.getElementById('checkout');
var submit2 = document.getElementById('calculate');
var regItem = document.getElementById('regItem');
var arrayItems = [{
    nameItem: 'none',
    quantities: 0,
    pricing: 0
}];
var checkItem = 0;
var arrayFinal = [{
    nameItem: 'none',
    quantities: 0,
    pricing: 0
}];
var arrayCopy;



submit1.addEventListener('click', (e) => {
    event.preventDefault();
    var name = document.getElementById('prodname').value;
<<<<<<< HEAD
    var price = parseFloat(document.getElementById('price').value).toFixed(2);
=======
    var price = parseInt(document.getElementById('price').value);
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6
    var quantity = parseInt(document.getElementById('quantity').value);
    var repeat = false;

    for(let i = 0; i < arrayItems.length; i++){
        if(name.toLowerCase() === arrayItems[i].nameItem.toLowerCase()){
            repeat = true;
        } else {};
    };

    if (!repeat){
        var item = {
            nameItem: name,
            quantities: quantity,
            pricing: price,
        }
        arrayItems.push(item);
        var loc = arrayItems.findIndex(x => x.nameItem.toLowerCase() == name.toLowerCase());
<<<<<<< HEAD
        items.innerHTML += `<div id="itemList${loc}" class="lists">Name: ${name}</br>Price: $${price}</br>Quantity: ${quantity}</div>`;
=======
        items.innerHTML += `<div id="itemList${loc}">Name: ${name}</br>Price: $${price}</br>Quantity: ${quantity}</div>`;
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6
    } else {
        var loc = arrayItems.findIndex(x => x.nameItem.toLowerCase() == name.toLowerCase());
        var change = document.getElementById(`itemList${loc}`);
        arrayItems[loc].quantities += quantity;
        arrayItems[loc].pricing = price;
        var quant2 = arrayItems[loc].quantities;
        var price2 = arrayItems[loc].pricing;
        change.innerHTML = `Name: ${name}</br>Price: $${price2}</br>Quantity: ${quant2}`;
    };
    arrayCopy = JSON.parse(JSON.stringify(arrayItems));
    regItem.reset();
});


items.addEventListener('click', (e) => {
    var itemNumber = parseInt(e.target.id.replace(/[A-Za-z$-]/g, ""), 10);
    var name = arrayCopy[itemNumber].nameItem;
    var repeat = false;
    var origPrice = arrayItems[itemNumber].pricing;
    var origArray = arrayItems[itemNumber];
<<<<<<< HEAD
    var change = document.getElementById(`itemReceipt${itemNumber}`);
    var change2 = document.getElementById(`itemList${itemNumber}`);
=======
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6
    var total = document.getElementById('total');
    var arrayTotal = [];
    for(let i = 0; i < arrayFinal.length; i++){
        if(name.toLowerCase() === arrayFinal[i].nameItem.toLowerCase()){
            repeat = true;
        } else {
        };
    };

    if (!repeat){
        arrayFinal.push(arrayCopy[itemNumber]);
        var object = arrayFinal[itemNumber];
        object.quantities = 1;
<<<<<<< HEAD
        origArray.quantities -= 1;
        change2.innerHTML = `Name: ${origArray.nameItem}</br>Price: $${origArray.pricing}</br>Quantity: ${origArray.quantities}`;
=======
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6
        checkout.innerHTML += `<div id="itemReceipt${itemNumber}">${object.nameItem}, ${object.quantities}, $${object.pricing}</div>`
    } else {
        if(origArray.quantities !== 0){
        var object = arrayFinal[itemNumber];
        object.quantities += 1;
        var newPrice =  object.quantities * origPrice;
        object.pricing = newPrice;
<<<<<<< HEAD
=======
        var change = document.getElementById(`itemReceipt${itemNumber}`);
        var change2 = document.getElementById(`itemList${itemNumber}`);
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6
        origArray.quantities -= 1;
        change.innerHTML = `${object.nameItem}, ${object.quantities}, $${object.pricing}`;
        change2.innerHTML = `Name: ${origArray.nameItem}</br>Price: $${origArray.pricing}</br>Quantity: ${origArray.quantities}`;
        console.log(arrayItems);
        } else {
<<<<<<< HEAD

=======
            
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6
        }
    };


    for (let i = 0; i < arrayFinal.length; i++){
        arrayTotal.push(arrayFinal[i].pricing);
    }
    var lastPrice = arrayTotal.reduce((total, amount) => total + amount, 0);
<<<<<<< HEAD
    total.innerHTML = `Total: $${lastPrice}`;
    document.getElementById('submit2').style.display = 'block'
=======
    total.innerHTML = `Total: ${lastPrice}`;
>>>>>>> e260da0d200f1e697940dfb20cedc49c1afda2e6

});


