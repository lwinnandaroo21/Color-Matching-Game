var firstclick = "";
var secondclick = "";
let first="";
let second="";

let card = [
    "red",
    "green",
    "blue",
    "black",
    "teal",
    "tomato",
    "red",
    "green",
    "blue",
    "black",
    "teal",
    "tomato"
]

let randomCardList = [];
let i = 0;
function getRandom() {
    while (i < 12) {
        var a = card[Math.floor(Math.random() * card.length)];
        if (checkTwice(a)) {
            getRandom();
        } else {
            randomCardList.push(a);
            i++;
        }
    }
}

let checkTwice = (value) => {
    var count = 0;
    for (let index = 0; index < randomCardList.length; index++) {
        if (randomCardList[index] == value) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    } else {
        return false;
    }
}

function initialload() {
    getRandom();
    for (let index = 0; index < randomCardList.length; index++) {
        document.getElementsByClassName("card")[index].style.background = randomCardList[index];
    }
}


function clickcard(obj) {

    if (firstclick == "") {
        firstclick = obj.style.background;
        first=document.getElementById(obj.id);
    } else {
        secondclick = obj.style.background;
        second=document.getElementById(obj.id);
        if (firstclick == secondclick && first!=second) {
            second.style.display = "none";
            first.style.display="none";
        }
        firstclick = "";
        secondclick = "";
    }
}






