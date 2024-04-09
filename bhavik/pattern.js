//pattern======================================

// let a = 5;
// for ( let i = 1; i<= a ; i++){

//     for (let j = 1; j <= i ; j++ ){
//          console.log('*');
//     }
//     console.log("\n");
// }


// let rows = 5;
// let pattern= "";
// for(let n = 1;n<= rows;n++){
//     for(let num = 1 ;num<=n;num++){
//         pattern += num;
// }pattern += "\n"
// }console.log(pattern);


// let rows = 5;
// let pattern= "";
// for(let n = 1;n<= rows;n++){
//     for(let num = 1 ;num<=n;num++){
//         pattern += n;
// }pattern += "\n";
// }console.log(pattern);


// let rows = 4;
// let vatiable = 1;
// let pattern= "";
// for(let n = 1;n<= rows;n++){
//     for(let num = 1 ;num<=n;num++){
//         pattern += vatiable+" ";
//         vatiable++;
// }pattern += "\n";
// }console.log(pattern);


// let length = 5;
// for (let i = 1; i <= length ; i++){
//   let space = " ";
//   let app = " *";}
// console.log(space.repeat( length - i),app.repeat(i));
// }


// let length = 5;
// for (let i = 1; i <= length; i++) {
//     let app = '* ';
//     console.log(app.repeat(i));
// }
// *
// **
// ***
// ****
// *****


// let a = 5;
// for (let i = a; i >= 1; i--) {
//     let str = '* ';
//     let space = '  ';
//     console.log(space.repeat(a - i) + str.repeat(i));
// }
// *****
//  ****
//   ***
//    **
//     *


// let n = 3;
// for (i = 1; i <= n; i++) {
//     let str = "";
//     for (j = 1; j <= i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }
// *
// **
// ***


let n = 6
let str = ""
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    str += '\n';
}
console.log(str);
// 1
// 22
// 333
// 4444