console.log("app.js is connected!");

const cardContainer = document.querySelector(".card-container");

let characterName = "rick"
const characterURL = `https://rickandmortyapi.com/api/character/?name=${characterName}`;


fetch(characterURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json' 
    }
})
.then(res => res.json())
.then(data => {
    console.log(data.info);
    console.log(data.results);

    for(let i=0; i < data.results.length; i++) {
        let characterCard = document.createElement("div");
        characterCard.setAttribute("class", "character-card");

        characterCard.innerText = data.results[i].name;
        cardContainer.appendChild(characterCard);
    }
})
.catch(err => console.log("Something went wrong...", err));


