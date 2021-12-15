/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
 */

var a = 12,
    summary='';
switch(a) {
    case 0: summary+= (a++) + '; ';
    case 1:	summary+= (a++) + '; ';
    case 2:	summary+= (a++) + '; ';
    case 3:	summary+= (a++) + '; ';
    case 4:	summary+= (a++) + '; ';
    case 5: summary+= (a++) + '; ';
    case 6:	summary+= (a++) + '; ';
    case 7:	summary+= (a++) + '; ';
    case 8:	summary+= (a++) + '; ';
    case 9:	summary+= (a++) + '; ';
    case 10: summary+= (a++) + '; ';
    case 11: summary+= (a++) + '; ';
    case 12: summary+= (a++) + '; ';
    case 13: summary+= (a++) + '; ';
    case 14: summary+= (a++) + '; ';
    case 15: summary+= (a++) + '; ';
}
alert(summary);
