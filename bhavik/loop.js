//loops
//for loop
// let text = "";
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + " \n ";
// }
// console.log(text);

// let x 
// for(x=1;x<=10;x++){
//     console.log(x);
// }

// let x 
// for(x=10;x>=1;x--){
//     console.log(x);
// }

// for ( let i = 0; i <=10 ; i++){
//     if(i == 5){
//         console.log(("5 is best number "));
//     }
//     console.log(i);
// }

// for ( let i = 1; i <=10 ; i++){
//     for ( let j = 1; j<= 10 ; j++){
//         console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }

// let myarr = [ " bhavik","darshan","prince"]
// console.log(myarr.length);
// for(let i = 0;i <= myarr.length;i++){
//     console.log(myarr[i]);
// }

// for (let index = 0; index <= 30; index++) {
//     if(index == 12){
//         console.log('detected 12');
//         break
//     }
//     console.log(index);
    
// }

// for (let index = 0; index <= 30; index++) {
//     if(index == 12){
//         console.log('detected 12');
//         continue }
//         else if ( index == 24)
//         {
//             console.log('detected 24');
//             break
//         }   
    
//     console.log(index);
// }

//while / do while

// let i = 0
// while (i <=10) {
//     console.log(i);
//    i = i + 2;
// }

// let i = 0
// do{
//     console.log(i);
//     i = i +2;
// }while(i<=10)

// let myarr = ['bhavik','darshan', ' prince']
// let arr =0
// while (arr < myarr.length){
//     console.log(arr);
//     arr = arr+1
// }

// do{
//     console.log(arr);
//     arr = arr +1;
// }while(arr < myarr.length)

// let score = 1
// do{
//     console.log(score);
//     score++
// }while(score<=10)

// while(score<=10){
//     console.log(score);
//     score++;
// }

// let a ;

// for( a=1 ; a<=100 ; a++){      //even
// for( a=0 ; a<=100 ; a++){       //odd
//     a += 1;
//     console.log(a)
// }}

// let a = 0
// let a = 1
// while(a <=100){
//     a++
//     console.log(a);
//     a +=1;
// }

// do {
//     a++
//     console.log(a);
//     a +=1
// } while (a<=100);

//for in and for off   

// let user = {
//      name : " bhavik",
//      age : 23,
//      std : 12
// };
// for(var i in user){
//     console.log(i + user[i]);
// }

// let user = ["rahul","ram" ,89]
// for(let i of user){
//     console.log(i + user[i]);
//     console.log(i);
// }

//pattern
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
//   let app = " *";
 
// console.log(space.repeat( length - i),app.repeat(i));
// }

// let length = 5;
// for (let i = 1 ; i <= length ;i++){
//     let app = '* ';
//     console.log(app.repeat(i));
// }

// let n = 5;
// for (let i = n ; i>=1;i--){ 
//     let str = '* ';
//     let space = '  ';
//     console.log(space.repeat(n-i)+str.repeat(i));
// }