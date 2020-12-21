console.log("My Collectibles webpage is connected!");

/* -------------------------------------------------------------------------- 
- Learn about local storage
- Click a card
    - Storage.getItem() = get the card I clicked on
    - Storage.setItem() = set the card in my collectibles page;
-------------------------------------------------------------------------- */
let clickMe = document.querySelector(".click");
let cardName = document.querySelector(".card-name");

let collectiblesArray = [];
let cardObjArr = [];

clickMe.addEventListener("click", (event) => {
    event.stopPropagation();
    let cardObject = {
        image: localStorage.getItem("image"),
        name: localStorage.getItem("name"),
        species: localStorage.getItem("species"),
        status: localStorage.getItem("status"),
        type: localStorage.getItem("type"),
        location: localStorage.getItem("location"),
        origin: localStorage.getItem("origin"),
        episodes: Number(localStorage.getItem("episodes"))
    };

    cardObjArr.push(cardObject);
    collectiblesArray = [... new Set(cardObjArr)];
    console.log(collectiblesArray);
});


localStorage.clear();







/* ------------------------------------------------------------------------------------------------ 

- If the card name element exists 


// if(document.body.contains(cardName)) {
//     cardName.addEventListener("click", (event) => {
//         event.stopPropagation();
//         let myName = localStorage.getItem('name');
//         console.log(myName);
//     });
//     console.log(true);
// } else {
//     console.log(false);
// }

------------------------------------------------------------------------------------------------- */




