console.log(
    '%c 3.Відкладене завантаження (з концепцією Intersection Observer) ',
    'color: white; background-color: #D33F49',
);

//! Відкладене завантаження (з концепцією Intersection Observer)
console.warn(`Відкладене завантаження (з концепцією Intersection Observer)​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_03/images/observer-concept.gif"}`);
console.warn("Документація Intersection Observer: \n https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver");
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


//! Простий приклад використання Intersection Observer
console.warn("Простий приклад використання Intersection Observer:");
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


//! Поліфіл Intersection Observer
console.warn("Поліфіл Intersection Observer:");
//? ✴️ Хоча Intersection Observer API підтримується
//? всіма останніми версіями сучасних браузерів,
//? слід подбати про поліфілії,
//? щоб він гарантовано працював у всіх актуальних версіях.
//? Поліфем від WICG можна взяти з цього GitHub-репозиторія:
//? https://github.com/w3c/IntersectionObserver/tree/master/polyfill

//? ✴️ Найпростіший спосіб додати Поліфем
//? - це використати polyfill.io:
//? https://polyfill.io/v3/
//? Він завантажує тільки зазначені поліфілії,
//? і тільки тоді, коли браузер вимагає цього.
//? Це допомагає звести вагу сторінки до мінімуму,
//? але дозволяє поліфілу працювати без подальшого налаштування.

//? ✳️ Єдиним недоліком поліфілла є те, 
//? що ви не отримаєте переваг в продуктивності 
//? в старих браузерах, але скрипт буде працювати 
//? і користувач зможе взаємодіяти з веб - сторінкою.
