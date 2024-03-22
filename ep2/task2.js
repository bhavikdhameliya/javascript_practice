//artimetic operators================================

// let a = 5;
// let b = 6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a/b);
// console.log(a++);
// console.log(++a);
// console.log(--a);
// console.log(a--);
// console.log(a%b);
// console.log(a**b);
// console.log(b**a);

//assignment operators=============================


// let a=7;
// let b=6;

// a +=4;
// a -= 4;
// a -= 4;
// a *= 4;
// a /= 4;
// a **= 4;
// a++;
// a--;
// ++a;
// --a;

// console.log(a);
 
//compaison operators==================================

// let a = 5 ;
// let b = 3 ; 

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a != b);

// let a = 5 ;
// let b = 9 ; 

// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);

//logical oparator========================================

// let a = 10 ;
// let b =  6;

// let c = a > b ;
// let d = a == b ;
// console.log(c && d );
// console.log(c || d );
// console.log (! (c < d) );

//conditional stetment ==================================

// if stetment++++++++++++++++++++++++++

// let age = 6;

// if(age > 18){
//     console.log("you can vote");
// }
// if(age < 18){
//     console.log("you cant vote")
// }

//  if-else stetment+++++++++++++++++++++++++++

// let age = 35;

// if(age > 18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cant vote")
// }

// odd,even

// let num = 7
// if (num%2 === 0){
//     console.log(num ,"is even");
// }
// else{
//     console.log(num, " is odd");
// }

//
// let age = 89;

// if (age < 18){
//     console.log("junior");
// }else if(age > 50){
//     console.log("senior");

// }else{
//     console.log("middel");
// }

// ternary operators================================================

// let age = 19 ;
// let result = age >= 18 ? "adult " : " not adult ";
// console.log(result)

// Prectise----------------------------------------------------------------------------------------------

// 1 . get user to input a number using prompt("enter number ")chek a number for multipel 5 

// let num = prompt("enter a Number");

// if (num % 5 === 0 ){
// console.log(num,"num of multipel ");
// }else {
//  console.log(num , "is not multipel ");
// }

//2 .write a code which can give grades to student according totheir scores
// 90-100 a
// 70-89 b
// 60-69 c
// 50-59 d
// 0-49 f

// let result = 99 ;
// let grade;

// if (result >=90 && result <= 99)
//  {
//     grade = "a";
// }
// else if (result >= 70 && result <=89 )
//  {
//     grade = "b";
//  } 
//  else if (result >= 60 && result <= 69)
//  {
//     grade = "c";
//  }
//  else if   (result >=50 && result <= 59)
//  {
//     grade = "d";
//  }
//  else if (result >= 18 && result <= 49)
//  {
//     grade = "f";
//  }
//  console.log("grade =",grade);
 

// let age = 23;
// if(age > 10 && age < 20 ){
//     console.log("your age is 10 to 20");
// } else {
//     console.log("your ege dosent 10 to 20 ");
// }


// let num = 42;

// if (num % 2 === 0 && num % 3 === 0  ){
// console.log(num,"num of multipel 2 and 3  ");
// }else {
//  console.log(num , "is not multipel 2 and 3  ");
// }

const user = [
    {
        jbandkarp: [{
            student1: {
                name: "bhavik",
                surname: " dhameliya",
                rollnumber: [12, 23],
                class: 11,
                mobailno: 9512288574,
                marks: [{
                    maths: 89,
                    sic: 98,
                    guj: 78,
                    result: [{
                        sem1: "fail",
                        sem2: "fail",
                        sem3: [{
                            school: "pass",
                            bordexam: "pass",
                        }]
                    }]
                }],
                address: [{
                    new: " f-503 navkar",
                    old: " 138 tulshi shayam",
                }]
            },
            student2: {
                name: "prince ",
                surname: " dhameliya",
                rollnumber: [24, 23],
                class: 12,
                mobailno: 9106431091,
                marks: [{
                    maths: 99,
                    sic: 66,
                    guj: 88,
                    result: [{
                        sem1: "pass",
                        sem2: "pass",
                        sem3: [{
                            school: "pass",
                            bordexam: "pass"
                        }]
                    }]
                }],
                address: [{
                    new: " f-503 navkar",
                    old: " 138 tulshi shayam",
                }]
            }
        }]
    }]
},{
    office: [{
        coderxonline: [{
            member1: {
                name: "darshan",
                surname: " patel",
                starttime: 9,
                andtime: 7,
                totaltime: "11hour",
                membernumber: [23, 56, 89],
                work: ["beckand", "fullstak", "tl"],
                officeadress: ["lashakana divison-2", "division - 3"],
                selery: [{
                    month1: 6000,
                    month2: 23000,
                    month: 60000,
                    regularsalary: [{
                        salary1: 78999,
                        salary2: 90000,
                    }],
                    position: ["sunior", "teamleader"]
                }],
                gender: "male",
            },
            member2: {
                name: "smit",
                surname: " savliya",
                starttime: 6,
                andtime: 5,
                totaltime: "12hour",
                membernumber: [34, 35, 78],
                work: ["fulter", "ios"],
                officeadress: ["minibazar room-2", "room-3"],
                selery: [{
                    month1: 8000,
                    month2: 33000,
                    month: 78000,

                }],
                position: "junior",
                gender: "male",
            }
        }]
    }];
}]
console.log(user);









