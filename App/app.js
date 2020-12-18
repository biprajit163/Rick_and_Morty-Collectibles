console.log("app.js is connected!");

const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
const searchBar = document.querySelector(".searchbar-text");
const searchBtn = document.querySelector(".searchbar-button");

let characterName = '';

searchBtn.addEventListener("click", showCards);
searchBar.addEventListener("change", showCards);

// card.addEventListener('mousemove', hoverEffect);

function showCards() {
    characterName = searchBar.value;
    let pages = 1;
    const characterURL = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
    let characterPage = `https://rickandmortyapi.com/api/character/?page=${pages}&name=${characterName}`;     

    
    fetch(characterURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.info["count"]);
        console.log(data["results"]);
        for(let i=0; i < data.results.length; i++) {
            console.log(data.results[i].name);
        }
        

        
        if(cardContainer.hasChildNodes()) {
            while(cardContainer.firstChild) {
                cardContainer.removeChild(cardContainer.lastChild)
            } 
        }


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
}


function hoverEffect(event) {
    let y = event.offsetY - 180;
    let xRotation = y / -360;
    let x = event.offsetX - 180;
    let yRotation = x / 360;
    let brightness = (Math.abs(-360 + x + y) / 360) + 0.5;

    card.style.setProperty(`--x-rotation ${xRotation} rad`);
    card.style.setProperty(`--y-rotation ${yRotation} rad`);
    card.style.setProperty(`--brightness ${brightness}`);
}
