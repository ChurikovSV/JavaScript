/*
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

let basket = {
  goodList: [],
  countTotalPrice() {  //стоимость товара в корзине
    let sum = 0;
    for (let i = 0; i < this.goodList.length; i++) {
      sum += this.goodList[i].price * this.goodList[i].quantity;
    }
    return sum;
  },
  countTotalNumber() {  //Количество товара в корзине
    let quan = 0;
    for (let i = 0; i < this.goodList.length; i++) {
      quan += this.goodList[i].quantity;
    }
    return quan;
  },
  countTotalPositions() {  //Количество позиций в корзине
    return this.goodList.length;
  }
}

let good = {  // Функция прописывания товара в объект Good из справочника товаров
  putToGood(i) {
    good.name = goodsArray[i].type + ' ' + goodsArray[i].brand + ' ' + goodsArray[i].model + ' ' + goodsArray[i].color;
    good.price = this.priceCheck(goodsArray[i].id);
    good.quantity = this.availableGoods(goodsArray[i].id);
    good.id = goodsArray[i].id
  },
  putToBasket(quantity) { // Функция добавляет в корзину товар, проверяя наличие остатков
    if (quantity <= this.quantity) {
      basket.goodList.push({
        name: this.name,
        price: this.price,
        quantity: quantity
      })
    }
  },

  priceCheck(id) {  // Функция заполняет значение цены с учётом скидки
    for (let i = 0; i < priceArray.length; i++) {
      if (priceArray[i].goods_id == id) {
        return (priceArray[i].price_RUR - priceArray[i].discount_RUR)
      }
    }

  },

  availableGoods(id) {  // Функция заполняет значение остатков на центральном складе
    for (let i = 0; i < werhouseArray.length, werhouseArray[i].name == 'central'; i++) {
      if (werhouseArray[i].goods_id == id) {
        return werhouseArray[i].quantity;
      }
    }
  },
  id: 0,
  name: 'AAA',
  price: 0,
  quantity: 1
}

/**
итерация по справочнику товаров.
Запись в объект товара необходимые характеристики: имени из свойств массива. Добавляю Цену со скидкой из справочника цен. Добавляю количество товара
Затем запуск функции добавления в корзину передавая в неё количество начиная с нулевой позиции (чётной)
При добавлении в корзину проверяю остатки товара и если их меньше нужного количества - товар в корзину не попадает.
 */
for (let i = 0; i < goodsArray.length; i++) {
  let q = 0;
  if (i & 1) {
    q = 2
  } else {
    q = 1
  };
  good.putToGood(i);
  good.putToBasket(q);
}

/*
Вывод массива корзины в консоль.
Вывод Цены корзины.
Вывод количества товаров в корзине.
Вывод количества позиций в корзине.
 */
console.log(basket.goodList);
console.log('Общая стоимость корзины ' + basket.countTotalPrice());
console.log('Всего товаров в карзине ' + basket.countTotalNumber());
console.log('Всего позиций в карзине ' + basket.countTotalPositions());