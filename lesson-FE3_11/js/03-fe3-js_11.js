console.log(
    '%c3.Доступ до властивостей об\'єкта в методах через this. ',
    'color: white; background-color: #D33F49',
);

//! Доступ до властивостей об'єкта в методах через this
//? ✳️ Методи використовуються для роботи
//? з властивостями об'єкта, їх зміни.
//? ✴️ Для доступу до об'єкта в методі використовується
//? не ім'я змінної, наприклад bookShelf,
//? а ключове слово this - контекст.
//? ✴️ Значенням this буде об'єкт перед «крапкою»,
//? тобто об'єкт, який викликав цей метод,
//? у нашому випадку - це посилання на об'єкт bookShelf.
const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
        console.log(this);
        console.log("🛑 books:", bookShelf.books); //todo: 🛑 var.1
        console.log("✅ books:", this.books); //todo: ✅ var.2
    },
};

//todo: Перед крапкою знаходиться об'єкт bookShelf,
//todo: тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf.getBooks(); //! {books: Array(1), getBooks: ƒ}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");






console.log("--------------------------------------------");