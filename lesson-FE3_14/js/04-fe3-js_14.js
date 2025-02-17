console.log(
    '%c 4.Метод forEach. ',
    'color: white; background-color: #D33F49',
);

//! 4.Метод forEach
console.warn("Синтаксис методу forEach:");
//? ✴️ Метод перебирання масиву,
//? який використовується для заміни циклів
//? for і for...of в роботі з колекцією даних.
//? 🔸 Поелементно перебирає масив.
//? 🔸 Викликає колбек-функцію для кожного елемента масиву.
//? 🔸 Нічого не повертає.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    array.forEach(function callback(element, index, array) {
        // Тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);


//? ✳️ Можна оголошувати тільки необхідні параметри,
//? найчастіше - це елемент, головне не забувати про їх порядок.
const numbers = [5, 10, 15, 20, 25];

console.warn("Функціональний forEach:");
//todo: Функціональний forEach:
numbers.forEach(num => console.log(num));
console.log(". . . . . . . . . . . .");

console.warn("Перебирання за допомогою Класичного for:");
//todo: Перебирання за допомогою Класичного for:
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Індекс: ${i}, значення: ${numbers[i]}`);
};
console.log(". . . . . . . . . . . .");

console.warn("Метод перебирання forEach (var.1):");
//todo: Метод перебирання forEach (var.1):
numbers.forEach(function (number, index) {
    console.log(`Індекс: ${index}, значення: ${number}`);
});
console.log(". . . . . . . . . . . .");

console.warn("Метод перебирання forEach (var.2):");
//todo: Метод перебирання forEach (var.2):
numbers.forEach((num, idx) => console.log(`index: ${idx}, value: ${num}`));
console.log("------------------------");

//? ❗️ Єдиним випадком, коли варто використовувати
//? цикли for або for...of для перебирання масиву,
//? - це задачі з перериванням виконання циклу.
//? ❗️❗️❗️ Перервати виконання методу forEach не можна,
//? він завжди перебирає масив до кінця.
