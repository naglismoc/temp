/*
V Sukurkite Funkciją kuri priima int[] tipo kintamąį, prasuka ciklą ir atspausdina kiekvieną skaičių.
V Sukurkite Funkciją kuri priima du int tipo kintamuosius, min ir max reikšmėms nustatyti ir sugeneruoja random int skaičių ir jį gražintų. 
V Sukurkite Funkciją kuri sugeneruotų random int skaičių masyvą ir jį gražintų. Funkcija priima tris int tipo kintamuosius, min, max ir length reikšmėms nustatyti.
V Sukurkite Funkciją kuri panaudotų 6tos užduoties masyvą (priimtų kaip kintamąjį), susumuotų ir gražintų reikšmę. 
V Sukurkite Funkciją kuri priimtų 6tos užduoties masyvą ir gražintų jos skaičių vidurkį (double).
*/

let arr = [5, 65, 9, 783, 5, 8, 7];
printArr(arr);
console.log(rndInt(20, 40));
let rndArr = rndIntArr(5, 10, 20);
printArr(rndArr);
console.log(sumIntArr(rndArr));
console.log(avgNumArr(rndArr));

function printArr(arr) {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] + ", ";

    }
    console.log(res.substring(0, res.length - 2));
}

function rndInt(max, min = 0) {
    return min + Math.round(Math.random() * (max - min));
}

function rndDouble(max, min = 0) {
    return min + Math.random() * (max - min);
}

function rndIntArr(min, max, len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr[i] = rndInt(min, max);
    }
    return arr;
}

function sumIntArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function avgNumArr(arr) {
    return sumIntArr(arr) / arr.length;
}