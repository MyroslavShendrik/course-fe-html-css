console.log(
    '%c 4.Метод insertAdjacentHTML() ',
    'color: white; background-color: #D33F49',
);

//! Метод insertAdjacentHTML()
console.warn(`Метод insertAdjacentHTML(): \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_18/images/insert-adjacent.png"}`);
//? ✴️ Метод insertAdjacentHTML() - це сучасний метод для додавання рядка 
//? з HTML-тегами перед, після або всередину елемента. 
//? Вирішує проблему innerHTML з повторною серіалізацією 
//? вмісту елемента під час додавання розмітки до вже існуючої.
console.log(
    `%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Аргумент position - це рядок,
//? позиція щодо елемента elem.
//? Приймає одне з чотирьох значень:
//? 🔸 "beforebegin" - перед elem
//? 🔸 "afterbegin" - всередині elem, перед усіма дітьми
//? 🔸 "beforeend" - всередині elem, після усіх дітей
//? 🔸 "afterend" - після elem
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");




console.log("----------------------------------------------------------------------------------");

//? ✳️