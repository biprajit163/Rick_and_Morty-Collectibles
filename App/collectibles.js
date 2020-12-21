console.log("My Collectibles webpage is connected!");


let clear = document.querySelector(".clear");


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


clear.addEventListener("click", () => {
    localStorage.clear();
    console.log(localStorage);
    myCollection = [];
    console.log(myCollection);
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






