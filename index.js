// 1-savol Arifmetik operatorla

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:

// let besh = 5;
// let ikki = 2;
// let remainder = besh % ikki;
// alert("5 ni 2 ga bo'lgandan keyin qoldiq: " + remainder);


// 2-savol  Math metodlari

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:

// let random = Math.floor(Math.random() * 10) + 1;
// alert("1 dan 10 gacha tasodifiy raqam: " + random);


// 3-savol Math metodlari

// сделать число 12.510 целым

// ответ должен выйти 12

// javob:

// let son = 12.510;
// let butunSoni = Math.floor(son);
// alert("Butun son: " + butunSoni);


// 4-savol function

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:

// function harfSoniTop(uzunlik) {
//     return uzunlik.replace(/\s/g, '').length;
// }

// let soz = "MARS IT SCHOOL";
// let harfSoni = harfSoniTop(soz);
// alert("So'zda " + harfSoni + " ta harf mavjud.");


// 5-savol for loop

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:

// function chiqarSoz(marta) {
//     for (var i = 0; i < marta; i++) {
//         console.log("MARS IT SCHOOL");
//     }
// }

// chiqarSoz(10);


// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// С помощью этого массива вывести в консоль свое имя

// Javob:

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// console.log(harflar[7] + harflar[17] + harflar[11] + harflar[13] + harflar[7] + harflar[10]);


// 7-savol if else


// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:

// let yosh = prompt("Yoshingizni kiriting:");

// if (yosh >= 18) {
//     console.log("siz 18 yoshdan oshgansiz");
// } else if (yosh < 18) {
//     console.log("Siz 18 yoshdan kichiksiz");
// } else {
//     console.log("🎉🎉 18 yoshda bo'lganingiz uchun harbiy komissar sizni kutmoqda.");
// }


// 8-savol String metodlari vs Array metodlari

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:

// let ism = prompt("Ismingizni kiriting:");
// let teskari = "";

// for (var i = ism.length - 1; i >= 0; i--) {
//     teskari += ism[i];
// }

// console.log(teskari);


// 9-savol Men o'z vazifamni bajaraman :)

// из 1 до 100 найти простое числа с помощью console.log

// javob:

// function tubSonmi(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;
// }

// function oraliqdagiTubSonlarniTop(start, end) {
//     const tubSonlar = [];
//     for (let i = start; i <= end; i++) {
//         if (tubSonmi(i)) {
//             tubSonlar.push(i);
//         }
//     }
//     return tubSonlar;
// }

// const tubSonlar = oraliqdagiTubSonlarniTop(1, 100);
// console.log(tubSonlar);


// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// найти и вывести четные массивы в консоль, с помощью методов


// Javob:

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Juft sonlar:");

// for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] % 2 === 0) {
//         console.log(sonlar[i]);
//     }
// }