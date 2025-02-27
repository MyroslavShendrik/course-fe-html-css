console.log(
    '%c 1.Метод reduce(). ',
    'color: white; background-color: #D33F49',
);

//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");
//? ✴️ Метод reduce(callback, initialValue)
//? використовується для послідовної обробки кожного елемента масиву
//? із збереженням проміжного результату, як акумулятор.
//? Трохи складніший за інші методи для засвоєння,
//? але результат вартий того.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Робить все, що завгодно.
//? 🔸 Повертає що завгодно.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 Перший параметр колбек-функції
//?    (previousValue) - це акумулятор, тобто проміжний результат.
//?    Значення, яке поверне колбек-функція на поточній ітерації,
//?    буде значенням цього параметра на наступній ітерації.
//? 🔹 наступний - значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
//? 🔹 Другий аргумент - необов'язкове початкове значення акумулятора
//?    - параметр initialValue.
console.log(
    `%c
    масив.reduce((previousValue, element, index, array) => {
        // тіло колбек-функції
    }, initialValue);
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода reduce():");
//? ✳️ Найлегше уявити його роботу метода reduce()
//? на прикладі підрахунку суми елементів масиву.
//? ✳️ Спочатку метод reduce()
//? створює внутрішню змінну-акумулятор (previousValue)
//? і присвоює їй значення параметра initialValue
//? або першого елемента масиву, що перебирається,
//? якщо initialValue не задане.
//? 🔹 previousValue = initialValue = 0; (або previousValue = array(0) = 2).
//? Потім колбек - функція викликається для кожного елемента масиву.
//? Поточне значення параметра previousValue
//? - це те, що повернула колбек - функція на минулій ітерації.
//?     🔹 Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//?     🔹 Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//?     🔹 Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//?     🔹 Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//?     🔹 Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
//? Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
//?       Результат = 32
const array = [2, 7, 3, 14, 6];
console.log("array:", array);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

const total = array.reduce((previousValue, number, index) => {
    console.log(`Iteration-${index + 1}:  previousValue: ${previousValue},  number: ${number}  ->  return ${previousValue + number}`);
    return previousValue + number;
}, 0);

console.log("total:", total); //! 32
//? ✳️ Тобто метод reduce() використовується,
//? коли необхідно взяти «багато» і привести до «одного».
//? У повсякденних завданнях його застосування зводиться до роботи з числами.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ❗️❗️❗️ Важливий приклад вірного використання синтаксису метода reduce():
console.warn("Приклад-1: ВІРНЄ використання синтаксису метода reduce():");
//todo var.1
function example1(arr) {
    arr.reduce((acc, element, index) => {
        console.log(`Acc: ${acc}; Index-${index}:  Element: ${element}`);
    }, undefined);
}
example1(["Робітник1", "Робітник2", "Робітник3"]);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2: ПОМИЛКОВЕ використання синтаксису метода reduce():");
//todo var.2 
function example2(arr) {
    arr.reduce((element, index) => {
        console.log(`Index-${index}:  Element: ${element}`); //todo var.2
    }, undefined);
};
example2(["Робітник1", "Робітник2", "Робітник3"]);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✳️ Під час роботи з масивом об'єктів
//? виконується редукування (змінювання в бік зменшення)
//? за значенням певної властивості.
//? Наприклад, у нас є масив студентів з балами за тест.
//? Необхідно отримати середній бал.
const students = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];
console.log("students:", students);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


//todo: Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
    return total + student.score;
}, 0);
console.log("totalScore:", totalScore); //! 337

const averageScore = totalScore / students.length; //! 67.4
console.log("averageScore:", averageScore);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Просунутий reduce (сума усіх лайків)
console.warn("Просунутий reduce (сума усіх лайків):");
//? ✳️ Припустимо у нас є наступна задача:
//? з масиву постів твіттера окремого користувача
//? необхідно порахувати суму усіх лайків.
//? Можна перебрати циклом for або forEach,
//? кожне з цих рішень вимагатиме
//? написання додаткового коду.
//? А можна використовувати reduce.
const tweets1 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets1:", tweets1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Пройдемо по всіх елементах колекції і додамо значення властивості likes
//todo: до акумулятора, початкове значення якого вкажемо 0.
const likes = tweets1.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log("likes:", likes); //! 32

//todo: Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
//todo: для підрахунку лайків з колекції
const countLikes = tweets => {
    return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log("likes with countLikes:", countLikes(tweets1)); //! 32
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Просунутий reduce (масив усіх тегів)
console.warn("Просунутий reduce (масив усіх тегів):");
//? ✳️ Продовжуючи тему reduce, 
//? ми зберемо в масив усі теги, 
//? які зустрічаються в постах.
const tweets2 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets2:", tweets2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

//todo: Пройдемо по всіх елементах колекції і додамо значення властивості tags
//todo: до акумулятора, початкове значення якого вкажемо порожнім масивом [].
//todo: На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
const tags2 = tweets2.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
}, []);

console.log("tags2:", tags2); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

//todo: Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
//todo: для збирання тегів з колекції
const getTags2 = tweets2 =>
    tweets2.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

console.log("Tags-2 with countLikes:", getTags2(tweets2)); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Просунутий reduce (об'єкт унікальних тегів)
console.warn("Просунутий reduce (об'єкт унікальних  тегів):");
//? ✳️ Продовжуючи тему reduce, 
//? ми зберемо в масив усі теги, 
//? які зустрічаються в постах.
const tweets3 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets3:", tweets3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const getTags3 = tweets =>
    tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

const tags3 = getTags3(tweets3);
console.log("Tags-3 with countLikes:", tags3); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

//todo: Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//todo: Це стандартна практика, якщо callback-функція досить велика.

//todo: Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//todo: то створюємо її і записуємо їй значення 0.
//todo: В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    };
    acc[tag] += 1;
    return acc;
};

//todo: Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags3);
console.log("tagCount:", tagCount); //! {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
console.log("-------------------------------------------------------------");