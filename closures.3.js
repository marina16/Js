/**
 * Created by User on 27.02.2015.
 */
//поскольку функции являются объектами, мы можем просто добавить нашу переменную count как свойство объекта counter? и внутри функции мы можем изменять это свойство
//получили такое же поведение как у closures2 но при другой реализации

var counter = function(num) {
    counter.count = num !== undefined ? num : counter.count;
    return counter.count++;
};

counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
