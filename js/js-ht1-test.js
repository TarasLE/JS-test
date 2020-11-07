// TESTING ANSWERS FOR TEST - 1 JS

// let word = "qwerty";
// "qwerty".indexOf("b");
// console.log(word.indexOf("b"));
// console.log(Number("25px"));
// console.log("qwerty".includes("b"));
// console.log(true && 5 > 3 && "javascript");

//ЗАДАЧА С ВЫВОДОМ TOTAL (РЕПЕТА)
// const btnAdd = document.querySelector("button[data-add]");
// const valueInput = document.querySelector("input[data-value]");
// const outputEl = document.querySelector(".js-output span");
// let total = 0;
// // console.log(btnAdd);
// btnAdd.addEventListener("click", function () {
//   console.log("click");
//   const value = Number(valueInput.value);
//   console.log(value);
//   total += value;
//   //   console.log("total: ", total);
//   outputEl.textContent = total;
//   valueInput.value = "";
// });

// let input = "test";
// let value = Number(input);
// console.log(isNaN(value));
// console.log(Boolean(value === NaN));

// JS МОДУЛЬ 2, ЗАДАНИЕ 2
// const array = [1, 2, 3];
// let message = "Proin sociis natoque et magnis parturient montes mus";
// console.log(message.split(" ").length);
// let arrayLength = Number(array.length);
// console.log(array.length);
// console.log(arrayLength);

// JS МОДУЛЬ 2, ЗАДАНИЕ 4
// let string = "123456789";
// let resultString = string.slice(0, 6) + "...";
// console.log(resultString);

// JS МОДУЛЬ 2, ЗАДАНИЕ 5
// let string = "Get best sale offers now!";
// let string = "JavaScript weekly newsletter";
// let string = "Latest technology news";
// let string = "[SPAM] How to earn fast money?";
// let arrayString = string.split(" ");
// let spamString = "spam sale";
// let arrayspamString = spamString.split(" ");
// console.log(string.toLowerCase().includes("spam"));
// console.log(arrayString);
// console.log(arrayString[2]);
// console.log(arrayString[2].toLowerCase().includes(arrayspamString[1]));
// let result = arrayString[2].toLowerCase().includes(arrayspamString[1]);
// console.log(result);
// let res = false;
// for (let i = 0; i < arrayString.length; i++) {
//   console.log(arrayString[i]);
//   for (let j = 0; j < arrayspamString.length; j++) {
//     if (arrayString[i].toLowerCase().includes(arrayspamString[j])) {
//       res = arrayString[i].includes(arrayspamString[j]);
//     }
//     console.log(arrayString[i].toLowerCase() + "-" + arrayspamString[j]);
// res = 5;
//   }
//   return res;
// }

// console.log(res);
// console.log(arrayString[0].includes(arrayspamString[0]));

// JS МОДУЛЬ 2, ЗАДАНИЕ 7

// let testNumber = Infinity;
// let testNumber2 = 10;
// console.log(Number.isFinite(testNumber));
// console.log(Number.isFinite(testNumber2));

// JS МОДУЛЬ 2, ЗАДАНИЕ 9
// let string = "reseNS:JCnksjvnkjbfv;kjb;kbt";
// console.log(string.length);

// function isLoginValid(login, min = 4, max = 16) {
//   return login.length > min && login.length < max;
// }

// console.log(isLoginValid(string));
// function isLoginValid(login, min = 4, max = 16) {
//   return login.length >= min && login.length < max;
// }

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   let result = true;
//   for (const name of allLogins) {
//     if (login === name) {
//       result = false;
//     }
//   }
//   return result;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// // console.log(isLoginUnique(logins, "Poly"));

// function addLogin(allLogins, login) {
//   "use strict";

//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;

//   if (isLoginValid(login)) {
//     if (isLoginUnique(logins, login)) {
//       logins.push(login);
//       message = SUCCESS;
//       //   console.log(message);
//     } else {
//       message = REFUSAL;
//       //   console.log(message);
//     }
//   } else {
//     message = ERROR;
//     // console.log(message);
//   }
//   //   console.log(message);
//   console.log(logins);
//   return message;
// }

// console.log(addLogin(logins, "Taras"));

//app JS
// const result = "2009" - "1995";
// console.log(result);

// const re = /java/i;
// const str = "JavaScript";
// const result = re.test(str);
// console.log(result);

// const array = {
//   id: "e1bf46ab-7168-491e-925e-f01e21394812",
//   name: "Sheree Anthony",
//   email: "shereeanthony@kog.com",
//   eyeColor: "brown",
//   friends: ["Goldie Gentry", "Briana Decker"],
//   isActive: true,
//   balance: 2764,
//   skills: ["lorem", "veniam", "culpa"],
//   gender: "female",
//   age: 39,
// };

// console.log(array.name);

// array.name = "Taras";

// console.log(array);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));

console.log(arr1.indexOf(2));
