// let res = "are you robot"
// try {
//     if(res === "y"){
//        console.log ('robot found');
//     }else(res !== "y")
//     {
//         console.log("not found");
//     }
// } catch (error) {
//     console.log(error);
// }


//    const numerator= 100, denominator = 20;
//     try {
//          console.log(numerator/denominator);
//         // forgot to define variable a      
//         console.log(a); 
//     }
//     catch(error) {
//         console.log('An error caught'); 
//         console.log('Error message: ' + error);  
//     }



let number = 40 ;
try {
    if (number > 50){
        console.log("success");
    }else{
        throw new Error("n is not deined (bhavik)");
        // console.log("the number is low");
        // console.log(n);
    }
    console.log("ohk......");
} catch (error) {
    console.log('an error cought');
    console.log(" "+error);
    // console.log(""+error);
}
console.log("thank you ");

  