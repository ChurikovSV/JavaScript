/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения
операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
 */

var a = +prompt('Введите значение переменной "a"'),
    b = +prompt('Введите значение переменной "b"'),
    operation = prompt('Введите необходимую операцию "+", "-", "*", "/"'),
    result;
function operationAddition (a, b) {
    return a + b;
}
function operationSubtraction(a, b) {
    return a-b;
}
function operationMultiplication (a, b) {
    return a*b;
}
function operationDivision (a, b) {
    return a/b;
}
function mathOperation(a, b, operation) {
    switch (operation) {
        case("+"):
            return operationAddition (a, b);
        case("-"):
            return operationSubtraction (a, b);
        case("*"):
            return operationMultiplication (a, b);
        case("/"):
            return operationDivision (a, b);
        default:
            return "Неправильно введена арифметическая операция!";
    }
}
alert (' a = ' + a +
    '\n b = ' + b +
    '\n операция: ' + operation +
    '\n результат: ' + mathOperation(a, b, operation));