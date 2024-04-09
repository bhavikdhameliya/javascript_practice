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


async function tempfun() {
    try {
        let count = false
        if (count) {
            console.log("Sucess");
        } else {
            console.log("Error Bhavik");
        }
    } catch (error) {

    }
}
tempfun();

