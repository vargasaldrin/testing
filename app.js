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
}]



submit1.addEventListener('click', (e) => {
    event.preventDefault();
    var name = document.getElementById('prodname').value;
    var price = parseInt(document.getElementById('price').value);
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
        console.log(arrayItems);
        items.innerHTML += `<div id="itemList${loc}">Name: ${name}</br>Price: $${price}</br>Quantity: ${quantity}</div>`;
    } else {
        var loc = arrayItems.findIndex(x => x.nameItem.toLowerCase() == name.toLowerCase());
        var change = document.getElementById(`itemList${loc}`);
        arrayItems[loc].quantities += quantity;
        arrayItems[loc].pricing = price;
        var quant2 = arrayItems[loc].quantities;
        var price2 = arrayItems[loc].pricing;
        change.innerHTML = `Name: ${name}</br>Price: $${price2}</br>Quantity: ${quant2}`;
        console.log(arrayItems);
    };
    regItem.reset();
})



items.addEventListener('click', (e) => {
    var itemNumber = parseInt(e.target.id.replace(/[A-Za-z$-]/g, ""), 10);
    console.log(itemNumber);
    var name = arrayItems[itemNumber].nameItem;
    var repeat = false;
    for(let i = 0; i < arrayFinal.length; i++){
        if(name.toLowerCase() === arrayFinal[i].nameItem.toLowerCase()){
            repeat = true;
        } else {
        };
    };

    if (!repeat){
        arrayFinal.push(arrayItems[itemNumber]);
        var object = arrayFinal[itemNumber];
        console.log(arrayFinal);
        object.quantities = 1;
        checkout.innerHTML += `<div id="itemReceipt${itemNumber}">${object.nameItem}, ${object.quantities}, $${object.pricing}</div>`
    } else {
        arrayItems[itemNumber].quantities -= 1;
        var object = arrayFinal[itemNumber];
        object.quantities += 1;
        var newPrice =  object.quantities * arrayItems[itemNumber].pricing;
        object.pricing = newPrice;
        var change = document.getElementById(`itemReceipt${itemNumber}`);
        change.innerHTML = `${object.nameItem}, ${object.quantities}, $${object.pricing}`;
    }
});

submit2.addEventListener('click', (e) =>{
    event.preventDefault();
    var total = document.getElementById('total');
    var arrayTotal = [];
    for (let i=1; i <= arrayFinal.length; i++){
        var insert = arrayFinal[i].pricing;
        arrayTotal.push(insert);
    };
    var lastPrice = arrayTotal.reduce((total, amount) => {
        total + amount;
    });
    console.log(arrayFinal);
    total.innerHTML = `Total: ${lastPrice}`;

})


console.log(arrayItems)