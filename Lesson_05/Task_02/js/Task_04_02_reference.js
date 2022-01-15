"use strict";

/**
Товары
 */

let goodsArray = [{
    id: 0,
    type: 'Ноутбук',
    brand: 'ASUS',
    model: 'M21CV',
    color: 'Черный',
    weight: 2.25
  },
  {
    id: 1,
    type: 'Ноутбук',
    brand: 'Acer',
    model: 'BN1VB',
    color: 'Серебро',
    weight: 2.3
  },
  {
    id: 2,
    type: 'Монитор',
    brand: 'HP',
    model: 'Z27-A',
    color: 'Черный',
    weight: 8
  },
  {
    id: 3,
    type: 'Монитор',
    brand: 'ASUS',
    model: '27UK850',
    color: 'Белый',
    weight: 12
  },
  {
    id: 4,
    type: 'Мышь',
    brand: 'Logitech',
    model: 'M5x',
    color: 'Черный',
    weight: 0.3
  },
  {
    id: 5,
    type: 'Сенсорная панель',
    brand: 'Dell',
    model: 'A1707',
    color: 'Серебро',
    weight: 0.3
  },
  {
    id: 6,
    type: 'Клавиатура',
    brand: 'ASUS',
    model: 'ROG',
    color: 'Черный',
    weight: 0.4
  },
  {
    id: 7,
    type: 'Клавиатура',
    brand: 'Logitech',
    model: 'K780',
    color: 'Черный',
    weight: 0.4
  },
  {
    id: 8,
    type: 'Годовая гарантия',
    brand: 'Dell',
    model: 'Годовая гарантия'
  },
  {
    id: 9,
    type: 'Годовая гарантия',
    brand: 'ASUS',
    model: 'Годовая гарантия'
  }
]
/**
 * Справочник цен
 */
let priceArray = [{
    id: 0,
    goods_id: 1,
    price_EUR: 700,
    price_RUR: 42000,
    discount_EUR: 35,
    discount_RUR: 4200
  },
  {
    id: 1,
    goods_id: 0,
    price_EUR: 1000,
    price_RUR: 60000,
    discount_EUR: 50,
    discount_RUR: 6000
  },
  {
    id: 2,
    goods_id: 3,
    price_EUR: 650,
    price_RUR: 39000,
    discount_EUR: 32.5,
    discount_RUR: 3900
  },
  {
    id: 3,
    goods_id: 2,
    price_EUR: 750,
    price_RUR: 45000,
    discount_EUR: 37.5,
    discount_RUR: 4500
  },
  {
    id: 4,
    goods_id: 5,
    price_EUR: 80,
    price_RUR: 4800,
    discount_EUR: 4,
    discount_RUR: 480
  },
  {
    id: 5,
    goods_id: 4,
    price_EUR: 50,
    price_RUR: 3000,
    discount_EUR: 2.5,
    discount_RUR: 300
  },
  {
    id: 6,
    goods_id: 7,
    price_EUR: 35,
    price_RUR: 2100,
    discount_EUR: 1.75,
    discount_RUR: 210
  },
  {
    id: 7,
    goods_id: 6,
    price_EUR: 55,
    price_RUR: 3300,
    discount_EUR: 2.75,
    discount_RUR: 330
  },
  {
    id: 8,
    goods_id: 9,
    price_EUR: 53,
    price_RUR: 3180,
    discount_EUR: 2.65,
    discount_RUR: 318
  },
  {
    id: 9,
    goods_id: 8,
    price_EUR: 100,
    price_RUR: 6000,
    discount_EUR: 5,
    discount_RUR: 600
  },
]
/**
 * Регистр остатков товаров
 */
let werhouseArray = [{
    id: 0,
    name: 'central',
    goods_id: 0,
    quantity: 10
  },
  {
    id: 0,
    name: 'central',
    goods_id: 1,
    quantity: 5
  },
  {
    id: 0,
    name: 'central',
    goods_id: 2,
    quantity: 3
  },
  {
    id: 0,
    name: 'central',
    goods_id: 3,
    quantity: 6
  },
  {
    id: 0,
    name: 'central',
    goods_id: 4,
    quantity: 3
  },
  {
    id: 0,
    name: 'central',
    goods_id: 5,
    quantity: 7
  },
  {
    id: 0,
    name: 'central',
    goods_id: 6,
    quantity: 0
  },
  {
    id: 0,
    name: 'central',
    goods_id: 7,
    quantity: 1
  },
  {
    id: 0,
    name: 'central',
    goods_id: 8,
    quantity: 5
  },
  {
    id: 0,
    name: 'central',
    goods_id: 9,
    quantity: 1
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 0,
    quantity: 2
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 1,
    quantity: 1
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 2,
    quantity: 2
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 3,
    quantity: 3
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 4,
    quantity: 4
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 5,
    quantity: 5
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 6,
    quantity: 0
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 7,
    quantity: 2
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 8,
    quantity: 4
  },
  {
    id: 1,
    name: 'region_1',
    goods_id: 9,
    quantity: 7
  }
]