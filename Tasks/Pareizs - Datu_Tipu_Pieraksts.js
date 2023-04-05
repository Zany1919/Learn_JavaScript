/* eslint-disable no-unused-vars */
'use strict';

/* Uzdevums par pareizu datu tipu pieraksta izmantošanu. */

/* Задачи:

1) Создайте переменную с названием магазина(магазин - store, имя - name) и поместите в неё любое название на ваш выбор.

2) Создайте объект под названием storeDescription

3) Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте

4) Во внутрь объекта storeDescription напрямую поместите свойство employees.Это должен быть массив, который содержит имена трех сотрудников на ваш выбор

5) Во внутрь объекта storeDescription напрямую поместите свойство products.Это должен быть тоже объект, который содержит два товара и их цену.То есть, нужно создать пару ключ - значение в виде товар: цена Данные на ваш выбор.

6) Во внутрь объекта storeDescription напрямую поместите свойство open.Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение.Сделайте его открытым. */

/* Uzdevuma atrisinājums: . */

const storeName = 'Z&Z';
const storeDescription = {
	budget: 10000,
	employees: ['Zane', 'Līvija', 'Ivars'],
	pruducts: {
		mobilePhone: 1300,
		portableComputer: 3200
	},
	open: true
};