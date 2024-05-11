//Masalalar v-2
//1---
// function search(str) {
// let file1 = str.lastIndexOf("/");
// let fileName = str.substring(file1);
// let arr = fileName.lastIndexOf(".");
// let file = fileName.substring(0, arr);
// return file;
// };
// let inputPath = "D:/Qudrat_c++/books/My_book.exe";
// let output = search(inputPath);
// console.log(output);


//2---
// function getSum3() {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// let res = getSum3(15); 
// console.log(res);


// 3---
// function func(n) {
//     let sum = 0;
//     for (let i = 1; i <= 2 * n; i++) {
//         sum += i ** 2;
//     }
//     return sum;
// }
// let n = 10;
// let res = func(n);
// console.log(res);

//4---
// let person = [
// 	"Abdulaziz",
// 	"Safarmurod",
// 	"O’rol",
// 	"Jahongir"
// ];
// let res = {};
// for (let i = 0; i < person.length; i++) {
//     let a = person[i];
//     let sum = person[i].length;
//     res[a] = sum;
// }
// console.log(res);


//8---
// const pupils = [
//     {
//       name: "Elbek",
//       protcent: 95,
//     },
//     {
//       name: "Zafar",
//       protcent: 78,
//     },
//     {
//       name: "Aziz",
//       protcent: 83,
//     },
//     {
//       name: "Jasur",
//       protcent: 88,
//     },
//     {
//       name: "Bobur",
//       protcent: 66,
//     },
//     {
//       name: "Kamron",
//       protcent: 75,
//     },
//   ];
// const passed = pupils.reduce((count, pupil) => {
//     if (pupils.protcent >= 70) {
//         return count + 1; 
//     } else {
//         return count; 
//     }
// });
// const failed = pupils.length - passed;
// console.log("O'tganlar:", passed);
// console.log("O'ta olmaganlar:", failed);

//5---
// let n = 3
// const obj = { 
// 	a: 2,
// 	b: 3,
// 	c: 4,
// 	d: 6
// };
// function getMultipleValues(n){
//     let res = 0;
//     res = obj * n;
//     return res;
// }
// console.log(obj);


//6---
// function exchange(sum) {
//     let min = Math.min(...sum);
//     let max = Math.max(...sum);
//     let minIndex = sum.indexOf(min);
//     let maxindex = sum.indexOf(max);
//     sum[minIndex] = 0;
//     sum[maxindex] = 0;
//     return sum;
// }
// let a = [11, 22, 33, 44]; 
// let res = exchange(a);
// console.log(res); 

//9---
// let numbers = [3, 3, 4, 5, 6, 7];
// function nine(arr) {
//   return arr.reduce((count, curVal) => {
//     if (count.indexOf(curVal) === -1) {
//       count.push(curVal);
//     }
//     return count;
//   }, []);
// }
// let res = nine(numbers);
// console.log(res);


// 7---
// let text = "Men Abdulaziz Programmerman";
// if ( text === "") {
//     console.log(false);
// } else {
//     console.log(true);
// }


//10---
// const animals = [
//     'dog', 
//     'chicken',
//     'cat',
//     'dog',
//     'chicken',
//     'chicken',
//     'rabbit'
// ];
// const animalLife = animals.reduce((acc, animal) => {
//     acc[animal] = (acc[animal] || 0) + 1;
//     return acc;
// }, {});
// console.log(animalLife);
