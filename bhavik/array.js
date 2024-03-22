const user = [{
        school: [{
                student1: {
                    name: "       bhavik     ",
                    surname: " dhameliya",
                    rollnumber: [12, 23],
                    class: 11,
                    mobailno: "9512288574",
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
                }
            },
            {
                student2: {
                    name: "prince",
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
            }
        ]

    },
    {
        office: [{
                member1: {
                    name: "darshan",
                    surname: " patel",
                    starttime: 9,
                    andtime: 7,
                    totaltime: "11hour",
                    membernumber: [23, 56, 89, 90, 56, 34],
                    work: "beckand, fullstak, tl",
                    officeadress: ["lashakana divison-2", "division - 3"],
                    selery: [{
                        month1: 6000,
                        month2: 23000,
                        month: 60000,
                        regularsalary: [{
                            salary1: 78999,
                            salary2: 90000,
                        }]
                    }],
                    position: ["sunior", "teamleader"],
                    gender: "male",
                }
            },
            {
                member2: {
                    name: "smit",
                    surname: " savliya",
                    starttime: 6,
                    andtime: 5,
                    totaltime: "12hour",
                    membernumber: [5, 35, 78, 98, 76, 54, 65, " hello", " world"],
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
            }
        ]
    }
];
// console.log(user[0].school[0].student1);
// console.log(user[0].school[1].student2);
// console.log(user[1].office[0].member1);
// console.log(user[1].office[1].member2);



//array===================================================================

//chenging elements
// const txt = user[1].office[0].member1.position;
// txt[0] = "junior";
// console.log(txt);

//concat
// let arr1 = user[1].office[0].member1.name;
// let arr2 = user[0].school[1].student2.surname;
// c = arr1 + arr2 ;
// console.log(c);

//copywithin - study
// let arr = user[1].office[1].member2.membernumber;
// let a = arr.copyWithin(1,0,1);
// console.log(a);

//entries
// let num = user[1].office[1].member2.membernumber;
// let a = num.entries();
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next());

//every
// let num = user[1].office[1].member2.membernumber;
// let a = num.every((val)=>{
//     // return val>15
//     return val<15
// });
// console.log(a);

//filter
// let num = user[1].office[1].member2.membernumber;
// let a = num.filter((val)=>{
//     // return val>15
//     return val<15
// });
// console.log(a);

//find
// let num = user[1].office[1].member2.membernumber;
// let a = num.find((val)=>{
//     return val>15
//     // return val<15
// });
// console.log(a);

//findindex
// let num = user[1].office[1].member2.membernumber;
// let a = num.findIndex((val)=>{
//     // return val>15
//     return val<15
// });
// console.log(a);

//foreach - study
// let num = user[1].office[1].member2.membernumber;
// let txt = " ";
// num.forEach((val)=>{ 
//     txt += val + " ";
// })
// console.log(txt);

//include
// let num = user[1].office[1].member2.membernumber;
// console.log(num.includes(21));

//length
// let num = user[1].office[1].member2.membernumber;
// console.log(num.length);

//map
// let num = user[1].office[0].member1.membernumber;
// let a = num.map((val)=>{
//     return val * 3
// })
// console.log(a);

//mini / max
// let num = user[1].office[0].member1.membernumber;
// a = num.Math.max.apply();
// console.log(a);

//pop
// let num = user[1].office[0].member1.membernumber;
// num.pop();
// num.pop();
// num.pop();
// num.pop();
// console.log(num); 

//push
// let num = user[1].office[0].member1.membernumber;
// num.push(99);
// console.log(num);

//reduce - reduseright
// let num = user[1].office[0].member1.membernumber;
// let txt = num.reduceRight((total , val)=>{
//     return total + val 
// });
// console.log(txt);

// let num = user[1].office[0].member1.membernumber;
// let txt = num.reduce((total , val)=>{
//     return total + val; 
// })
// console.log(txt);

//revers
// let num = user[1].office[0].member1.membernumber;
// num.reverse();
// console.log(num);

//shift
// let num = user[1].office[0].member1.membernumber;
// num.shift();
// num.shift();
// num.shift();
// num.shift();
// console.log(num);

//slice
// let num = user[1].office[0].member1.membernumber;
// let a = num.slice(2,5);
// console.log(a);

//some
// let num = user[1].office[0].member1.membernumber;
// let txt = num.some((val)=>{
//     // return val>15;
//     return val<15;
// })
// console.log(txt);

//sort
// let num = user[1].office[0].member1.membernumber;
// a = num.sort((a ,b )=> a  - b);
// console.log(a);

//splice
// let num = user[1].office[0].member1.membernumber;
// let a = num.splice(2,3);
// console.log(a);

//unshift
// let num = user[1].office[0].member1.membernumber;
// num.unshift(900);
// console.log(num);
