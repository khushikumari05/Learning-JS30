// function removeTransition(e){
//     if(e.propertyName !== 'transform') return; ye line sare browser me workable ny hota h
//     e.target.classList.remove('playing');
// }

// function playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     console.log('audio',audio);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio)return;

//     key.classList.add('playing');
//     audio.currentTime =0;
//     audio.play();

// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);

function removeTransition(e) {
    if (e.propertyName !== 'transform' && e.propertyName !== 'all') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log('audio', audio);
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    console.log('key', key);

    if (!audio || !key) return; 

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
