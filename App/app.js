console.log("app.js is connected!");

const characterURL = "https://rickandmortyapi.com/api/character";


fetch(characterURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json' 
    }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Something went wrong...", err));


