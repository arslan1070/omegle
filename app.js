var welcomeContainer = document.querySelector('.welcome-container');
var secondContainer = document.querySelector('.second-container');

var welcomeButton = document.querySelector('.welcome-btn');

var yesButton = document.querySelector('#yesAnswer');
var noButton = document.querySelector('#noAnswer');

yesButton.addEventListener('click', function(){
    yesButton.style.color = 'green';
    noButton.style.color = 'black';
})
noButton.addEventListener('click', function(){
    noButton.style.color = 'green';
    yesButton.style.color = 'black';
})







welcomeButton.addEventListener('click', function(){
    welcomeContainer.style.display = 'none';
    secondContainer.style.display = 'flex';
})
