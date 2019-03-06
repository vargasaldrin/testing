
var button1 = document.getElementById('submit1');
var items = document.getElementById('items');
var numItem = 1;
var checkout = document.getElementById('checkout');
var arrayItems = [];
var checkItem = 1;


button1.addEventListener('click', (e) => {
    event.preventDefault();
    var name = document.getElementById('prodname').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    items.innerHTML += `<div class="item${numItem}">${name}</br>${price}</br>Quantity: ${quantity}</br>`;
    var insert = [name, price, quantity];
    arrayItems.push(insert);

    numItem++;
    name.value = '';
    price.value = '';
})

console.log(arrayItems);

items.addEventListener('click', (e) => {
    console.log(parseInt(e.target.className.replace(/[A-Za-z$-]/g, ""), 10));
    var itemNumber = parseInt(e.target.className.replace(/[A-Za-z$-]/g, ""), 10) - 1;
    checkout.innerHTML += `<div>${arrayItems[itemNumber]}</div>`; 

});

console.log(arrayItems)