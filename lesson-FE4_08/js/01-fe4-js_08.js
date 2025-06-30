console.log(
    '%c 1.Формат JSON. ',
    'color: white; background-color: #D33F49',
);

//! Формат JSON
console.warn("Формат JSON:");
//? ✴️ JSON (JavaScript Object Notation) -
//? сучасний текстовий формат зберігання і передачі
//? структурованих даних у текстовій формі.
//? Звичний об'єктоподібний синтаксис JSON - дуже зручний.
//? Саме у цьому форматі дані будуть приходити і
//? відправлятися на сервер, зберігатися в локальному сховищі тощо.

//? ✳️ Але JSON - це не об'єкт, а його рядкове відображення.
//? Нижче наведено приклад JSON файлу.
//? Синтаксис схожий на об'єкт, за винятком того, що ключі -
//? це завжди рядки у подвійних лапках.
//? Рядкові значення також обов'язково повинні бути взяті у подвійні лапки.

//?  📌 ---:Значеннями властивостей можуть бути типи: 
//? 🔸 string, 
//? 🔸 number, 
//? 🔸 object, 
//? 🔸 array, 
//? 🔸 boolean
//? 🔸 null.

console.log(
    `%c
        Імпорт файла user.json:

    {
        "name": "Josh",
        "weight": 175,
        "age": 30,
        "eyecolor": "brown",
        "isHappy": true,
        "cars": ["Chevy", "Honda"],
        "favoriteBook": {
            "title": "The Last Kingdom",
            "author": "Bernard Cornwell",
            "rating": 8.38
        }
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("---------------------------------------------------------------------------------------------------------------");


//! Імпорт файла user.json (var.1):
console.warn("Імпорт файла user.json (var.1):");
//todo: var.1 - Так працює тільки в проєкті з бандлером Vite:
// import userJSON from "../json/user.json"
// console.log("userJSON:", userJSON);
console.log(
    `%c
    import userJSON from "../json/user.json"
    `,
    'color: blue; font-size: 18px',
);
console.warn('var.1 - Так працює тільки в проєкті з бандлером Vite: \n https://ruslan379.github.io/hw-js-vite/page/lesson-07.html');
console.log("---------------------------------------------------------------------------------------------------------------");


//! Імпорт файла user.json (var.2) - працює тільки при запуску через Live Server (в VS Code):
async function fetchJSON() {
    const userJSON = await fetch('./json/user.json');
    console.warn("Імпорт файла user.json (var.2) - працює тільки при запуску через Live Server (в VS Code):");
    // console.log("userJSON:", userJSON);

    const userJSONtext = await userJSON.text();
    console.log("userJSONtext:", userJSONtext);

    const userJSONobj = JSON.parse(userJSONtext)

    console.log('Об\'єкт із JSON-файлу <user.json>:', userJSONobj);

    console.log("---------------------------------------------------------------------------------------------------------------");
};
fetchJSON();


//! Імпорт файла user.json (var.3) - працює тільки при запуску через Live Server (в VS Code):
fetch('./json/user.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Помилка завантаження JSON.: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.warn("Імпорт файла user.json (var.3) - працює тільки при запуску через Live Server (в VS Code):");
        console.log('Об\'єкт із JSON:', data);
        console.log('Ім\'я користувача.\:', data.name);
        console.log("---------------------------------------------------------------------------------------------------------------");

    })
    .catch(error => {
        console.error('Помилка:', error);
    });
console.log("---------------------------------------------------------------------------------------------------------------");

//? ✳️ Javascript і JSON чудово працюють разом,
//? завдяки методам вбудованого класу JSON,
//? які перетворюють JavaScript об'єкт у JSON і навпаки.
//? Незалежно від того, що у вас є,
//? можна легко отримати зворотне.
