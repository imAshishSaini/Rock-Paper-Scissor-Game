var playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
var pcScore = localStorage.getItem('pcScore') ? parseInt(localStorage.getItem('pcScore')) : 0;

function updateScores() {
    document.getElementById('pcscore').innerText = pcScore;
    document.getElementById('yourscore').innerText = playerScore;
    localStorage.setItem('playerScore', playerScore.toString());
    localStorage.setItem('pcScore', pcScore.toString());
}

function show() {
    document.getElementById('game-rules-box').style.display = "block";
}

function hide() {
    document.getElementById('game-rules-box').style.display = "none";
}

function game(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const pcChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === pcChoice) {
        window.location.href = 'tieGame.html';
    } else if ((playerChoice === 'rock' && pcChoice === 'scissors') ||
        (playerChoice === 'paper' && pcChoice === 'rock') ||
        (playerChoice === 'scissors' && pcChoice === 'paper')) {
        playerScore++;
        updateScores();
        window.location.href = 'playerwin.html';
    } else {
        pcScore++;
        updateScores();
        window.location.href = 'pcwin.html';
    }
    document.querySelector('#player .icon.${playerChoice}').style.display = "block";
    document.querySelector('#pc .icon.${pcChoice}').style.display = "block";
}

function winning() {
    window.location.href = 'celebrate.html';
}

function navigateToIndex() {
    window.location.href = 'index.html';
}
updateScores();
