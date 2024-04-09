// function tempFun(boolean) {
//     return new Promise((resolve, reject) => {
//         if (boolean) {
//             resolve("Sucess");
//         } else {
//             reject("Error Bhavik");
//         }
//     })
// }

// async function asyncFun() {
//     const result = await tempFun(true);
//     return result;
// }

// asyncFun().then((result) => {
//         console.log("Then Block")
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log("Catch Block")
//         console.log(error)
//     })


// async function tempfun() {
//     try {
//         let count = false
//         if (count) {
//             console.log("Sucess");
//         } else {
//             console.log("Error Bhavik");
//         }
//     } catch (error) {

//     }
// }
// tempfun();

// async function tempfun(){
//     setTimeout(() => {
//         try {
//             let count = true;
//             if(count){
//           console.log("sucess");
//             }else{
//                 console.log("error bhavik");
//             }
//         } catch (error) {

//         }
//     }, 4000);
// }
// tempfun()

// function api(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         console.log("weather data");
//         resolve(200) 
//        }, 2000);
//     });
// }
// async function getData() {
//     await api();
// }
// getData();

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");
//         }, 2000);
//     });
// };
// async function detAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3); 
// } 
// detAllData();


// function getData(detaid){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         console.log("data", detaid);
//         resolve();
//        }, 2000); 
//     })
// }
// async function getAllData(){
//             getData(1);
//             getData(2);
//      await  getData(3);
//             getData(4);
//      await  getData(5);
//             getData(6);
// }
// getAllData();
// console.log(getData(7));
// console.log(getData(8));



function tempfun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let count = 5;
            if (count % 5 === 0) {
                resolve("multipel are");
            } else {
                reject("not multipel")
            }
        }, 2000);
    })
}
async function asyncFun() {
    const result = await tempfun();
    return result
}
asyncFun().then((result) => {
    console.log("then block");
    console.log(result);
}).catch((err) => {
    console.log("catch block");
    console.log(err);
})