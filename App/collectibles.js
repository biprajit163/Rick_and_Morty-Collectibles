console.log("My Collectibles webpage is connected!");


// let clickMe = document.querySelector(".click");
// let cardName = document.querySelector(".card-name");


console.log(localStorage)
var collection = JSON.parse(localStorage.collection);
console.log(collection)


// clickMe.addEventListener("click", (event) => {
//     event.stopPropagation();
//     let cardObject = {
//         image: localStorage.getItem("image"),
//         name: localStorage.getItem("name"),
//         species: localStorage.getItem("species"),
//         status: localStorage.getItem("status"),
//         type: localStorage.getItem("type"),
//         location: localStorage.getItem("location"),
//         origin: localStorage.getItem("origin"),
//         episodes: Number(localStorage.getItem("episodes"))
//     };
// });


localStorage.clear();






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






