console.log("app.js is connected!");

const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
const searchBar = document.querySelector(".searchbar-text");
const searchBtn = document.querySelector(".searchbar-button");

/* -------------------------------------------------------------
    Flip Effect JS
-------------------------------------------------------------- */
// const cardboard = document.querySelector(".cardboard")

// cardboard.addEventListener("click", (event) => {
//     cardboard.classList.toggle('is-flipped');
// });
/* -------------------------------------------------------------
    Flip Effect JS
-------------------------------------------------------------- */




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
        console.log(data.info);

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
            console.log(newData.results);


            for(let i=0; i < newData.results.length; i++) {

                let imageURL = newData.results[i].image;
                
                let card = document.createElement("div");
                card.setAttribute("class", "card");

                


                let cardFaceFront = document.createElement("div");
                cardFaceFront.setAttribute("class", "card-face card-face-front");

                let cardFaceBack = document.createElement("div");
                cardFaceBack.setAttribute("class", "card-face card-face-back");
                cardFaceBack.innerText = "sfhkjsdfjkds";




                let cardImage = document.createElement("img");
                cardImage.setAttribute("class", "card-image");
                cardImage.setAttribute("src", `${imageURL}`);
        
                let cardName = document.createElement("p");
                cardName.setAttribute("class", `card-name`);
                cardName.innerText = newData.results[i].name;
        


                
                cardFaceFront.appendChild(cardImage);
                cardFaceFront.appendChild(cardName);
                // cardFaceBack.appendChild();
                // cardFaceBack.appendChild();


                card.appendChild(cardFaceFront);
                card.appendChild(cardFaceBack);


                cardContainer.appendChild(card);
                card.addEventListener("click", (event) => {
                    event.stopPropagation()

                    card.classList.toggle("is-flipped");
                });
            }
        })
        .catch(err => console.log("Something went wrong...", err));

    })
    .catch(err => console.log("Something went wrong...", err));

}



