console.log("app.js is connected!");

const cardContainer = document.querySelector("#card-container");

let characterName = "rick";
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
        let imageURL = data.results[i].image;
        

        let card = document.createElement("div");
        card.setAttribute("class", "card");
        
        let cardImage = document.createElement("img");
        cardImage.setAttribute("class", "card-image");
        cardImage.setAttribute("src", `${imageURL}`);

        let cardName = document.createElement("p");
        cardName.setAttribute("class", `card-name`);
        cardName.innerText = data.results[i].name;

        /*
        let cardInfo = document.createElement("p");
        cardInfo.setAttribute("class", "card-info");
        */

        card.appendChild(cardImage);
        card.appendChild(cardName);
        // card.appendChild(cardInfo);
        cardContainer.appendChild(card);
    }
})
.catch(err => console.log("Something went wrong...", err));


