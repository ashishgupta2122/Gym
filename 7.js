console.log("This is Java Script");

function greet(name,greetText)
{
    console.log(greetText +" " + name)
    console.log(name + " is a good boy");
}

function sum(a,b,c)
{
    let d = a + b + c;
    return d;
    //This line will never execute (unreachable code)
}

function sub(a,b)
{
    let d = a - b;
    return d;
}

function product(a,b)
{
    let d = a * b;
    return d;
}
let name = "ashish";
let name1 = "kiya";
let name2 = "sahil";
let name3 = "akash";
let greetText = "Good Morning"
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);


let sum1 = sum(1,2,3);
console.log(sum1);

let sub1 = sub(2,1);
console.log(sub1);

let product1 = product(5,5);
console.log(product1);
//console.log(name +" is a good boy");
//console.log(name1 + " is good girl");
//console.log(name2 + " is good boy");
//console.log(name3 + " is a good boy");