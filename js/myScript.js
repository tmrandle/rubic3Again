var yourName;
var x = 10;
var y = 30;
var sum = x + y;
var guess;
var guessSum;
var date = new Date();
var weekDate = date.getDay();
var navBar;
var navList;
var newLink;
var newAnchor;
var newLinkText;
var liTag;
var liLinks;
var testMessage;
var messageText1;
var messageText2;
var footer;


//working with getElementById element in an variable named navBar
navBar = document.getElementById("navBar");
console.log(navBar.childNodes.length);
navBar.setAttribute("align", "center");

//creates a new li and anchor element and text node and appends them to parents
navList = document.getElementById("navList");
newLink = document.createElement("li");
newAnchor = document.createElement("a");
newLinkText = document.createTextNode("New Info");
navList.appendChild(newLink);
newLink.appendChild(newAnchor);
newAnchor.appendChild(newLinkText);

liTag = document.getElementsByTagName("li");
console.log("Number of li links in navBar " + liTag.length); 

//working with getElementsByTagName
liLinks = navBar.getElementsByTagName("a");
console.log("Text of li link index 0 " + liLinks[0].text);
for (let i = 0; i < liLinks.length; i++){
liLinks[i].setAttribute("style", "color: blue");
}


navList.addEventListener("mouseover", function(event){
    //highlights the mouseover target red on mouseover
    event.target.style.color = "red";
    //reset the color after a timeout of 700
    setTimeout(function(){
        event.target.style.color ="blue";
    }, 700);
},false);


//prompting for your name input
yourName = prompt("What is your Name?");
console.log(yourName);

if (yourName === null) {
    alert("You haven't entered a name.");
}
else if (yourName === ""){
    alert("You haven't entered a name.");
}
else {
    document.getElementById('welcome').innerHTML=("Hello, " + yourName + " .");
}

 
//new switch statment used different statement for weekend/weekdays
switch (weekDate) {
    case 0,6 :
        document.getElementById("dayPara").innerHTML = ("Hope you are enjoying your weekend."); 
        console.log("It's the weekend.");
    break;
    default:
        document.getElementById("dayPara").innerHTML = ("Great to see you on this weekday.");
        console.log("It's a weekday.");
}



/*The prompt response is stored as a string value and can't be used for math equations.  It returns the value NaN. Unless it is changed by using parseInt --also found that I can use +prompt to change to an integer*/
guess = prompt("For a better experience, please enter a number.");
guess = parseInt(guess);
console.log(guess);

function addNumbers (a, b){
    var sumTotal = a + b;
    return sumTotal;
}

function displayAnswer (a, b){
    document.getElementById('guessSum').innerHTML = ("The sum of your number, " + guess + " , plus 10 is " + guessSum + " .");
}

if (isNaN(guess)){
    alert("That is not a number.");
    guess = prompt("Please enter a number.");
    guess = parseInt(guess);
    console.log(guess);
}
else{
    guessSum = guess + x;
    document.getElementById('guessSum').innerHTML = ("The sum of your number, " + guess + " , plus 10 is " + guessSum + " .");
}

//This section gets ElementByID-footer, creates a p element, creates at text node, and appends child to footer
//uses the getElementByID, createElement, createTextNode, and appendChild
footer = document.getElementById("footer");
console.log(footer);
testMessage = document.createElement("p");
footer.appendChild(testMessage);
if (guess == 7){
    messageText1 = document.createTextNode("Wow! Seven is my favorite number.");
    testMessage.appendChild(messageText1); 
}else{    
    messageText2 = document.createTextNode("I'm going to guess that the number you entered is... " + guess + " .");
    testMessage.appendChild(messageText2);
}

//this displays the date on the page in the p with id="time"
document.getElementById("time").innerHTML = "Today is " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();



/********************************************Previous Version Code****************************/

