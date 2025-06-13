// prac-tice.js=1
// var result= 50;
// if (result < 0) {
//     console.log("fail");
//     } else if (result >= 0 && result < 40) {
//     console.log("tomi c grade paiso");
//     }else if (result >= 40 && result < 60) {
//     console.log("tomi B grade paiso");
//     } else if (result >= 60 && result < 80) {
//         console.log("tomi A grade paiso");
//     }else if (result >= 80 && result <= 100) {
//         console.log("tomi A+ grade paiso");
//     } else {
//         console.log("Invalid result");
//     }
2.// Odd Even numbers
// const num= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const oddEven = (array) => {
//     let oddnumber = [];
//     let evenNumber = [];

//     for (let i = 0;i<num.length;i++){
//         const numbers = array[i];

//         if (numbers % 2 == 0) {
//             evenNumber.push(numbers);
//         }
//         else {
//             oddnumber.push(numbers);
//         }
    

//     }
//    return {oddnumber, evenNumber};
// }
// const result = oddEven(num);
// console.log(result);

3. // practice.js
// const num = [1, 6, 3, 7, 4, 2, 5, 8, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19];
// const findIndex = (array) =>
//     array.findIndex((element) =>
//         element === 10,
    
//     );
//     console.log(findIndex(num) + 1)
3. // practice.js
// const numbers = [1, 6, 3, 7, 4, 2, 5, 8, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19];

// const sortNum = [...numbers].sort((a, b) => a - b);

// console.log(sortNum);
4. // practice.js
// function isLeapYear(year) 

// function isLeapYear(year) {
//     if (year % 400 === 0) {
//         return true;
//     }
//     else if (year % 100 === 0) {
//         return false;
//     } else if (year % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
 
// }
// const isLipi1 = isLeapYear(2043);
// const isLipi2 = isLeapYear(2052);
// console.log(isLipi1);
// console.log(isLipi2);
5. // practice.js
// const nums = [];

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     nums.push(i);
//   }
// }

// console.log(nums);
6. // practice.js
// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// var longestName = friends[0];
// for (let i = 0; i < friends.length; i++) {
//     const name = friends[i];
//     if (name.length > longestName.length) {
//         longestName = name;
//     }
// }
// console.log(longestName);

7. // practice.js
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// var uniqueNumbers = [];
// for (let i = 0; i< numbers.length; i++) {
//     const number = numbers[i];
//     if (uniqueNumbers.indexOf(number) === -1) {
//         uniqueNumbers.push(number);
//     }
// }
// console.log(uniqueNumbers);
let leargestNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > leargestNumber) {
        leargestNumber = number;
    }
}
console.log(leargestNumber);