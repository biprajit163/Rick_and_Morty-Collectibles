console.log("My Collectibles webpage is connected!");


let clickMe = document.querySelector(".click");
let cardName = document.querySelector(".card-name");

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

    const collectibles = cardObjArr.reduce((accumulator, currentVal) => {
        // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
        // author: Marina Mosti
        // author: Natalia Tepluhina
        
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
    console.log(localStorage);
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




