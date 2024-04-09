// function bhavik(){
//     return new Promise((resolve , reject )=>{
//         reject("success")
//     })
// }
// let a = bhavik();
// console.log(a);

// a.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })
// console.log("end"); 

// ============================================

// new Promise(function(resolve ,reject){
//    setTimeout(function()  {
//     console.log("task 1");
//     resolve()
//     }, 4000);
// }).then(function(){
//     console.log("task 2 resol");
// })



// function bhavik(){
//     return new Promise((resolve, reject) => {

//         resolve("task 1");
//     })
// }let a = bhavik();
// console.log(a);
// a.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log();
// })
// console.log("complet");




// function bhavik() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("task 1")
//         }, 4000);
//     })
// }
// let a = bhavik();
// console.log(a);
// a.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log();
// })
// console.log("complet");



// function bhavik() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 username: " bhavik",
//                 email: " bhavik@info.in"
//             })
//         }, 4000);
//     })
// }
// let a = bhavik();
// console.log(a);
// a.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log();
// })
// console.log("complet");




// function bhavik() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false
//             if (!error) {
//                 resolve({
//                     username: " bhavik",
//                     email: " bhavik@info.in"
//                 })
//             } else {
//                 reject("error ")
//             }
// }, 1000);
//          })
// }

// let a = bhavik();
// console.log("a: ", a);
// a.then((result) => {
//     console.log(result);
//     return result.email
// })
// .then((email) => {
//     console.log(email);
// })
// .catch((err) => {
//     console.log(er);
// }).finally(() => {
//     console.log("the done");
// })



//new task ==================================================




// function tempFun(){
//     return new Promise((resolve, reject) => {
//         let age = 18;
//         if(age >= 18){

//             resolve("you are vote");
//         }else{

//             reject("you are not vote");
//         }
//     })
// }
// let a = tempFun();
// console.log(a);

// a.then((result)=>{
//   console.log(result);
// }).catch((error)=>{
// console.log(error);
// }).finally(()=>{
//     console.log("done");
// })



// function tempfun(){
//     return new Promise((resolve, reject) => {
//         let count = true ;
//         if(count){
//             resolve("sucess");
//         }else{
//           reject("error")
//         }
//     })
// }
// let a = tempfun();
// console.log(a);
// a.then((result)=>{
//  console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("the done ");
// })


// function bhavik() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let count = false;
//             if (count) {
//                 resolve("sucess");
//             }
//               else {
//                 reject("eroor")
//             }
//         }, 9000);
//     })
// }
// let a = bhavik();
// console.log(a);
// a.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("the done");
// })



// function tempFun() {
//     return new Promise((resolve , reject)=>{
//        let count = true;
//        if(count){
//            resolve("sucess")
//        }else{
//         reject("error")
//        }
//     })
// }
// let a = tempFun();
// console.log(a);
// a.then((result)=>{
//  console.log(result);
// }).catch((err)=>{
// console.log(err);
// }).finally(()=>{
//     console.log("the done");
// })

function tempFun(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({
                username : " bhavik",
                email : " bhavik@gmail.com"
            })
        }else{
            reject("error")
        }
    }, 2000);
  })   
}
let a = tempFun();
console.log(a);
a.then((result)=>{
console.log(result);
return result.email
}).then((email)=>{
console.log(email);
}).catch((err)=>{
console.log(err);
}).finally(()=>{
    console.log("the done ");
})