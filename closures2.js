/**
 * Created by User on 27.02.2015.
 */
/* напишем простой счетчик
замыкания очень удобно создавать при помощи анонимных самовызывающихся функций, поэтому во многих скриптах можно встретиить код,где какой то переменной присваивается функция, которая возвращается из анонимной самовызывающийся функции

в этой функции мы будем возвращать значение переменной count увеличенное на единицу
и в этом замыкании инициализируем переменную count
*/

var counter = (function(){
    var count = 0;
    return function(){
       return count++;
    }

}());

console.log(counter());  //вызываем и выводим
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//таким образом мы довольно просто создали функцию, которая не принимает никаких аргументов, и при этом возвращает разные значения, при разных вызовах, в этом и заключается вся прелесть замыканий - они позволяют использовать функции не просто как подпрограммы,они позволяют сделать функции немного более умными, благодаря возможности сохранения каких-то данных.замыкания позволяют реализовать что-то вроде инкапсуляции данных.в нашем примере мы можем получить переменную count или изменить ее только при помощи вложенных функций, и поэтому переменную count можно условно назвать приватной. можно немного улучшить функцию добавив возможность изменения счетчика.эта функция будет принимать какое-то число, и если этот аргумент был передан, т.е. если num не равна undefined мы присваиваем счетчику это число иначе - значение остается тем же.теперь на каим то вызове можно сбросить счетчик на 0 или передать другое значение напрмер 500.замыкание не единственный способ добится такого поведения - см. closures3

var counter = (function(){
    var count = 0;
    return function(num){
        count = num !== undefined ? num : count;
        return count++;
    }

}());

console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter(500));
console.log(counter());
