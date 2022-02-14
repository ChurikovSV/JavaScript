/*
Сравнить null и 0. Попробуйте объяснить результат.
 */

console.log ('typeof(null) ', typeof(null));    // object
console.log ('typeof(0) ', typeof(0));          // number
console.log ('== ', null == 0);                 // false
console.log ('=== ', null === 0);               // false
console.log ('<= ', null <= 0);                 // true
console.log ('>= ', null >= 0);                 // true
console.log ('< ', null < 0);                   // false
console.log ('> ', null > 0);                   // false
console.log ('* ', null * 0);                   // 0
console.log ('null / 0 ', null / 0);            // NaN
console.log ('0 / null ', 0 / null);            // NaN
console.log ('Значение null является литералом JS? а не свойством глобального переменной, как undefined), представляющий нулевое(пустое) значение');
