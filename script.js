function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
function shineButton(value) {
    var button = document.getElementById(value);
    button.classList.add('shine');

    setTimeout(function() {
        button.classList.remove('shine');
    }, 500);
}
var audio = document.getElementById("background-music");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function setVolume(volume) {
    audio.volume = volume;
}

