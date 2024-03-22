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

// user[0].school[0].student1.name = "cobra";
// console.log(user[0].school[0].student1);
