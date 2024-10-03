const user = {
    name : "Mostafizur Rahman", 
    age : 26,
    address : {
        present : "professore colony",
        permanent : "Sundorgong",

    },

    education : [
        {
            school : "Dhapacila B. L  high school",
            college : "shovagong degree college",
        }
    ],
    nationality: "Bangladeshi"
}

console.log(user.address.permanent);
console.log(user.education[0].college);


const user2 = {
    name : "Tasnim Rahman",
    age : 27 ,
    address : [
        {
            present : "Rangpur",
            permanent : "Dhapacila"
        }
    ],
    profession : "Doctor" ,
    Talent : "super Talented girl",
    behaviour : "so much calm",
    education : [
        {
            school : "shovagong high school",
            college : "Dhaka college",
            college2 : "Rangpur govt homeopathy college"
        }
    ]

}

console.log(user2.education[0].street?.college4); // here I use optional chaining 