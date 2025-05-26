console.log(
    '%c 3.Відкладене завантаження (з концепцією Intersection Observer) ',
    'color: white; background-color: #D33F49',
);

//! Відкладене завантаження (з концепцією Intersection Observer)
console.warn(`Відкладене завантаження (з концепцією Intersection Observer)​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_03/images/observer-concept.gif"}`);
//? ✴️ Intersection Observer API
//? – це сучасна веб-технологія JavaScript,
//? яка дозволяє асинхронно відстежувати
//? перетинання (входження/вихід) елемента (Target)
//? з видимої області (Root -> viewport)
//? або іншого батьківського елемента-контейнера.

//? 📌 Коли необхідно використовувати Intersection Observer:
//?    🔸 потрібно ліниво завантажувати зображення(lazy - loading),
//?    🔸 відстежувати появу секцій на сторінці (наприклад, для анімацій чи навігації),
//?    🔸 реалізувати нескінченну прокручування (infinite scroll),
//?    🔸 відстежувати перегляд реклами або активність користувача.

//? ⚠️ Переваги перед scroll - подіями:
//?    ✅ Більш продуктивно (не викликається на кожен піксель прокручування),
//?    ✅ Не вимагає throttling/debounce,
//?    ✅ Працює асинхронно, не блокує основний потік.
console.log(
    `%c
    IntersectionObserver(callback, options):
    🔸 callback - функція, що викликається при кожному вході/виході елемента в зону видимості.
    🔸 options може містити:
        🔸 root: елемент-контейнер, щодо якого вести спостереження (за умовчанням viewport);
        🔸 threshold: частка видимості елемента (0 - навіть 1px, 1.0 - повністю);
        🔸 rootMargin: відступи навколо root.
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Приклад використання Intersection Observer
console.warn("Приклад використання Intersection Observer:");
const target = document.getElementById("target");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Елемент видно!");
                target.style.background = "lightgreen";
            } else {
                console.log("Елемент пішов із зони видимості...");
                target.style.background = "yellow";
            }
        }
        );
    },
    {
        threshold: 0.5, //todo: викликається, коли 50% об'єкта видно
    }
);

observer.observe(target);

console.log("-----------------------------------------------------------------");