
const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
const searchBar = document.querySelector(".searchbar-text");
const searchBtn = document.querySelector(".searchbar-button");




let characterName = '';

searchBtn.addEventListener("click", showCards);
searchBar.addEventListener("change", showCards);



function showCards() {
    characterName = searchBar.value;
    let characterURL = `https://rickandmortyapi.com/api/character/?name=${characterName}`;     

    
    fetch(characterURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(res => res.json())
    .then(data => {

        let page = Math.ceil(Math.random() * data.info.pages);
        let randPageURL = `https://rickandmortyapi.com/api/character/?name=${characterName}&page=${page}`; 
    
        
        if(cardContainer.hasChildNodes()) {
            while(cardContainer.firstChild) {
                cardContainer.removeChild(cardContainer.lastChild)
            } 
        }


        fetch(randPageURL)
        .then(newRes => newRes.json())
        .then(newData => {

            for(let i=0; i < newData.results.length; i++) {

                let imageURL = newData.results[i].image;
                let episodes = newData.results[i].episode.length;
                let characterId = newData.results[i].id;

                let card = document.createElement("div");
                card.setAttribute("class", "card");

                


                let cardFaceFront = document.createElement("div");
                cardFaceFront.setAttribute("class", "card-face card-face-front");

                let cardFaceBack = document.createElement("div");
                cardFaceBack.setAttribute("class", "card-face card-face-back");
                cardFaceBack.innerText = episodes;




                let cardImage = document.createElement("img");
                cardImage.setAttribute("class", "card-image");
                cardImage.setAttribute("src", `${imageURL}`);
        
                let cardName = document.createElement("div");
                cardName.setAttribute("class", "card-name");
                cardName.setAttribute("data-character-id", `${newData.results[i].id}`);
                cardName.innerText = newData.results[i].name;
        

                let cardInfo = document.createElement("div");
                cardInfo.setAttribute("class", "card-info");
                let species = document.createElement("p");
                species.innerText = `Species: ${newData.results[i].species}`;
                let status = document.createElement("p");
                status.innerText = `Status: ${newData.results[i].status}`;
                
                let type = document.createElement("p");
                if(newData.results[i].type === "") {
                    type.innerText = `Type: unknown`;
                } else {
                    type.innerText = `Type: ${newData.results[i].type}`;
                }

                let location = document.createElement("p");
                location.innerText = `Location: ${newData.results[i].location["name"]}`;
                let origin = document.createElement("p");
                origin.innerText = `Origin: ${newData.results[i].origin["name"]}`;
                

                
                cardInfo.appendChild(species);
                cardInfo.appendChild(status);
                cardInfo.appendChild(type);
                cardInfo.appendChild(location);
                cardInfo.appendChild(origin);

                cardFaceFront.appendChild(cardImage);
                cardFaceFront.appendChild(cardName);
                cardFaceFront.appendChild(cardInfo);


                card.appendChild(cardFaceFront);
                card.appendChild(cardFaceBack);


                cardContainer.appendChild(card);

                card.addEventListener("click", (event) => {
                    event.stopPropagation()

                    card.classList.toggle("is-flipped");
                });

                let collectiblesArr = [];
                cardName.addEventListener("click", (event) => {
                    event.stopPropagation();

                    if(localStorage.getItem("collection")) {
                        collectiblesArr = JSON.parse(localStorage.getItem("collection"));
                        
                        collectiblesArr.push({
                            id: characterId,
                            image: imageURL,
                            name: cardName.innerText,
                            species: species.innerText,
                            status: status.innerText,
                            type: type.innerText,
                            location: location.innerText,
                            origin: origin.innerText,
                            episodes: episodes
                        })
                        

                        localStorage.setItem("collection", JSON.stringify(collectiblesArr));
                        
                    } else {
                        let collectionObjToString = JSON.stringify([{
                            id: characterId,
                            image: imageURL,
                            name: cardName.innerText,
                            species: species.innerText,
                            status: status.innerText,
                            type: type.innerText,
                            location: location.innerText,
                            origin: origin.innerText,
                            episodes: episodes
                        }]);
                        localStorage.setItem("collection", collectionObjToString);
                    }
                    
                    cardName.style.backgroundColor = "#d7da31";
                    cardName.style.color = "#000";
                });
                
            }
        })
        .catch(err => console.log("Something went wrong...", err));

    })
    .catch(err => console.log("Something went wrong...", err));

}



