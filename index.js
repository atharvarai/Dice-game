var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomNo2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/" + "dice" + randomNo1 + ".png";
var randomImage2 = "images/" + "dice" + randomNo2 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

if (randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else if (randomNo1 < randomNo2) {
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw !";
}
