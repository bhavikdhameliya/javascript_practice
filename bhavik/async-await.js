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


