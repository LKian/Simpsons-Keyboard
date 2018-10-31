console.log("Hit it!");

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;       // If there's no audio, returns nothing aka stops the function
    audio.currentTime = 0;    // This resets audio back to 0
    audio.play();
    key.classList.add('highlight');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return // Skip it if not transform
    this.classList.remove('highlight');
}

const keyboard = document.querySelectorAll('.key');  //look among entire keyboard
keyboard.forEach(key => key.addEventListener('transitionend', removeTransition))
  
window.addEventListener('keydown', playAudio) // Fx since it's reusable
//prints key code in console as each key is pressed
// window.addEventListener('keydown', function(e) {
// 	console.log(e.keyCode); 
// });