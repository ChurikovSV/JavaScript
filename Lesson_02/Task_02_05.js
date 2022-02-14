/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */

var a = 2,
    b = 88;
function operationAddition (a, b) {
    return a + b;
}
function operationSubtraction(a, b) {
    return a - b;
}
function operationMultiplication (a, b) {
    return a * b;
}
function operationDivision (a, b) {
    return a / b;
}
alert ('a (random) = ' + a +
    '\n b (random) = ' + b +
    '\n a + b = ' + operationAddition(a, b) +
    '\n a - b = ' + operationSubtraction(a, b) +
    '\n a * b = ' + operationMultiplication(a, b) +
    '\n a / b = ' + operationDivision(a, b));
