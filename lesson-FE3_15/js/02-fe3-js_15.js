console.log(
    '%c 2.Метод sort(). ',
    'color: white; background-color: #D33F49',
);

//! 2.Метод sort()
console.warn("Синтаксис методу sort():");
//? ✴️ Метод sort() сортує елементи масиву,
//? але на відміну від інших методів перебирання,
//? він сортує вихідний масив.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Сортує і змінює вихідний (оригінальний) масив.
//? 🔸 Повертає змінений масив, тобто посилання на відсортований вихідний (оригінальний) масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.sort();
    `,
    'color: blue; font-size: 18px',
);


console.warn("Приклад використання метода sort():");
//? ✳️ Такий масив чисел буде відсортований за зростанням:
const scores1 = [61, 19, 74, 35, 92, 56];
console.log("scores1_before:", scores1); //! [61, 19, 74, 35, 92, 56]
scores1.sort();
console.log("scores1_after:", scores1); //! [19, 35, 56, 61, 74, 92]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Але, оскільки за замовчуванням значення приводяться до рядка,
//? стандартне сортування чисел працює незвично.
const scores2 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores2_before:", scores2); //! [27, 2, 41, 4, 7, 3, 75]
scores2.sort();
console.log("scores2_after:", scores2); //! [2, 27, 3, 4, 41, 7, 75]

//? ✳️ Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.
//? ✳️ Для прикладу, відсортуємо масив рядків за алфавітом:
const students1 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
console.log("students1_before:", students1); //! ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя']
students1.sort();
console.log("students1_after:", students1); //! ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Але порядковий номер великих літер менший, ніж у малих:
const letters = ["b", "B", "a", "A", "c", "C"];
console.log("letters_before:", letters); //! ['b', 'B', 'a', 'A', 'c', 'C']
letters.sort();
console.log("letters_after:", letters);; //! ['A', 'B', 'C', 'a', 'b', 'c']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️ Через те, що сортується вихідний масив, 
//? порушується принцип чистоти функцій 
//? і не можна зручно створити декілька похідних колекцій 
//? на основі вихідної. 
//? Наприклад, створити колекцію, відсортовану за зростанням, 
//? а іншу - за спаданням. 
//? Тому перед сортуванням роблять 
//? повну копію вихідного масиву і сортують вже її.
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores3 = [...scores3].sort();

console.log("scores3:", scores3); //! [61, 19, 74, 35, 92, 56]
console.log("ascendingScores3:", ascendingScores3);  //! [19, 35, 56, 61, 74, 92]
console.log("----------------------------------------------------------------------------------------------");


//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");
//? ✳️ Для зазначення свого порядку сортування методу sort(compareFunction)
//? потрібно передати колбек-функцію з двома параметрами.
//? Це функція порівняння (compare function),
//? порядок сортування залежить від її результату.
//? Метод sort() буде викликати її для двох довільних елементів.
console.log(
    `%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores4 = [27, 2, 41, 4, 7, 3, 75];
const ascendingScores4Old = [...scores4].sort();
const ascendingScores4New = [...scores4].sort((a, b) => a - b);
// const ascendingScores4New = [...scores4].sort((a, b) => b - a);

console.log("scores4:", scores4); //! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:", ascendingScores4Old);  //! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:", ascendingScores4New);  //! [2, 3, 4, 7, 27, 41, 75]

//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");
//? ✴️ Для сортування рядків в алфавітному порядку, 
//? за зростанням або спаданням, 
//? використовується метод рядків localeCompare().
console.log(
    `%c
    firstString.localeCompare(secondString)
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------");

//? ✳️ Він викликається на рядку,
//? який потрібно порівняти (firstString) з тим,
//? що був переданий йому як аргумент (secondString).
console.log('"a".localeCompare("b"):', "a".localeCompare("b")); //! -1
console.log('"b".localeCompare("a"):', "b".localeCompare("a")); //! 1
console.log('"a".localeCompare("a"):', "a".localeCompare("a")); //! 0
console.log('"b".localeCompare("b"):', "b".localeCompare("b")); //! 0
//? 🔸 Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//? 🔸 Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//? 🔸 Якщо рядки однакові, повертається нуль.
console.log("----------------------------------------------------------------------------------------------");

//? ✳️ Це зручно використовувати для сортування рядків,
//? оскільки метод sort() очікує такі самі значення від колбек-функції.
const students2 = ["Віка", "андрій", "Олег", "юля", "Борис", "катя"];
console.log("students2:", students2); //! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']

const inAlphabetOrder2Old = [...students2].sort();
console.log("inAlphabetOrder2Old:", inAlphabetOrder2Old); //! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']

const inAlphabetOrder2New = [...students2].sort((a, b) => a.localeCompare(b));
console.log("inAlphabetOrder2New:", inAlphabetOrder2New); //! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']

const inReversedOrder2New = [...students2].sort((a, b) => b.localeCompare(a));
console.log("inReversedOrder2New:", inReversedOrder2New); //! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']


//! Сортування об'єктів
console.warn("Сортування об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів, 
//? сортування виконується за числовим 
//? або рядковим значенням певної властивості. 
//? Наприклад, у нас є група студентів з балами за тест. 
//? Необхідно відсортувати масив об'єктів за зростанням 
//? і спаданням кількості балів, і за ім'ям студента.
const students3 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
];
console.log("students3:", students3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const inAscendingScoreOrder = students3.sort(
    (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log("inAscendingScoreOrder:", inAscendingScoreOrder); //! 

const inDescendingScoreOrder = students3.sort(
    (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log("inDescendingScoreOrder:", inDescendingScoreOrder); //!

const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
);
console.log("inAlphabeticalOrder:", inAlphabeticalOrder); //! 
console.log("----------------------------------------------------------------------------------------------");
