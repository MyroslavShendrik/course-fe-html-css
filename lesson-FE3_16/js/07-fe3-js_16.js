console.log(
    '%c 7.Метод find() і findIndex(). ',
    'color: white; background-color: #D33F49',
);

//! Метод find()
console.warn("Синтаксис методу find():");
//? ✴️ Якщо метод filter(callback) використовується
//? для пошуку всіх елементів, що задовольняють умову,
//? то метод find(callback) дозволяє
//? знайти і повернути перший відповідний елемент,
//? після чого перебирання масиву припиняється.
//? Тобто він шукає до першого збігу.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає перший елемент, що задовольняє умову,
//?    тобто коли колбек повертає true.
//? 🔸 Якщо жоден елемент не задовольнив умову, 
//?    тобто для всіх елементів колбек повернув false, 
//?    метод повертає undefined.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.find((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода find():");
//? ✴️ Метод find() використовується для одного завдання
//? - пошуку елемента за унікальним значенням властивості.
//? ✳️ Наприклад, 
//? пошук користувача за поштою, 
//? автомобіля - за серійним номером, 
//? книги - за назвою тощо.
const colorPickerOptions1 = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];
console.log("colorPickerOptions1:", colorPickerOptions1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log('Пошук за позначкою "blue:"', colorPickerOptions1.find(option => option.label === "blue")); //! { label: 'blue', color: '#2196F3' }
console.log('Пошук за позначкою "pink:"', colorPickerOptions1.find(option => option.label === "pink")); //! { label: 'pink', color: '#E91E63' }
console.log('Пошук за позначкою "white:"', colorPickerOptions1.find(option => option.label === "white")); //! undefined
console.log("-------------------------------------------------------------------------");


//! Метод findIndex()
console.warn("Синтаксис методу findIndex():");
//? ✴️ Метод findIndex(callback)
//? - це сучасна заміна методу indexOf().
//? Дозволяє виконувати пошук за складнішими умовами,
//? ніж просто рівність.
//? Використовується як для пошуку
//? у масиві примітивів, так і в масиві об'єктів.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає індекс першого елемента, що задовольняє умову,
//?    тобто коли колбек повертає true.
//? 🔸 Якщо жоден елемент не задовольнив умову,
//?    тобто для всіх елементів колбек повернув false,
//?    метод повертає -1.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.findIndex((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода findIndex():");
//? ✳️ Приклад-1:
const colorPickerOptions2 = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];
console.log("colorPickerOptions2:", colorPickerOptions2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log('Індекс мітки "blue:"', colorPickerOptions2.findIndex(option => option.label === "blue")); //! 2
console.log('Індекс мітки "pink:"', colorPickerOptions2.findIndex(option => option.label === "pink")); //! 3
console.log('Індекс мітки "white:"', colorPickerOptions2.findIndex(option => option.label === "white")); //! -1
console.log("-------------------------------------------------------------------------");
