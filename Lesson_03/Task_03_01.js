/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

var j = 0;
while (j <= 100) {
    var check = true;
    for (i = 2; i < j; i++){
        if (j % i === 0) {
            check = false;
            break;
        }
    }
    if (check) alert(j);
    j++;
}