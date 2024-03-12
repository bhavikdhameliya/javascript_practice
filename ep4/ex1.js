//arrays======================================

// let hero =  ["bhavik","parth","smit"]
// console.log(hero);

// let hero =  ["bhavik","parth","smit"];
// for (let idx = 0 ; idx < hero.length ; idx++);{
// console.log(hero[idx]);}

//task 1 . for given array with marks of student [85,97,44,37,76,60]
// find the averege marks of entire class.

// let str = [85,97,44,37,76,60];
// let sum = 0 ;
// for (let val of str ){
//     sum += val;}
// let avg = sum / str.length; 
// console.log(avg);

//task 2 
// let item = [250 , 645 , 300 , 900 , 50 ];
// let i = 0 ;
// for (let val of item){  
//     let offer = val / 10 ;
//     item[i] = item[i] - offer;
//     console.log(item[i]);
//     i++;} 

// metthos====================================================
 
 //push
//  let item = [" banana " , " apple ", "manho "];
//  item.push("kiwi");
//  console.log(item);
  

//pop
// let item = [" banana " , " apple ", "manho "];
// item.pop();
// console.log(item);

//to string 
// let item = [" banana " , " apple ", "manho "];
// item.toString();      
// console.log(item);

//concat
// let item = [" banana " , " apple ", "manho "];
// let str = ["kiwi","orange"]
// let a = item.concat(str );
// console.log(a);

//unshift
// let item = [" banana " , " apple ", "manho "];
// item.unshift("kiwi" );
// console.log(item);

//shift
// let item = [" banana " , " apple ", "manho "];
// item.shift( );
// console.log(item);

//slice
// let item = [" banana " , " apple ", "manho "];
// console.log(item.slice(0,3));

//splice
// let item = [" banana " , " apple ", "manho "];
// console.log(item.splice(4,5));

//task 
// let compny = ["Blomberg","microsoft","uber","google","ibm","netflix"];
// compny.shift(),
// compny.splice(1,1,"ola"),
// compny.push("amozone");
// console.log(compny);

//changing 
// const item = [" banana " , " apple ", "manho "];
// item[0]="kiwi";
// console.log(item);

// copyWithIn
// let num = [45, 12, 5, 59];
// let a = num.copyWithin(1,0,2);
// console.log(num);  