let fact = document.getElementById("fact")

const url = "https://api.chucknorris.io/jokes/random"

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
    fact.innerText = data.value
})