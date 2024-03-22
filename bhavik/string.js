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
                    membernumber: [23, 56, 89],
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
            }
        ]
    }
];
// console.log(user[0].school[0].student1);
// console.log(user[0].school[1].student2);
// console.log(user[1].office[0].member1);
// console.log(user[1].office[1].member2);

//string==============================================================================

// console.log(user[1].office[1].member2.name.charAt(3));

// console.log(user[1].office[1].member2.name.charCodeAt(3));

// let men ;
// let a = user[0].school[0].student1.class;
// a = a.toString();
// men = a.padEnd(5,"x")
// console.log(men);

// let men ;
// let a = user[0].school[1].student2.class;
// a = a.toString();
// men = a.padStart(5,"x")
// console.log(men);

// let data = user[0].school[0].student1.name;
// data =data.replace(/bhavik/g,"cobra");
// console.log(data);
// console.log(user[0].school[0].student1);

// let data = user[0].school[0].student1.name;
// data =data.replaceAll("bhavik","cobra");
// console.log(data);
// console.log(user[0].school[0].student1);

// let result;
// let data = user[0].school[1].student2.name;
// result = data.split(".");
// console.log(result);

// let a = user[0].school[0].student1.name;
// let b = user[0].school[1].student2.surname;
// c = a + b;
// console.log(c);

// let data = user[0].school[0].student1.name;
// let data = user[0].school[0].student1.surname;
// let data = user[0].school[0].student1.mobailno;
// let c = data.length;
// console.log(c);

// let data = user[1].office[0].member1.work;
// // c = data.substr(-8,5);
// console.log(data);

// let txt = user[1].office[0].member1.work;
// c = txt.substring(5);
// console.log(c);

// let txt = "apple , banna , kiwi";
// c = txt.substring(4);
// console.log(c);

// let txt = user[1].office[0].member1.work;
// c = txt.toLowerCase();
// console.log(c);

// let txt = user[1].office[0].member1.work;
// c = txt.toUpperCase();
// console.log(c);

// let txt = user[0].school[0].student1.name;
// c = txt.slice(6);
// console.log(c);

// let txt = user[0].school[0].student1.name;
// c = txt.trim();
// console.log(c);

// let tat = user[0].school[0].student1.name;
// c = tat.trimEnd();
// console.log(c);

// let txt = user[0].school[0].student1.name;
// c = txt.trimStart();
// console.log(c);