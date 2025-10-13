console.log('js loaded')

// Zadanie 1:
// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak.
// Następnie wywołaj tą funkcję i odwróć wspak stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

console.log('zadanie 1:')

let akademia = "Akademia108"

function reverse(aka){
    return aka.split('').reverse().join('')
}

let rev = reverse(akademia)
console.log(rev)

// Zadanie #51065: 2-sortuj-litery-stringa
// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.
// Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
console.log('zadanie 2:')

function sorto(param){
    return  param.split('').filter(el => isNaN(el)).sort()
}

let srt = sorto(akademia)
console.log(srt)

// Zadanie #51066: 3-suma-iloczyn
// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. 
// Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
console.log('zadanie 3:')

let arr = [1, 2, 3, 4, 5, 6]

function zadanie3(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element

    });
    console.log(`Suma tablicy to ${sum}`)

    let ilo = 1
    arr.forEach(element => {
        ilo *= element
    }) 
    console.log(`iloczyn tablicy to ${ilo}`)
}
zadanie3(arr)