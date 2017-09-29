"use strict";

let globalSym = Symbol.for("isEmpty");

Object.prototype[globalSym]  = function () {
   let arr = [];
   for (let key in this) {
      arr.push(this[key]);
         }
   console.log(this);
   if (arr.length != 0) return false;
   else return true;
};

let emptyObj = {


};
console.log(emptyObj[Symbol.for("isEmpty")]()); // true??? false
let user = {
   name: "Tom"
};
console.log(user[Symbol.for("isEmpty")]()); // false??? true

/*
Задание №1. Symbol
Создайте символ в глобальном реестре с ключом isEmpty.
В Object.prototype добавьте метод, с именем ранее созданного символа. Данный метод должен возвращать true если в объекте есть хотя бы одно перечисляемое свойство, в противном случае возвращает false.
Примеры использования метода:
let emptyObj = {

};
console.log(emptyObj[Symbol.for("isEmpty")]()); // true
let user = {
   name: "Tom"
};
console.log(user[Symbol.for("isEmpty")]()); // false
*/