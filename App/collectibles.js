console.log("My Collectibles webpage is connected!");

/* -------------------------------------------------------------------------- 
- Learn about local storage
- Click a card
    - Storage.getItem() = get the card I clicked on
    - Storage.setItem() = set the card in my collectibles page;
-------------------------------------------------------------------------- */
let clickMe = document.querySelector(".click");
let cardName = document.querySelector(".card-name");

cardName.addEventListener("click", (event) => {
    event.stopPropagation();
    let myName = localStorage.getItem('name');
    console.log(myName);
})




