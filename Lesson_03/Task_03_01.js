/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

var nums = 0;
while (nums <= 100) {
    var check = true;
    for (i = 2; i < nums; i++){
        if (nums%i === 0) {
            check = false;
            break;
        }
    }
    if (check) alert(nums);
    nums++;
}