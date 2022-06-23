var welcomeContainer = document.querySelector('.welcome-container');
var secondContainer = document.querySelector('.second-container');
var thirdContainer = document.querySelector('.third-container')

var welcomeButton = document.querySelector('.welcome-btn');

var yesButton = document.querySelector('#yesAnswer');
var noButton = document.querySelector('#noAnswer');

var casualButton = document.querySelector('#casual');
var adultButton = document.querySelector('#adult');

yesButton.addEventListener('click', function(){
    yesButton.style.color = 'green';
    noButton.style.color = 'black';
    secondContainer.style.display = 'none';
    thirdContainer.style.display = 'flex';
})
noButton.addEventListener('click', function(){
    noButton.style.color = 'green';
    yesButton.style.color = 'black';
    secondContainer.style.display = 'none';
    thirdContainer.style.display = 'flex';
})


casualButton.addEventListener('click', function(){
    casualButton.style.color = 'green';
    adultButton.style.color = 'black';
    thirdContainer.style.display = 'none';
})
adultButton.addEventListener('click', function(){
    adultButton.style.color = 'green';
    casualButton.style.color = 'black';
    thirdContainer.style.display = 'none';
})




welcomeButton.addEventListener('click', function(){
    welcomeContainer.style.display = 'none';
    secondContainer.style.display = 'flex';
})


