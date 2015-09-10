

/*
{
    имя : значение,
    имя : значение,
    имя : значение
}
*/

/*Создание объекта : способ - объектный литерал*/

    var person = {
    name: "Sorax",
    age: 20,
    gender: "male",
    sayHi: function(){   //функция тоже может быть свойством
        return "Hello";
    }
}
    /*person.age = 25;
    person.userId = 333556;                                //добавление и изменение свойств
console.log(person.name);
console.log(person["age"]);
console.log(person);

console.log(person.sayHi());*/


/*Создание объекта : способ - фунция конструктора и оператор new*/

  /*  var object = new Object();
    object.property = "value";
*/
/*Создание объекта : способ - статический метод create класса Object  он принимает первым парметром объект который будет прототипом нового*/

    var object = Object.create(null);  // null если не хотим чтобы он наследовал свойства
    console.log(object);

    var object = Object.create ({x: 20, y: 10});  // пробуем передать объект ? какого-то черта в консоль не выводит
    console.log(object);
    object.x = 40;
    console.log(object.hasOwnProperty("x"));
    console.log(object.x);

/* удаление свойств*/

    delete object.x;
    console.log(object.x);
/*проверка наличия свойств у объекта*/

    console.log("x" in object);
    console.log("o" in object);

/*оператор in и выражение обращения*/

    console.log(object.z);
    console.log("z" in object);

    object.z = undefined;

    console.log(object.z);
    console.log("z" in object);