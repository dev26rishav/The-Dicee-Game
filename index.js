let randomNumber1 = Math.floor(Math.random()*6)+1;
let imagesource = "dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);


let randomNumber2 = Math.floor(Math.random()*6)+1;
let imagesource2 = "dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "Match Tied";
}
