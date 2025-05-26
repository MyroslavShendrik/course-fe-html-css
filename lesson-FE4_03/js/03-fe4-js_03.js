console.log(
    '%c 3.Відкладене завантаження (з концепцією Intersection Observer) ',
    'color: white; background-color: #D33F49',
);

//! Відкладене завантаження (з концепцією Intersection Observer)
console.warn("Відкладене завантаження (з концепцією Intersection Observer)​:");
//? ✴️ Intersection Observer API
//? – це сучасна веб-технологія JavaScript,
//? яка дозволяє асинхронно відстежувати
//? перетинання (входження/вихід) елемента (Target)
//? з видимої області (Root -> viewport) 
//? або іншого батьківського елемента-контейнера.
//? ✳️

const target = document.getElementById("target");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Елемент видно!");
        } else {
            console.log("Елемент пішов із зони видимості...");
        }
    });
}, {
    threshold: 0.5 //todo: викликається, коли 50% об'єкта видно
});

observer.observe(target);




//! Throttle (обмежувач частоти)
// console.warn(`Throttle​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/throttle.png"}`);
//? ❗️❗️❗️ 

//? 📍 Використання Throttle:
//? 🔸 Обробка подій прокручування.
//? 🔸 Відстеження переміщення миші.
//? 🔸 Обмеження частоти натискань.

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("-----------------------------------------------------------------");