console.log("My Collectibles webpage is connected!");


let clear = document.querySelector(".clear");
let cardContainer = document.querySelector("#card-container")


console.log(localStorage)
let collection = JSON.parse(localStorage.collection);
console.log(collection)

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

console.log(myCollection);



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

    cardContainer.appendChild(card);

}




clear.addEventListener("click", () => {
    localStorage.clear();
    console.log(localStorage);
    myCollection = [];
    console.log(myCollection);
    window.location.reload();
});







/* --------------------------------------------------------------------------------------------------

// https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
// author: Marina Mosti
// author: Natalia Tepluhina

let cardObjArr = [];

const collectibles = cardObjArr.reduce((accumulator, currentVal) => {
    const duplicate = accumulator.find(obj => {
        return obj.name === currentVal.name
    });

    if(!duplicate) {
        return accumulator.concat([currentVal]);
    } else {
        return accumulator;
    }
}, []);

console.log(collectibles);

---------------------------------------------------------------------------------------------------- */






