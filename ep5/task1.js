//  function =========================

//  function myfunction(){
//     console.log("black");
//     console.log("cobra");
//  }
//  myfunction();
//  function myfunction(msg , num){
//     console.log(msg , num);
   
//  }
//  myfunction("new", 100);

// function sum(x,y){
//     console.log(x+y);
// }
// sum(6,7);

// arrow function==========================

// const arrowsum = (a, b )=>{
//     console.log(a+b);
// }
// arrowsum(2,6);

// const arrowmul = (a, b)=>{
//     console.log(a*b);
// }
// arrowmul(4 ,7);

//prectis ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. 
// function countvowels(str){
//     let count = 0;
//     for (const char of str){
        
//         if(char === "a" || char === "e" ||char === "i"||char === "o"||char === "u");
//     {
//         count++;
//     }
  
// }
// console.log(count);
// }
// countvowels("abc");


// for each function_______________________________________________________________

// let arr = ["pune ", "dilhi"];

// arr.forEach((val) =>{
// console.log(val);
// });


// let arr = ["pune ", "dilhi","amdabad"];

// arr.forEach((val,idx , arr) =>{
// console.log(val.toUpperCase(),idx , arr);
// });

//prctis using for each loop--------------------------------------------------
//1.

// let num = [61,52,23,64,85];

// num.forEach((num)=>{
//     console.log(num * num);
// });
// -------------------------------
// let num = [61,52,23,64,85];

// let cal =((num)=>{
//     console.log(num * num);
// });
// num.forEach(cal);

//arry methods ===========================================================

// 1.map


// let num = [61,52,23,64,85];

// let newarr = num.map((val)=>{
//     return val * 2;
// });
// console.log(newarr);

// 2.filter

// let num = [61,52,23,64,85];

// let newarr = num.filter((val)=>{
//     // return val % 2 === 0
//     return val % 2 !== 0
//     // return val < 3
// });
// console.log(newarr);

// 3.reduce

// let num = [61,52,23,64,85];
// const count = num.reduce((res,curr)=>{
//     // return res + curr;
//     return res < curr ? res : curr;
// });
// console.log(count);

//prectis ======================================================================
//1.

// const marks = [98 ,76,54,32,6,7,98,89,99,];

// const newarr = marks.filter((val)=>{
//     // return val > 90;
//     return val < 90;
// });
// console.log(newarr);

// 2.

// let n  = prompt("enter a number:");
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// // console.log(arr);

// let sum = arr.reduce((res,curr)=>{
//    return res + curr
// });
// // console.log(sum);

// let factorical = arr.reduce((res,curr)=>{
//     return res * curr
// }
// );
// console.log("arr =",arr, "sum=",sum , "factorical=",factorical);


// let n  = prompt("enter a number:");
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;}
//     let sum = arr.reduce((res,curr)=>{
//         return res + curr
//      });
//      let factorical = arr.reduce((res,curr)=>{
//         return res * curr
//     });
// console.log("arr =",arr, "sum=",sum , "factorical=",factorical);
 
