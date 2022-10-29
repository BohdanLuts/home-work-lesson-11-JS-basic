// variables task 1
let a = 2;
let b = 3;
let multiplication = a * b;
console.log("1. a * b =", multiplication);

// variables task 2
let c = 8;
let d = 4;
let result = c / d;
console.log("2. c / d =", result);

// variables task 3
let e = 3;
let f = 9.5;
let summ = e + f;
console.log("3. e + f =", summ);

// variables task 4
let number = 11;
console.log("4.1.", number);

let boolean = true;
console.log("4.2.", boolean);

let string = '"java script"';
console.log("4.3.", string);

let textNumber = '"100"';
console.log("4.4.", textNumber);

// variables task 5
let num = 1;
num += 11; // num = num + 11;
console.log("5.1", num);

num -= 11; // num = num – 11;
console.log("5.2", num);

num *= 11; // num = num * 11;
console.log("5.4.", num);

num /= 11; // num = num / 11;
console.log("5.5", num);

++num; // num = num + 1;
console.log("5.6", num);

--num; // num = num – 1;
console.log("5.7", num);

// prompt task 1
let randomNumber = Number(
  prompt("Задача №1. Квадрат числа:\n\nВведите Ваше число:")
);
let resultNumber = randomNumber ** 2;
alert("Квадрат вашего числа " + randomNumber + " равен " + resultNumber + ".");

// prompt task 2
let randomNumberOne = Number(
  prompt(
    "Задача №2. Среднее арифметическое двух чисел:\n\nВведите Ваше первое число:"
  )
);
let randomNumberTwo = Number(prompt("Введите Ваше второе число:"));
let average = (randomNumberOne + randomNumberTwo) / 2;
alert(
  "Среднее арифметическое числа " +
    randomNumberOne +
    " и " +
    randomNumberTwo +
    " составляет " +
    average +
    "."
);

// prompt task 3
let min = Math.abs(
  Number(
    prompt(
      "Задача №3. Количество секунд в минутах\n\nВведите количество минут:"
    )
  )
);
let sec = min * 60;
alert(min + " минут = " + sec + " секунд.");

// prompt task 4
let greeting = "Hello";
let userName = null;
userName = prompt("What is your name?");
alert(greeting + ", " + userName + "!");
