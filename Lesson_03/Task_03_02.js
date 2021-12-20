/*
2. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.
 */

var basket = [
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
alert("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");