console.log(
    '%c 2.Спливання подій ',
    'color: white; background-color: #D33F49',
);

//! Спливання подій​
console.warn(`Спливання подій​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_01/images/event-bubbling.png"}`);
//? ✴️ Під час настання події, обробники спочатку спрацьовують
//? на найбільш вкладеному елементі,
//? потім - на його батьківському елементі,
//? потім вище і так далі, вгору по ланцюжку вкладеності.
//? Цей процес називається спливання (event bubbling),
//? тому що події «спливають» від внутрішнього елемента вгору
//? через усіх предків до window, подібно до спливання бульбашки повітря у воді.


//? ✳️ Розглянемо приклад, так буде зрозуміліше.
//? Є три вкладених тега <div> з обробниками кліка на кожному з них.
//? ✳️ Спливання гарантує,
//? що клік по #descendant викличе обробник кліка,
//? якщо він є, спочатку на самому #descendant,
//? потім на елементі #child, далі на елементі #parent
//? і так далі вгору по ланцюжку предків до window.
//? Тому, якщо в прикладі клікнути на #descendant,
//? то послідовно виведуться alert для descendant → child → parent.
const parent = document.querySelector("#parent-1");
const child = document.querySelector("#child-1");
const descendant = document.querySelector("#descendant-1");

parent.addEventListener("click", (event) => {
    alert("PARENT-1 click");
    console.log("PARENT-1 click");
    //! Властивості event.target​ та event.currentTarget
    // console.log("event.target: ", event.target);
    // console.log("event.currentTarget: ", event.currentTarget);
    // console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
});

child.addEventListener("click", () => {
    alert("CHILD-1 click");
    console.log("CHILD-1 click");
});

descendant.addEventListener("click", () => {
    alert("DESCENDANT-1 click");
    console.log("DESCENDANT-1 click");
});
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//?❗️ ✴️ Спливають майже всі події, наприклад, 
//?❗️ події focus і blur не спливають, 
//?❗️ тому існують їх спливаючі аналоги - focusin і focusout.
console.log("-----------------------------------------------------------");


//! Властивості event.target​ та event.currentTarget
console.warn("Властивості event.target​ та event.currentTarget​:");
//? ✴️ Незалежно від того, де ми спіймали подію під час її спливання,
//? завжди можна дізнатися, де саме вона відбулася.
//? Найглибший елемент, який викликає подію,
//? називається цільовим або вихідним, і доступний як ❗️event.target❗️.
//? 🔸 event.target - це той елемент, на якому фактично відбулася подія
//?    (наприклад, клацання миші, натискання клавіші і т.д.).
//? 🔸 event.currentTarget - це той елемент, на якому обробник події був встановлений,
//?    тобто елемент, до якого прив'язана функція addEventListener.
//? ✳️ Якщо слухач події зареєстрований на найвищому елементі,
//? то він «спіймає» усі кліки всередині,
//? тому що події будуть спливати до цього елемента.
//? ✳️ В розглянутому прикладі і поклікайте,
//? event.target - це завжди вихідний (і найглибший) елемент,
//? на якому був клік, а event.currentTarget не змінюється.
