var isBool = Boolean(0);
console.info(isBool);
var decLiteral = 8;
var hexLiteral = 0xfff;
var binaryLiteral = 21;
var octalLiteral = 484;
console.info(decLiteral);
console.info(hexLiteral);
console.error(binaryLiteral);
console.warn(octalLiteral);
var myname = "Jacob";
var age = 36;
var sentence = "Hello, my name is " + myname + ".\nI'll be " + (age + 1) + " years old next year";
console.log(sentence);
var list = [1, 2, 3];
var list1 = [1, 2, 3];
console.log(list);
console.log(list1);
var tuple1;
tuple1 = ['Jacob', 36];
// tuple1 = [36, 'Jacob'];
var x = ['1', '2', '3'];
x[4] = "world";
console.log(x[4].toString());
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var b = Color.Green;
var s = Color[2];
console.log(b);
console.log(s);
var notSure = 4;
notSure = "I'm a engineer";
notSure = false;
console.log(notSure);
var list2 = ["1", 2, false, { "name": "jacob", "age": 36 }];
console.log(list2);
console.log(tuple1);
// function foo() {
//     var var1 = "this variable decarle by var"
//     console.log(var1)
// }
// foo()
// for (var i = 0; i < 10; i++) {
//     let num_time: number = setTimeout(function() { console.log(i); }, 100 * i);
//     console.log(num_time)
// }
// for (let i:number = 0; i < 10; i++) {
//     let num_time: number = setTimeout(function() { console.log(i); }, 100 * i);
//     console.log(num_time)
// }
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: Color.Red, area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var config = {
    color: Color.Green,
    width: 20
};
console.log(Color[createSquare({ color: Color.Black }).color]);
