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
        файл user.json:

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

//? ✳️ файл user.json:
// import userJSON from "../json/user.json"
// console.log("userJSON:", userJSON);

fetch('./json/user.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Помилка завантаження JSON.: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Об\'єкт із JSON:', data);
        console.log('Ім\'я користувача.\:', data.name);
    })
    .catch(error => {
        console.error('Помилка:', error);
    });



console.log("-------------------------------------------------------------------");
