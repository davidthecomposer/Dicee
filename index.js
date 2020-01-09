// alert("working!")

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = `images/dice${randomNumber1}.png`;
let randomDiceImage2 = `images/dice${randomNumber2}.png`;

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

image1.setAttribute('src', randomDiceImage);
image2.setAttribute('src', randomDiceImage2);
let fireEmoji = '🔥';
// let winningMessage1 = document.querySelector('h1').textContent = 'Player 1 Wins!';
// let winningMessage2 = document.querySelector('h1').textContent = 'Player 2 Wins!';
// let drawMessage = document.querySelector('h1').textContent = 'Draw';

randomNumber1 > randomNumber2 ? document.querySelector('h1').textContent = fireEmoji + 'Player 1 Wins!' : randomNumber1 === randomNumber2 ? document.querySelector('h1').textContent = 'Draw' : document.querySelector('h1').textContent = 'Player 2 Wins!' + fireEmoji;


// let dice1 = document.querySelector(".img1");
// let dice2 = document.querySelector(".img2");
//
//
//
//   switch (randomNumber1) {
//     case 0:
//       randomNumber1 === 1;
//       dice1.setAttribute('src', 'images/dice1.png');
//       break;
//     case 1:
//       randomNumber1 === 2;
//       dice1.setAttribute('src', "images/dice2.png");
//       break;
//     case 2:
//       randomNumber1 === 3;
//      dice1.setAttribute('src', 'images/dice3.png');
//       break;
//     case 3:
//       randomNumber1 === 4;
//       dice1.setAttribute('src', "images/dice4.png");
//       break;
//     case 4:
//       randomNumber1 === 5;
//       dice1.setAttribute('src', "images/dice5.png");
//       break;
//     case 5:
//       randomNumber1 === 6;
//       dice1.setAttribute('src', "images/dice6.png");
//       break;
//   }
//
//   switch (randomNumber2) {
//     case 0:
//       randomNumber1 === 1;
//       dice2.setAttribute('src', "images/dice1.png");
//         break;
//     case 1:
//       randomNumber1 === 2;
//       dice2.setAttribute('src', "images/dice2.png");
//         break;
//     case 2:
//       randomNumber1 === 3;
//       dice2.setAttribute('src', "images/dice3.png");
//         break;
//     case 3:
//       randomNumber1 === 4;
//       dice2.setAttribute('src', "images/dice4.png");
//       break;
//     case 4:
//       randomNumber1 === 5;
//       dice2.setAttribute('src', "images/dice5.png");
//       break;
//     case 5:
//       randomNumber1 === 6;
//       dice2.setAttribute('src', "images/dice6.png");
//       break;
//   }
