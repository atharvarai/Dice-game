// generating random no
var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomNo2 = Math.floor(Math.random() * 6) + 1;

// based on the random generated no, generating the path of a random image
var randomImage1 = "images/" + "dice" + randomNo1 + ".png";
var randomImage2 = "images/" + "dice" + randomNo2 + ".png";

// selecting the player1's image and setting it equal to a random generated image
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);

// selecting the player1's image and setting it equal to a random generated image
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

// dice no of player 1 is more
if (randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
// dice no of player 2 is more
else if (randomNo1 < randomNo2) {
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
// dice no of both players is same
else {
    document.querySelector("h1").innerHTML = "It's a Draw !";
}