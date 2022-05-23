/*var madLib=function(adverb,noun1,noun2,adjective,verb){

    return "The"+" "+adjective+" "+noun1+" "+adverb+" "+verb+" the "+noun2 + '.';
 }
 console.log(madLib("quietly", "dog", "moon", "lazy", "smashed"));


 // Write the while and do-while loops here!
let population = 2;
let populationLimit = 10000;
let week = 1;

while (population < populationLimit){ 
       console.log("Week" + week + ": population = " + population);
       population = population * 2;
       
           if (week % 4 == 0) {
                 population = population - (0.4 * population);
           }
        week++;
}

console.log("Population is " + population + " on week " + week);


 // Convert into a drawBox function

function drawBox(numRows, numCols, boxChar) {

    if (boxChar == undefined) {
        boxChar = "X";
    }        
    for (let r = 0; r < numRows; r++) {
       let line = "";
       for (let c = 0; c < numCols; c++) {
          line += boxChar;
       }
       console.log(line);
    }

}

drawBox(5, 4, "!");
drawBox(2, 6 );*/

//document.addEventListener("DOMContentLoaded", function(e){

//   var button = document.getElementById("myButton");

//    button.addEventListener("click", function(){
//     alert('hello');
//  });

//});

// conditional operators

//const userRole = 'admin';

//if (userRole === "admina");{

/* console.log("You are admin");
}
else{
    console.log("you are not admin");

}*/

/*condition ? "" : "";
userRole=== "admin" ? console.log("you are admin"): console.log(you are not admin);
*/

//console.log("hello");

// const userRole = "admin";
// condition ? " " : " " ;

// userRole === "admin" ? console.log("you are admin") : console.log("you are not admin");

// to comment and uncomment all use cmd + /
// one lines cmd + c

// console.log (4 >= 5);

// console.log(3 + 10 * 2); --> 23

// console.log((3 + 10) * 2); ---> 26

// console.log (3 > 2 && 2 > 1);

// console.log (3 > 2 > 1);

// console.log (3 < 2 || 2 < 1);

//arrays

// const languages= ['c' , 'python', 'javascript'];

// languages.push('vscode'); add item

// languages.unshift('java'); //start item add

//  languages.shift();  // first item gone

// languages.pop(); //last item out

// console.log(languages.length);

// console.log(languages);

// LOOPS

// for (let i = 0; i < 4; i++) {
//     console.log("!");
// }

// const actors = [{

//     name: 'actor1',
//     payment: 50

// },
// {

//     name: 'actor2',
//     payment: 100

// },
// {

//     name: 'actor3',
//     payment: 150

// }
// ];

// for(let i =0; i < actors.length; i++){
//     actors[i].payment-= 10;
// }

// actors.forEach((actor) => {

//      actor.payment -= 10;
//      console.log(actor);

// });


// for (let actor of actors){

//     actor.payment -= 10; 
//    // console.log(actor);
// }
//       console.log(actors);
// TODO: coding

//filter

// const students = [
//     {
//         name: "student 1",
//         marks: 45
//     },
//     {
//         name: "student 2",
//         marks: 60
//     },
//     {
//         name: "student 3",
//         marks: 35
//     }
// ];

// const failed = students.filter((student) => student.marks < 45);

// //{ written in easy way in one line above..
// // if (student.marks < 45){

// //     return true;
// // }
// // else{
// //     return false;
// // }});


//     console.log(failed);

//map

// const users = [
//     {
//         fname: 'John',
//         lname: 'Sue'
//     },
//     {
//         fname:'Jane',
//         lname:'Doe'
//     }
// ];

// const finalUsers = users.map((user) => {

//  return {
//      fullname : `${user.fname} ${user.lname}`
//  }

// } );

// console.log(finalUsers);

//reduce

// const movies = [
//     {
//         name: 'notebook',
//         budget : 100
//     },
//     {
//         name: 'titanic',
//         budget : 150
//     },
//     {
//         name: 'matrix',
//         budget : 200
//     }
// ];

// let total = 0;

// movies.forEach((movie) => {

//     total += movie.budget;
// }
// );


// const total = movies.reduce((acc, movie) => {
 
//     acc += movie.budget;

// return acc;

// }, 0);

// console.log(total);

//indexof


// const admins = [2, 1, 5];

// const user = {

//     name:'xyz',
//     id: 5
// };

// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

//console.log(admins.indexOf(user.id));
//includes give u short ans


// console.log(admins.includes(user.id));

//find

// const users = [
//     {
//         name: 'xyz',
//         id: 1
//     },
//     {
//         name: 'abc',
//         id: 2
//     },
//     {
//         name: 'pqx',
//         id: 3
//     }
// ];

// const myUser = users.find((user) => {

//     if (user.id === 2 ){

//         return true;
//     }
//     return false;

// });

// console.log(myUser);

// const names = ['john', 'jane', 'shyam', 'ram' , 'sameer', 'mansi'];

// names.sort ();

// console.log(names);

//splice

// const names = ['john', 'jane', 'shyam', 'ram' , 'sameer', 'mansi'];

// names.splice(2, 3);

// console.log(names);

