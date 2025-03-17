console.log(
    '%c 1.Створення та видалення елементів ',
    'color: white; background-color: #D33F49',
);

//! Створення та видалення елементів
//? ✳️ DOM API дозволяє не тільки вибирати
//? або змінювати вже існуючі, але й видаляти,
//? а також створювати нові елементи,
//? після чого додавати їх в документ.


//! Створення елементів
console.warn("Створення елементів:");
//? ✴️ Створює елемент з ім'ям tagName 
//? і повертає посилання на нього 
//? як результат свого виконання. 
//? tagName - це рядок, 
//? що вказує тип елемента, який створюється. 
//? Елемент створюється в пам'яті, в DOM його ще немає.
console.log(
    `%c
    🔸 document.createElement(tagName);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const heading = document.createElement("h1");
console.log("heading:", heading); //! <h1></h1>

heading.textContent = "This is a heading";
console.log("heading:", heading); //! <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/17/320/240";
image.alt = "Nature";
console.log("image:", image); //! <img src="https://picsum.photos/id/17/320/240" alt="Nature" />
console.log("----------------------------------------------------------------------");


//! Додавання елементів
console.warn("Додавання елементів:");
console.log(
    `%c
    🔸 element.append(el1, el2, ...)
    🔸 element.prepend(el1, el2, ...)
    🔸 element.after(el1, el2, ...)
    🔸 element.before(el1, el2, ...)
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Щоб створений елемент відображався на сторінці,
//? його необхідно додати до вже існуючого елемента в DOM-дереві.
//? Припустимо, що додаємо до певного елемента element,
//? для цього існують такі методи:
//? 🔸 element.append(el1, el2, ...) - додає один або декілька елементів
//?    ❗️після всіх дітей елемента element❗️.
//? 🔸 element.prepend(el1, el2, ...) - додає один або декілька елементів
//?    ❗️перед усіма дітьми елемента element❗️.
//? 🔸 element.after(el1, el2, ...) - додає один або декілька елементів
//?    ❗️після елемента element❗️.
//? 🔸 element.before(el1, el2, ...) - додає один або декілька елементів
//?    ❗️перед елементом element❗️.
//? ✴️ У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. Рядки додаються як текстові вузли.
const list = document.querySelector(".usernames");

//todo: Додає елемент до кінця списку.
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

//todo: Додає елемент на початок списку.
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

//? ✳️ Якщо елемент для додавання вже знаходиться в DOM, 
//? то він видаляється зі свого старого місця і додається у нове. 
//? З цього випливає правило - один і той самий елемент 
//? не може бути одночасно у двох місцях.
console.log("----------------------------------------------------------------------");


//! Видалення елементів
console.warn("Видалення елементів:");
console.log(
    `%c
    🔸 element.remove()
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Для того, щоб видалити елемент,
//? використовується метод ❗️remove()❗️. 
//? Він викликається на елементі elem, 
//? який необхідно видалити.
const text = document.querySelector('.text');
text.remove();
console.log("----------------------------------------------------------------------");
