console.log('js loaded')

// Zadanie 1:
// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak.
// Następnie wywołaj tą funkcję i odwróć wspak stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
console.log('-------------------------------')
console.log('zadanie 1:')

let str = "Akademia108"


const reverseStr = str => str.split('').reverse().join('')


let rev = reverseStr(str)
console.log(rev)

// Zadanie #51065: 2-sortuj-litery-stringa
// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.
// Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
console.log('-------------------------------')
console.log('zadanie 2:')

const sortoStrz = str => 
    str.split('').filter(el => isNaN(el)).sort()
let srt = sortoStrz(str).join('')
console.log(srt)


// Zadanie #51066: 3-suma-iloczyn
// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. 
// Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
console.log('-------------------------------')
console.log('zadanie 3:')

let digitArr = [1, 2, 3, 4, 5, 6]

const sumAndMultiple = digiArr => {
    let sum = 0
    let multip = 1
    digiArr.forEach(element => {
        sum += element
        multip *= element
    })
    console.log(`Suma tablicy to ${sum}`)
    console.log(`iloczyn tablicy to ${multip}`)
}
sumAndMultiple(digitArr)

// Zadanie #51067: 4-suma-kwadratow
// Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja 
// przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.
console.log('-------------------------------')
console.log('zadanie 4:')


let digiArr2 = [0,1,2,3,4,5]

const quoterSum = digiArr2 => {
    let qsum = 0
    digiArr2.forEach(element => qsum += Math.pow(element,2)
    )
    console.log(`Suma kwadratów tablicy wynosi: ${qsum}`)
}
quoterSum(digiArr2)


// Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli.

// Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.
console.log('-------------------------------')
console.log('zadanie 5:')

const fibbonaci = n =>{
    for (let n = 1 ; n > 500; n*n) {
        console.log(n)
    }
}

fibbonaci()


// Pobierz do zmiennej jsonPracownicy poniższy obiekt:

// {

//     "pracownicy":[

//         {"firstName": "Krystian", "lastName": "Dziopa"}, 

//         {"firstName": "Anna", "lastName": "Szapiel"},

//         {"firstName": "Piotr", "lastName": "Żmuda"}

//     ]

// }

// Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj 
// po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.
console.log('-------------------------------')
console.log('zadanie 6:')

let pracownicy = [

        {"firstName": "Krystian", "lastName": "Dziopa"}, 

        {"firstName": "Anna", "lastName": "Szapiel"},

        {"firstName": "Piotr", "lastName": "Żmuda"}

    ]

console.log(pracownicy)

pracownicy.forEach((element, index) => {
    console.log(`Indeks to: ${index}, cały element to: ${element}, a pierwsze imię to ${element.firstName}`) // ciekawe, ze w linii 115 element jest zupełnie inaczej wyświetlony ni w 116. Dlatego tak się dzieje? Bo pierszy jest częścią stringa?
    console.log(element)
})


// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, 
//ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.
// Na samym końcu wyświetl w konsoli ilość przeczytanych książek
console.log('-------------------------------')
console.log('zadanie 7:')

// part 1

class Ksiazka {
    constructor(title, author, isReaded) {
      this.title = title;
      this.author = author;
      this.isReaded = isReaded;
    }
  
    bookDescription() {
      const isReadedDesc = this.isReaded ? "została przeczytana" : "nie została przeczytana";
      console.log(`Książka ma tytuł "${this.title}", autorem jest ${this.author} i ${isReadedDesc}.`);
    }
  }

  // part 2

  const ksiazka1 = new Ksiazka("Potop", "Sienkiewicz", false);
  const ksiazka2 = new Ksiazka("Wiedźmin", "Sapkowski", false);
  const ksiazka3 = new Ksiazka("Lalka", "Prus", true);

  let arrBooks = []

  arrBooks.push(ksiazka1,ksiazka2,ksiazka3)
  let readedFinal = 0

  // part 3
  
let coutReaded = arrBooks => {
    arrBooks.forEach(book => {
        if (book.isReaded) {
            console.log(`${book.title} została przeczytana`)
            readedFinal += 1}
            else {
                console.log(`${book.title} nie została przeczytana`);
            }
    console.log(book.bookDescription())
    console.log('---------')
        })
        console.log(`łączenie przeczytano ${readedFinal}`)
    }
console.log(coutReaded(arrBooks))



// Zaimplementuj funkcję, która sortuje tablicę przez bąbelkowanie.
// Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną tablicę.
// Wywołaj funkcję z tablicą [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]. Wynik jej działania wyświetl w konsoli.
// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - znajdź w internecie opis działania sortowania bąbelkowego
// - zastosuj pętlę w pętli :)
console.log('-------------------------------')
console.log('zadanie 8:')


let digiArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]


const sortArray = arr => {
    let n = arr.length;
    for (i=0; i<n; i++) {
        console.log(i)
    }

}


console.log(sortArray(digiArray))

console.log('-------------------------------')
console.log('zadanie 9:')

// ES5

function iloczyn(num1, num2, num3) {
    let result = num1 * num2 * num3
    return result
}

let wynikIloczynu = iloczyn(2,3,4)

console.log(wynikIloczynu)

// ES6

const iloczyn2 = (num1, num2, num3) => num1 * num2 * num3

let wynikIloczynu2 = iloczyn2(2,3,4)

console.log(wynikIloczynu2)