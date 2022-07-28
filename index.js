
//! 1.initialize the count as 0
let count = 0;
//! 2.Create variable for count element a
let countEL = document.getElementById("count-el");

//! 4.listen for clicks on INCREMENT button
//! 5.increment the count variable when the button is clicked
//! 6.change the count-el in the HTML to reflect the new count
function increment() {
  count += 1;
  countEL.innerText = count;
}

//! 7.Create a function, save(), which logs out the count when it's called
function save() {
  console.log('The count is ' + count);
}

//! 8.Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById('welcome-el');

//! 9.Create two variables (name & greeting) that contains your name
//! 10.and the greeting we want to render on the page
let screenName = 'KC';
let screenGreeting = 'Welcome, ';

//! 11.Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = screenGreeting + screenName;


//! 12.Add an emoji to the end! 👋
// welcomeEl.innerText = welcomeEl.innerText + "👋";
//* Using the += to concatenate
welcomeEl.innerText += "👋";



//! 13. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");


function save() {
    //! 14. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + " - ";
    //! 14. Render the variable in the saveEl using innerText
    //! NB: Make sure to not delete the existing content of the paragraph
  saveEl.textContent += countStr;
  //! 15. Reset the count to zero;
  count = 0;
  countEL.innerText = count;
  // console.log('Save Function ' + count);
}



//* Plaground for this exercise
let username = 'KC';

//todo Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have three new notifications";
// console.log(message + ", " +username + "!");

//todo Create a variable, messageToUser, that contains the message we have logged
let messageToUser = message + ", " +username + "!";
// console.log(messageToUser);


//todo Create two variables, name and greeting. The name variable should store your name,
//todo and the greeting should store e.g. "Hi, my name is "

let myName = 'KC';
let greeting = 'Hi, my name is ';

//todo Create a third variable, myGreeting, that contatenates the two strings
//todo Log myGreeting to the console
let myGreeting = greeting + myName;
// console.log(myGreeting);
