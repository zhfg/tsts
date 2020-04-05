let isBool: boolean = Boolean(0)
console.info(isBool)

let decLiteral: number = 8
let hexLiteral: number = 0xfff
let binaryLiteral: number = 0b10101
let octalLiteral: number = 0o744
console.info(decLiteral)
console.info(hexLiteral)
console.error(binaryLiteral);
console.warn(octalLiteral);

let myname: string = "Jacob";
let age: number = 36;
let sentence: string = `Hello, my name is ${myname}.
I'll be ${age + 1} years old next year`;
console.log(sentence);


let list: number[] = [1,2,3];
let list1: Array<number> = [1,2,3];
console.log(list);
console.log(list1);

let tuple1: [string, number];
tuple1 = ['Jacob', 36];
// tuple1 = [36, 'Jacob'];
let x: string[] = ['1','2','3']
x[4] = "world";
console.log(x[4].toString())


enum Color {Red = 1, Black, Green, Blue}
let c: Color = Color.Red
let b: Color = Color.Green
let s: string = Color[2]

console.log(b)
console.log(s)

let notSure : any = 4;
notSure = "I'm a engineer"
notSure = false
console.log(notSure)

let list2: any[] = ["1", 2, false, {"name":"jacob", "age": 36}]
console.log(list2)

console.log(tuple1 as unknown as string)



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

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
    color?: Color;
    width?: number;
}

function createSquare(config: SquareConfig): {color: Color; area: number} {
    let newSquare = {color: Color.Red, area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare
}

let config: SquareConfig = {
    color: Color.Green,
    width: 20
}
console.log(Color[createSquare({color: Color.Black}).color])