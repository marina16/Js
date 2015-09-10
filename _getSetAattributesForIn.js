/**
 * Created by User on 09.04.2015.
 */


var person = {
    name: "Sorax",
    _age: 20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;
    }
};

/*person.age = 180;
console.log(person.age);
person.age = -80;
console.log(person.age);
person.age = 34;
console.log(person.age);*/

/*получение дескриптора - нужен статический метод класса object  - getOwnPropertyDescription
* первый аргумент метода - объект, второй аргумент - имя свойства. dj втором случае нет writable потому что доступность записи  определяется наличем/отсуствием сеттера */

console.log(Object.getOwnPropertyDescriptor(person,"name"));
console.log(Object.getOwnPropertyDescriptor(person,"age"));

/*для опеделения или переопределения атрибутов свойств мы можен использовать стат.метод defineProperty
* принимает три параметра - объкт, свойство, дескрипторю по умолчанию все атрибуты имеют значение true
* мы поставим false и если попробуем изменить свойство - у нас ничего не получится
* writable: false  делает свойство недоступным для записи*/

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(person.gender);
person.gender = "female";
console.log(person.gender);
console.log("");
/*рассмотри цикл for in
* в скобках, слева от ключевого слова in мы указываем идентификатор, который будет использ.для отдельныйх свойств объекта person который мы указываем справа от кл.слов in втеле выведем свойство property в консоль
* таким образом мы выводим в консоль все свойства объекта - втом числе наследованные
* свойство gender не выводится, т.к. в его дискрипторе  атрибут enumerable: false если изменить на true оно будет выводится*/

for (property in person){
    console.log(property);
}

/*можно для тих же целей использовать статический метод keys  он вернет массив всех полей т.е. названий свойств (при чем опять таки перечисляемых свойств  */

console.log(Object.keys(person));

/*специально для проверки атрибута enumerable есть метод propertyIsEnumerable()
* этот метод уже не является методом класса Object а вызывается непосредственно у самого объекта, он будет возвращать true только у ненаследованных свойств*/

console.log(person.propertyIsEnumerable("gender"));

/*атрибут configurable предназначен для определения возможности изменения атрибутов того свойства
* например если мы попробуем переобределить какие-то атрибуты у этого свойства то получим ошибку(чтобы ее не было надо измениеть configurable На true. удалить свойство тоже нельзя когда оно false

Object.defineProperty(person, "gender", {
    writable: true
});
 */

/*помимо всего этого у нас есть метод defineProperties jy принимает уже два параметра вместо 3, поскольку нам не нужно указывать свойство
второй аргумент это объект с парами свойство - дескрпитор
и здесь в дескрипторе можно прописывать геттеры и сеттеры*/

/*
var o = {};
Object.defineProperties(o,{
    x: {
        value: 10,
        writable: false
    },
    y: {
        value: 20,
        writable: false
    },
    r: {
        get function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
});

o.x =16;
console.log(o.r);*/

/*проверка объекта на расширяемость - можно ли добавить новые свойства
* статический метод isExtensible() - веренет True но если использовать preventExtensions() получим false
* этот метод делает нерасширяемым только сам объект если мы будем добавлять свойство к прототипу то объект их успешно унаследует */

var obj = {};
console.log(Object.preventExtensions(obj));
console.log(Object.isExtensible(obj));

/*Метод seal делает тоже самое что и preventExtensions() но при этом ставит значение атрибута configurable: всех свойств false
* таким образом мы не сможем добавлять или удалять свойства или менять значения атрибутов свойств
 * для того чтобы проверить был ли применен тот метод есть метод isSealed
 * есть метод freeze делает тоже самое что и isSealed но и помимо этого делает все свойства доступными только для чтения
 * isFrozen() позволяет проверить заморожен ли объект или нет                                                               */
console.log(Object.seal(obj));