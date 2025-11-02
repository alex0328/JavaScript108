console.log('js loaded - module 3')



fetch('https://akademia108.pl/api/ajax/get-random-user.php', {
    method: 'GET',
})
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON)
    })

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'x-api-key': 'reqres-free-v1',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John CustomTwo',
        job: 'Developer'
    })
    })
    .then(data => console.log(data))
    .then(data => JSON.stringify)
