//Task2
// const number= [2,5,-4,-9,0,18, 30,-40,63];
// let num = [];
// for (let i = 0; i < number.length; i++) {
//     if(number[i]<0){
//         console.log(number[i]);
//         num.push(number[i]);
//     } 
// }
// console.log(num);
// task3

// const number= [2,5,-4,-9,0,18, 30,-40,63];

// let num = [];
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]**2);
//     num.push(number[i]**2)
    
// }
// console.log(num);

//task4
// const number= [2,5,-4,-9,0,18, 30,-40,63];
// let num1 = [];
// let num2= [];
// for (let i = 0; i < number.length; i++) {
//     if(number[i]<0){     
//         num1.push(number[i]**3);
//     }
//     else if(number[i]>0){     
//         num2.push(number[i]**3)
//     }
// }
// console.log(num1)
// console.log(num2);


//task5
// const number= [2,5,-4,-9,0,18, 30,-40,63];
// let num =[];
// for (let i= number.length; i>0 ;i--) {
//     console.log(number[i]);
//     num.push(number[i]);

// }
// console.log(num);

//task6

let arr= [2,5,-4,-9,0,18, 30,-40,63];
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
   if(arr[i]>max){
    max=arr[i] 

   }
}
















let students = [
    {
      id: 1,
      name: "Nurane",
      surname: "Ismayilzade",
      age: 21,
      hobbies: ["music", "walking", "watchingfilm"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "cavid" },
        { id: 4, name: "alisa" },
      ],
      loginDetail: { username: "nurana21", password: "nunu123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 88,
      salaryAZN: 144,
    },
    {
      id: 2,
      name: "Gizilgul",
      surname: "Allahverdiyeva",
      age: 20,
      hobbies: ["book", "writing code"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "babaxan" },
        { id: 4, name: "gulshen" },
      ],
      loginDetail: { username: "allahverdieva1", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 70,
      salaryAZN: 100,
    },
    {
      id: 3,
      name: "Xanim",
      surname: "Nuriyeva",
      age: 21,
      hobbies: ["book", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "hikmet" },
        { id: 4, name: "gulsen" },
      ],
      loginDetail: { username: "xanim123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 145,
    },
    {
      id: 4,
      name: "Minaya",
      surname: "Binnetova",
      age: 21,
      hobbies: ["book", "gaming", "movie", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "anar" },
      ],
      loginDetail: { username: "binnetova", password: "hello123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 90,
      salaryAZN: 142,
    },
    {
      id: 5,
      name: "Sabina",
      surname: "Hatamli",
      age: 21,
      hobbies: ["shopping", "listen to music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Mirvari" },
      ],
      loginDetail: { username: "sebine123", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 81,
      salaryAZN: 146,
    },
  
    {
      id: 6,
      name: "Ləman",
      surname: "Şamilova",
      age: 20,
      hobbies: [
        "watching movies",
        "reading books",
        "painting",
        " walking",
        " listen to music",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "lemanshamilova", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 85.8,
      salaryAZN: 145,
    },
    {
      id: 7,
      name: "Narmin",
      surname: "Musayeva",
      age: 21,
      hobbies: ["book", "gaming", "painting", "walking"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "fidan" },
        { id: 4, name: "Irada" },
      ],
      loginDetail: {
        username: "narmin0",
        password: "narmin01",
      },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 196,
    },
  
    {
      id: 8,
      name: "Fatima",
      surname: "Akhundzada",
      age: 20,
      hobbies: ["drawing", "sleeping"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Valida" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 76,
      salaryAZN: 100,
    },
    {
      id: 9,
      name: "Elmir",
      surname: "Huseynov",
      age: 21,
      hobbies: ["book", "ice skating", "Tennis", "Karting"],
      student: true,
      teacher: [
        { id: 1, name: "Gurban" },
        { id: 2, name: "Hajar" },
        { id: 3, name: "Morad" },
        { id: 4, name: "Fikrat" },
      ],
      loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
      gender: "man",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 120,
    },
    {
      id: 10,
      name: "Fidan",
      surname: "Rehimli",
      age: 21,
      hobbies: ["book", "gaming"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Turan" },
      ],
      loginDetail: { username: "fidan123", password: "fidanrahimli" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 75,
      salaryAZN: 98,
    },
    {
      id: 11,
      name: "Aynur",
      surname: "Aynurova",
      age: 20,
      hobbies: ["book", "gaming"],
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 81,
      salaryAZN: 120,
    },
  
    {
      id: 12,
      name: "Elman",
      surname: "Muradov",
      age: 20,
      hobbies: [
        "book",
        "gaming",
        "sking",
        "wrestling",
        "swiming",
        "arguing about philosophy",
        "solving sudoku",
        "hiking",
        "walking",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "jale" },
        { id: 4, name: "akhmed" },
      ],
      loginDetail: { username: "elman17", password: "elman12345" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 100,
    },
  ];
// task1
// for(let i=0; i<students.length; i++){
//     console.log(students[i])
// }

//task2
// for(let i=0; i<students.length; i++){
//     console.log(`Ad: ${students[i].name}`);
    
// }


//task3
// for(let i=0; i<students.length; i++){
//     console.log(`Ad: ${students[i].name} ,`, `Soyad: ${students[i].surname}`);
        

// }


//task4

// for(let i=0; i<students.length; i++){
//     if(students[i].fail ==true){
//         console.log(students[i].name, students[i].surname);
//     }            
// }


//task5
let maxx = students[0].avgPoint;
let box = students[0].name;
for(let i=0; i<students.length; i++){
    if(students[i].avgPoint>maxx){
        maxx ==students[i].avgPoint;
        box ==students[0].name;
        
    }
}
console.log(maxx)
console.log(box)
