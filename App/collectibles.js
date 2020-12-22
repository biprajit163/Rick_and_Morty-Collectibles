

let clearBtn = document.querySelector(".clear-button");
let cardContainer = document.querySelector("#card-container")


let collection = JSON.parse(localStorage.collection);


let myCollection = collection.reduce((acc, current) => {
    let duplicate = acc.find(obj => {
        return obj.id === current.id; 
    });

    if(!duplicate) {
        return acc.concat([current]);
    } else {
        return acc;
    }
}, []);





for(let i=0; i < myCollection.length; i++) {
    
    let card = document.createElement("div")
    card.setAttribute("class", "card");

    let cardFront = document.createElement("div");
    cardFront.setAttribute("class", "card-face card-face-front");
    
    let cardBack = document.createElement("div");
    cardBack.setAttribute("class", "card-face card-face-back");
    cardBack.innerText = myCollection[i].episodes;


    let cardImage = document.createElement("img");
    cardImage.setAttribute("class", "card-image");
    cardImage.setAttribute("src", `${myCollection[i].image}`);
    

    let cardName = document.createElement("div");
    cardName.setAttribute("class", "card-name");
    cardName.setAttribute("data-character-id", `${myCollection[i].id}`);
    cardName.innerText = myCollection[i].name;


    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "card-info");
    let species = document.createElement("p");
    species.innerText = `Species: ${myCollection[i].species}`;
    let status = document.createElement("p");
    status.innerText = `Status: ${myCollection[i].status}`;

    let type = document.createElement("p")
    if(myCollection.type === "") {
        type.innerText = "Type: unkown";
    } else {
        type.innerText = `Type: ${myCollection[i].type}`;
    }

    let location = document.createElement("p");
    location.innerText = `Location: ${myCollection[i].location}`;
    let origin = document.createElement("p");
    origin.innerText = `Origin: ${myCollection[i].origin}`;


    cardInfo.appendChild(species);
    cardInfo.appendChild(status);
    cardInfo.appendChild(type);
    cardInfo.appendChild(location);
    cardInfo.appendChild(origin);

    cardFront.appendChild(cardImage);
    cardFront.appendChild(cardName);
    cardFront.appendChild(cardInfo);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    cardContainer.appendChild(card);

    card.addEventListener("click", (event) => {
        event.stopPropagation()

        card.classList.toggle("is-flipped");
    });


    cardName.addEventListener("click", (event) => {
        event.stopPropagation();

        let counter = 0;
        let index = 0;


        card.remove();

        myCollection.forEach(item => {
            counter++;
            if(Number(event.target.dataset.characterId) === item.id) {
                index = counter - 1;
            }
        })

        myCollection.splice(index, 1);


        localStorage.setItem("collection", JSON.stringify(myCollection));
    })
}




clearBtn.addEventListener("click", () => {
    localStorage.clear();
    myCollection = [];
    window.location.reload();
});










