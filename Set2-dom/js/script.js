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
let ol = document.createElement("ol")
task1.appendChild(ol)
cities.forEach(city => {
    let liInOl = ol.appendChild(document.createElement("li"))
    liInOl.textContent = city
    liInOl.className = "city"
    fragment.appendChild(liInOl)
})

ol.appendChild(fragment)

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
    let ultimateId = index+1
    but.id = "buttonNumber"+ultimateId 
})

const btn = document.getElementById("buttonNumber1")
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
// Warsztat
// Stwórz plik index.html z pełną strukturą strony HTML5, a w nim 2 paragrafy oraz przycisk z napisem „Ustaw tło paragrafów”.

// Ustaw nasłuch zdarzenia click dla przycisku i po kliknięciu wywołuj funkcję zwrotną (ang. callback) o nazwie setBackground() (funkcję musisz stworzyć samodzielnie).

// W funkcji setBackground() zmień style paragrafów, ustawiając kolor tła:

// pierwszego paragrafu na czerwony
// drugiego paragrafu na żółty.

//pierwsza wersja

// const btn2 = document.getElementById("buttonNumber2")
// btn2.onclick = (event) => {
//     console.log("-----------------------")
//     let paragraphs = document.getElementById("task3").getElementsByTagName("p")
//     i = 0
//     for (let paragraph of paragraphs) {
//         if (i===0) {
//             paragraph.style.backgroundColor = "red";
//         }
//         else {
//             paragraph.style.backgroundColor = "blue";
//         }
//         i++
//         }
// }

// druga wersja:

const btn2 = document.getElementById("buttonNumber2");
btn2.onclick = () => {
    let paragraphs = document.getElementById("task3").getElementsByTagName("p");
    Array.from(paragraphs).forEach((paragraph, i) => {
        if (i===0) {
            paragraph.style.backgroundColor = "red";
        }
        else {
            paragraph.style.backgroundColor = "blue";
        }
        i++
        })
    }

    // nie oglądałem filmiku z warsztatami, chciałem sam spróbować najpierw. 




// Zadanie 4
// Warsztat
// Stwórz plik index.html z pełną strukturą strony HTML5, a w nim formularz

// <form id="form" action="">
//     <label>Imię: <input type="text" name="fname" value="Krystian"></label>
//     <br /> 
//     <label>Nazwisko: <input type="text" name="lname" value="Dziopa"></label>
//     <br />
//     <input type="submit" value="Submit">
// </form>
// Napisz funkcję, która będzie obsługiwać zdarzenie submit formularza i podepnij ją do elementu formularza jako funkcję zwrotną (ang. callback) obsługującą to zdarzenie.

// Następnie podczas wysyłania formularza:

// Zablokuj jego domyślne działanie (aby formularz się NIE wysyłał)
// Pobierz wartości obydwu pól formularza do zmiennych (czyli z atrybutami name równymi fname i lname)
// Wyświetl pobrane wartości pól formularza w konsoli.


const formServ = () => {
    let form = document.querySelector("form")
    let inp = document.querySelector("form>input")

    console.log(inp)
    inp.addEventListener("click", (event) => {
        event.preventDefault()
        let formValues = document.querySelectorAll("form label input")
        let name = formValues[0].value
        let surname = formValues[1].value
        console.log(`Imię w formularzu to ${name}, a nazwisko to ${surname}`)
    })
}
formServ()


// Zadanie 5

// Stwórz plik index.html z pełną strukturą strony HTML5, a w nim formularz zawierający:

// pole tekstowe Imie i nazwisko
// pole tekstowe Adres e-mail
// checkbox Wszystkie zgody
// checkbox Zgoda marketingowa 1
// checkbox Zgoda marketingowa 2
// Stwórz funkcję validate(), która będzię uruchamiana przed wysłaniem formularza.

// Funkcja validate() ma sprawdzać:

// czy zostało wypełnione pole tekstowe Imie i nazwisko
// czy zostało wypełnione pole tekstowe Adres e-mail
// czy adres email zawiera znak @
// czy został zaznaczony checkbox ze Zgodą marketingową 1
// W przypadku, gdy któreś z powyższych wymagań nie zostało spełnione, skrypt ma informować internautę o tym jako lista z błędami do poprawy.

// Checkbox Wszystkie zgody po zaznaczeniu ma automatycznie zaznaczać pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) i wyłączać możliwość ich odznaczenia.

// Natomiast po odznaczeniu checkbox’a Wszystkie zgody pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) mają zostać także odznaczone i ma zostać włączona możliwość ich osobnego zaznaczania.

// Przykładowy wygląd od lewej:

// pustego formularza
// częściowo wypełnionego formularza z komunikatami walidacji




const firstAgreement = document.querySelector('input[name="firstAgreement"]')
const secondAgreement = document.querySelector('input[name="2ndAgreement"]')
const both = document.querySelector('input[name="bothAgreements"]')

const checkAgreements = () => {
        if (secondAgreement.checked === false || firstAgreement.checked === false) {
            both.checked = false
        } else {
            both.checked = true
        }
    }

    firstAgreement.addEventListener('change', checkAgreements);
    secondAgreement.addEventListener('change', checkAgreements);
    both.addEventListener('change', event => {
        if (both.checked === false) {
            secondAgreement.checked = false
            firstAgreement.checked = false
        } else {
            secondAgreement.checked = true
            firstAgreement.checked = true
        }
        checkAgreements()

    });

const form = document.querySelector('#form2');

const validate = () => {
    const data = new FormData(form);
    let userMessage = []
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    if (!name) {
        userMessage.push("Dej imię")
    } 
    if (!email) {
        userMessage.push('Typie, dej maila');
      } else if (!email.includes('@')) {
        userMessage.push('Typie, dej maila, ale takiego z małpą');
      }
    
      if (!firstAgreement || !firstAgreement.checked) {
        userMessage.push('Typie, zaznacz zgodę na pobranie organów');
      }

    let toDelete = document.querySelectorAll(".mess").forEach(el => el.remove());


    for (j of userMessage) {
        const message = document.createElement('p')
        message.classList.add('mess')
        console.log(message)
        message.innerHTML = j
        form.appendChild(message)
    }
    return true
}



let submit = document.querySelector(".submit")

submit.addEventListener('click', event => {
    event.preventDefault()
    console.log(validate())
})







