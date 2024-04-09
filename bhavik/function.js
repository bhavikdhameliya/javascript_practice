// function main( ){
//    return function sum(a,b){
//     return a + b ;
//   }
// }
// console.log(main()(2,2));


// function hello(){
//     console.log("Hello Wolrd");
// }
// function skill(s, callback){
//     console.log("Hi....",s);
//     callback();     // hello()
// }
// skill("Peter", hello);


//callback================

// function name(){
//     console.log("hello world");
// }
// function skill(name , callback){
//    console.log("hi....",name);
//    callback();
// }
// skill("bhavik",name);
// console.log(name);

// //=============================================
// function sum (a ){
//     return a;
//     }
// function mul(num1 ,num2){
//   return num1 * num2;
// }
// function per(mark , totalMark , fun){
//     console.log(fun);
//     return fun(mark , 100) / totalMark
// } 
// console.log(per(300,500,mul(34,76)));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function myfunction(){
//     console.log("bhavik");
// }
// myfunction();


// function Sum(a , b ){
//    console.log( a + b);
// }
// Sum(4 ,4 );  


// function Sumtonumber(number1 , number2 ){
//     return number1 + number2
//  }
//  let number = Sumtonumber(4 ,4 );  
//  console.log(number);



// function loginUserMessage(username){
//     return `${username} just login in` 
// }
// console.log(loginUserMessage("bhavik"));


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("plz enter user name ");
//         return
//     }
//     return `${username} just login in` 
// }
// // console.log(loginUserMessage("bhavik"));
// console.log(loginUserMessage());



// function loginUserMessage(username){
//         if(!undefined){
//             console.log("plz enter user name ");
//             return
//         }
//         return `${username} just login in` 
//     }
//     // console.log(loginUserMessage("bhavik"));




// function loginUserMessage(username = "bhavik") {
//     if (!username) {
//         return
//     }
//     return `${username} just login in`
// }
// console.log(loginUserMessage());


// function  fullname(fname , llname){
//     return a = fname + " " + llname;
// }
// let fn = fullname("bhavik","dhameliya");
// console.log(fn);


// function sum(math , eng  , sc ){
//     return s = math + eng + sc ;
// }
// function per(tt){
//     return p = tt/300 * 100
// }
// let total = sum(78,89,45);
// let c = per(total)
// console.log(c);


// function sum(math , eng  , sc ){
//     return s = math + eng + sc ;
// }
// function per(tt){
//     let p = tt/300 * 100;
//     console.log(p);
// }
// let total = sum(78,89,45);
// per(total)


// function add(num1 , num2){
//     return num1 + num2
//         // console.log(num1 + num2);
// }
// let a = add(23 , 50);
// console.log(a);