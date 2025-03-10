console.log(
    '%c 2.Навігація по DOM. ',
    'color: white; background-color: #D33F49',
);

//! Навігація по DOM
console.warn("Навігація по DOM:");
//? ✳️ DOM надає широкий спектр можливостей
//? для роботи з елементом і його вмістом,
//? але для цього, спочатку потрібно
//? отримати посилання на нього.
//? Доступ до DOM починається з об'єкта ❗️document❗️,
//? з нього можна дістатися до будь-яких елементів.
//? ✴️ ❗️document❗️ - це частина глобального об'єкта window,
//? який доступний у скрипті, коли він виконується в браузері.
//? Так само як alert, console.log, prompt і багато інших.
//? ✴️ Елементи DOM-дерева мають ієрархічне
//? відношення один до іншого.
//? Для опису відносин використовуються терміни:
//? 🔸 предок (ancestor),
//? 🔸 нащадок (descendant),
//? 🔸 батько (parent),
//? 🔸 дитина (child)
//? 🔸 і сусід (sibling).
console.warn(`Дерево навігації по DOM: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_17/images/dom-traversal.png"}`);
//? ✴️ Для навігації по цій ієрархії елементи мають наступні властивості:
console.log(
    `%c
    elem.parentNode - вибере батьківський elem.
    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
    elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
    `,
    'color: darkred; font-size: 16px',
);
console.log("---------------------------------------------------------------------------------------------");


//! Приклад дерева навігації по DOM
console.warn("Приклад дерева навігації по DOM:");
//? ✳️ Розглянемо приклад навігації по DOM
console.log(
    `%c
    <ul class="list">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
    </ul>
    `,
    'color: blue; font-size: 16px',
);
console.log("---------------------------------------------------------------------------------------------");

// console.log(document);
console.log("document:", document);

const body = document.body;
// console.log(body);
console.log("body = document.body:", body);

const list = document.querySelector(".list");
// console.log(list);
console.log('list = document.querySelector(".list"):', list);

const firstListItem = list.firstElementChild;
// console.log(firstListItem);
console.log('firstListItem = list.firstElementChild:', firstListItem);

const lastListItem = list.lastElementChild;
// console.log(lastListItem);
console.log('lastListItem = list.lastElementChild:', lastListItem);

const listItems = list.children;
// console.log(listItems);
console.log('listItems = list.children:', listItems);

//? ❗️❗️❗️ DOM-колекції, 
//? як-от childNodes і children 
//? - псевдомасиви (NodeList), 
//? у них немає більшості методів масиву.
console.log("---------------------------------------------------------------------------------------------");