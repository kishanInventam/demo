// // console.log("ass");
// function add(n1:number , n2: number, showrResult:boolean, data:string){
//     if(typeof n1 !== "number" || typeof n2 !== "number"){
//         throw new Error ("Incorrect input");
//     } 
//     const result = n1 +n2;
//     if(showrResult){
//         // console.log(n1 + n2);
//         console.log(data+ result);
//     }else{
//         return result;
//     }
// }
// const number1 = 6;
// const number2 = 5;
// const printResult = true;
// const dataNew = "String value:";
// const result = add(number1,number2, printResult,dataNew);
// console.log(result);
// const person: {name:string;  age:number;  } = {
//     name:"kishan",
//     age:21
// }
// console.log(person.name);
// const person:{
//     name:string; 
//     age:number;
//     hobbies:string[];
//     role: [number, string]
// } ={
//     name:"kishan yadav",
//     age:24,
//     hobbies:["support","age"],
//     role:[2, 'author']
// };
// let favoriteActivities: string[];
// favoriteActivities =["support"];
// console.log(person.name);
// for(const h of person.hobbies){
//     console.log(h.toUpperCase());
// }
// function combine(input1: number | string, input2: number | string){
//     let result;
//     if(typeof input1 === "number" && typeof input2 === "number") {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }
// const combinedAges = combine(30,26);
// console.log(combinedAges);
// console combinedName = combine("kishan","kishan")
// console.log(combinedName);
// function add(n1: number, n2: Number) {
//     return n1 + n2;
// }
// function printResult(num: Number):void{
//     console.log("result"+num) ;
// }
// printResult(add(5,12));
// function addHandler(n1:number, n2:number, cb:(number:number) =>void){
//     const result = n1 + n2;
//     cb(result);
// }
// addHandler(10,20, (result) =>{
//     console.log(result);
// })
// let userInput: unknown;
// let userName: string;
// userInput =5;
// userInput ="max";
// if(typeof userInput === "string"){
//     userName = userInput;
//     console.log(userName);
// }
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 500);
console.log(result);
