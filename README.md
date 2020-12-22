# Rick and Morty Collectibles
A card collection game that uses the Rick and Morty Api (https://rickandmortyapi.com/) to get all existing Rick and Morty character, put them in a card like format and allows the user to collect their favorite card using local storage.

Here is the deployed verison: https://biprajit163.github.io/Rick_and_Morty-Collectibles/

#### Home page
![image](https://user-images.githubusercontent.com/14338321/102932738-d5dc2d80-446e-11eb-87a8-0c177374a3f1.png)

#### Collection Page
![image](https://user-images.githubusercontent.com/14338321/102933653-a0d0da80-4470-11eb-9ac9-7cff35e4a6a0.png)

## Technologies used
- Javascript/HTML5/CSS
- Rick and Morty API: https://rickandmortyapi.com/


## Wire Frame
![image](https://user-images.githubusercontent.com/14338321/102933560-7252ff80-4470-11eb-8201-01481e7b6e62.png)


## User Stories
#### MVP
- As a user, I want to search any Rick and Morty character based on their name through the search bar.
- As a user, if I don't know what character I am looking for I will click the "Rick" search button and it will display a page of random characters.
- As a user, I want to click on the card and it will do a flip animation to reveal the number of episodes the character appeared in.
- As a user, when I hover over the cards it should have an expand animation with a light background, so it can be appealing to the eye and the text on the card can be more visible.
- As a user, I want to be able to scroll on the card details so I can see all the character information

#### Stretch Goal
- As a user, I want to click on the card name after I have searched it up to add it to my collection of cards.
- As a user, I do not want duplicates in my collection.
- As a user, I can click the card name from my collection to remove it from the "My Collectibles" page.
- As a user, when I click a name from my colleciton, the specefic card I clicked should get removed and not another card that has the same name but is a different version.


## Major Hurdles
- When search for a new character all old characters should be cleared from the page.
    - I overcame this by using a while() loop. When I searched for a new character I looped through the parent element of "card-container" and removed the last child node while a last child node existed.
- Retreive all possible characters and not just the characters available on page one of the API
    - To solve this I did a nested fetch() and retreived all the pages of the searched character using a random number generator from 1 to the last available page of that searched character.
- local storage
    - I had to learn how to use local storage first, then I set all the vard variables as an object using JSON.stringify() and I got them back in my collection page using JSON.parse()
- Remove current card in my collection when I click the card name, and not other cards that have a similar name.
    - I overcame this by using card Id. I set a data type attribute to each card class and gave it the card Id. So when I click the card I want to remove it would remove that unique card.


## Installation
To install this project fork this repository and use git clone to get started. 

## Credit
- Card flip animation: I used Tyler Pots Youtube video and github repo to learn how to do the card flip effect.
    - Youtube: https://www.youtube.com/watch?v=QGVXmoZWZuw&t=467s&ab_channel=TylerPotts 
    - GitHub: https://github.com/TylerPottsDev/card-flip

- Remove duplicate cards from my collection: I read this blog by Marina Mosti on how to remove duplicate objects from an array. I was able to use this code to make sure the user can not add duplicate cards to their collection.
    - link: https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
