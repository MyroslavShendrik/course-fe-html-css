console.log(
    '%c 2.Події миші​:                     \n   Типи подій миші.​                \n   Порядок подій.                  \n   Кнопка миші.​                    \n   Координати: clientX/Y, pageX/Y. \n   Прокрутка.​                      ',
    'color: white; background-color: #D33F49',
);

//! Події миші
console.warn("Події миші: \n https://uk.javascript.info/event-details");
//? ✴️ У цьому розділі ми докладніше розглянемо
//? події миші та їх властивості.
//? ✴️ Зверніть увагу: 
//? подібні події можуть надходити не тільки від миші, 
//? але й з інших пристроїв, 
//? таких як телефони та планшети, 
//? де вони емулюються для сумісності.
console.log("-----------------------------------------------------");


//! Типи подій миші
console.warn("Типи подій миші:");
//? ✴️ Ми вже бачили деякі з цих подій:
//? 🔸 mousedown/mouseup - клікання/відпускання кнопки миші над елементом.
//? 🔸 mouseover/mouseout - курсор заходить/виходить з елемента.
//? 🔸 mousemove - кожне переміщення миші над елементом викликає цю подію.
//? 🔸 click - спрацьовує після mousedown, а потім mouseup над тим же елементом, якщо була використана ліва кнопка миші.
//? 🔸 dblclick - спрацьовує після двох кліків на одному елементі за короткий проміжок часу.
//?    На сьогоднішній день рідко використовується.
//? 🔸 contextmenu - спрацьовує при натисканні правої кнопки миші.
//?    Є й інші способи відкрити контекстне меню, наприклад, 
//?    за допомогою спеціальної клавіші на клавіатурі, 
//?    але це вже не зовсім подія миші.
//? Також існують кілька інших подій, про них ми розповімо пізніше.
console.log(
    `%c
    🔸 mousedown/mouseup
    🔸 mouseover/mouseout
    🔸 mousemove
    🔸 click
    🔸 dblclick
    🔸 contextmenu
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
const myButton1 = document.querySelector(".my-button-1");
console.log("myButton1:", myButton1);

myButton1.addEventListener("contextmenu", clckRightButton);

function clckRightButton(event) {
    // console.log("event.target:", event.target);
    // console.log("event.currentTarget:", event.currentTarget);
    console.log("Клік правою кнопкою миші на <My button-1>");
};
console.log("-----------------------------------------------------");