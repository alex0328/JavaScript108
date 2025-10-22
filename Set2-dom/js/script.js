console.log('js loaded')

// Zadanie 1
// Wyświetl nazwy miast w postaci listy numerowanej.
// Miasta zostały umieszczone w tablicy poniżej.
// Znacznik listy i elementów listy stwórz w JavaScript.
// Do każdego elementu listy dodaj klasę "city".
// Następnie za pomocą odpowiednich metod wyświetl listę na stronie.


console.log("----------------------------------------------")
console.log("Zadanie 1")

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let task1 = document.getElementById('task1')
const fragment = document.createDocumentFragment();
let ul = document.createElement("ul")
task1.appendChild(ul)
cities.forEach(city => {
    let liInUl = ul.appendChild(document.createElement("li"))
    liInUl.textContent = city
    fragment.appendChild(liInUl)
})

ul.appendChild(fragment)

// Zadanie 2
// Dodaj poniższą listę w znaczniku body:

//     <ul id="items">
//         <li class="item">Item 1</li>
//         <li class="item">Item 2</li>
//         <li class="item">Item 3</li>
//     </ul>
//     <button>Add item</button>
// Napisz skrypt, który po kliknięciu w przycisk doda kolejny element do listy z nazwą zakończoną liczbą kolejnego elementu - 
// np. Item 4, Item 5, Item 6 itd.
// Każdemu z elementów listy ustaw klasę "item"
// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - napisz funkcję obsługującą klik przycisku button
// - musisz pobrać obecną ilość item'ów w liście, aby dodać numer kolejnego
// - musisz stworzyć w JavaScript nowy element w HTML i dodać go do listy używając odpowiedniej do tego metody w JS :)



let buttons = document.querySelectorAll("button");

buttons.forEach((but, index) => {
    but.id = "buttonNumber"+index+1
})

let btn = document.getElementById("buttonNumber01")
btn.onclick = function() {
    let items = document.getElementById("items").children;
    let nextItemNumber = 0
    for (i=0 ; i<items.length; i++) {
        nextItemNumber = i+2
    }
            let newItem = document.createElement("li")
            newItem.textContent = "Item "+ (nextItemNumber)
            document.getElementById("items").appendChild(newItem)
}



// Zadanie 3










