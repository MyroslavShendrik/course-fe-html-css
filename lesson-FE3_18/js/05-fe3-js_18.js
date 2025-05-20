console.log(
    '%c 5.Використання атрибутів елементів DOM-дерева. ',
    'color: white; background-color: #D33F49',
);

//! Атрибути
console.warn("Атрибути:");
//? ✴️ DOM-елементам відповідають HTML-теги,
//? які містять текстові атрибути.
//? Доступ до атрибутів здійснюється
//? за допомогою стандартних методів.
//? Ці методи працюють зі значенням, яке знаходиться в HTML.
//? 🔸 elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
//? 🔸 elem.getAttribute(name) - отримує значення атрибута і повертає його.
//? 🔸 elem.setAttribute(name, value) - встановлює атрибут.
//? 🔸 elem.removeAttribute(name) - видаляє атрибут.
//? 🔸 elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
const image = document.querySelector(".image");

//todo: Перевірка на наявність:
console.log('image.hasAttribute("src"):', image.hasAttribute("src")); //! true

//todo: Отримуємо значення атрибута
console.log('image.getAttribute("alt"):', image.getAttribute("alt")); //! "Rocks and waterfall"

//todo: Встановлюємо або змінюємо атрибут та його значення:
image.setAttribute("alt", "Amazing nature");
console.log('image.getAttribute("alt"):', image.getAttribute("alt")); //! Amazing nature

image.setAttribute("width", "320");
console.log('image.getAttribute("width"):', image.getAttribute("width")); //! 350

//todo: Видаляємо атрибут:
image.removeAttribute("height");

//todo: Повертаємо об'єкт усіх атрибутів елемента:
console.log("image.attributes:", image.attributes); //! NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}
console.log("---------------------------------------------------------------------------------------------------------------------------------");


//! data-атрибути
console.warn("data-атрибути:");
//? ✴️ Дозволяють додати до тегу довільний атрибут
//? і отримати його значення в JavaScript.
//? Цю можливість використовують для того,
//? щоб спростити написання коду, наприклад,
//? зв'язати дані і розмітку за унікальним ідентифікатором,
//? вказати тип дії кнопки тощо.
//? ✳️ Для отримання значення data-атрибута
//? використовується властивість ❗️dataset❗️, 
//? після якого стоїть ім'я атрибута. 
//? Тобто data- відкидається, 
//? а інша частина імені записується 
//? як ім'я властивості об'єкта.
const saveBtn = document.querySelector('button[data-action="save"]');
console.log("saveBtn.dataset.action:", saveBtn.dataset.action); //! "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log("closeBtn.dataset.action:", closeBtn.dataset.action); //! "close"
console.log("---------------------------------------------------------------------------------------------------------------------------------");
