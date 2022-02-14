/*
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.
 */

var basket = [

    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];
var basketPrice = 0;
for (let prod of basket){
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");
=======
    {product: "Тыква",
     price: getNumber(50, 100)},
    {product: "Морковка",
     price: getNumber(50, 100)},
    {product: "Горошек",
     price: getNumber(50, 100)},
    {product: "Картошка",
     price: getNumber(50, 100)}
];
var basketPrice = 0;
for (prod of basket){
    basketPrice += prod.price;
    alert("Товар " + prod.product + " стоит: " + prod.price);
}
alert("Стоимость корзины: " + basketPrice + " у.е.");


function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}
