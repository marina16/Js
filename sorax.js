/**
 * Created by User on 11.02.2015.
 */
var myNumber = 5552;

console.log(typeof myNumber);

  var twenty20 = "v" + "i" + "s" + "z" + "o" + "n";
 console.log(twenty20)


var avgHeight = 145;
var numEruptions = 4;
console.log('"Old Faithful" at Yellowstone National Park\n Average eruption height today: '+ avgHeight + '\n Number of eruptions: ' + numEruptions);


var func = function(callback){
    var name = "Sorax";
    callback(name);
};

func(function(n){
    console.log("Hello " + n);
});

