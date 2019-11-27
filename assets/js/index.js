console.log("Welcome to Springfield!");

function playAudio(e) {
    // find the audio src with selected audio file
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // If there's no audio, return nothing aka stops the function
    if (!audio) return;

    // Resets audio back to 0
    audio.currentTime = 0;
    audio.play();
    key.classList.add('highlight');
}

function removeTransition(e) {
    // Skip it if not transform
    if (e.propertyName !== 'transform') return
    this.classList.remove('highlight');
}

const keyboard = document.querySelectorAll('.key');  // look among entire keyboard
keyboard.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playAudio) // Fx since it's reusable
//prints key code in console as each key is pressed
window.addEventListener('keydown', function(e) {
	console.log(e);
	console.log(e.key, e.keyCode);
});
