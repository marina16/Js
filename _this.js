/**
 * Created by User on 04.04.2015.
 */
var greet = function(){
    return "Hi! My name is " + this.name;
}
var person = {
    name: "John",
    greet: greet
};

var anotherPerson = {
    name: "Bob",
    greet: greet
};
console.log(person.greet());
console.log(anotherPerson.greet());

/*при разных вызовах this указывает на разные объекты*/

console.log(greet());  /*указывает на глобальный объект*/
console.log(this); /*тоже укажет на глобальный объект*/

/*если самому надо указать на какой объект должен ссылаться this
* var greet = function(greeting){
 return greeting + "Hi! My name is " + this.name;
 console.log(anotherPerson.greet.call(person, "Bonjour"));
то же но с apply
 console.log(anotherPerson.greet.apply(person, ["Bonjour]"));
 метод bound
 var bound = greet.bound(anotherPerson);
 console.log(bound("Hello there"));
* */