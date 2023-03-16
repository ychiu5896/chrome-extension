const foxDiv = document.createElement('div');
foxDiv.setAttribute('id', 'animalSurprise');
foxDiv.style.position = 'fixed';
foxDiv.style.bottom = '0';
foxDiv.style.right = '0';
foxDiv.style.zIndex = '1000';
foxDiv.style.height = '200px';
foxDiv.style.width = '200px';
document.querySelector('body').append(foxDiv);
const score = document.createElement('div');
score.setAttribute('id', 'score');
score.style.position = 'fixed';
score.style.bottom = 0;
score.style.left = 0;
score.style.zIndex = '1001';
score.style.height = '100px';
score.style.width = '200px';
score.style.color = 'black';
score.style.backgroundColor = 'white';
score.style.border = '2px solid black';
score.style.fontSize = '24px';
score.innerHTML = 'Click the Fox!';
document.querySelector('body').append(score);

let foxCount = 0;

let timer = 3000;
let intervalId = changeInterval(timer);
// https://youtu.be/oBhqnJVm_Zc
foxDiv.addEventListener('click', function() {
  clearInterval(intervalId);
    const foxSong = new Audio('fox-song.mp3');
    foxSong.play();

  foxCount++;
  const foxCounter = document.querySelector('#score');
  foxCounter.innerHTML = `Click the Fox!<br>&nbsp&nbsp${foxCount}`;
  timer -= 250;
  changeInterval(timer);
});

const foxImg = document.createElement('img');
foxImg.style.height = '200px';
foxImg.style.width = '200px';
let random;

function changeInterval(time) {
  return setInterval(function() {
    random = Math.floor(Math.random() * 100);
    positionRandom = Math.floor(Math.random() * 100);
    foxDiv.style.bottom = `${random}%`;
    foxDiv.style.right = `${positionRandom}%`;
    foxImg.setAttribute('src',`https://randomfox.ca/images/${random}.jpg`);
    
  }, time);
}

let counter = 0;
setInterval(()=>{
    counter++;
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 15000);

foxDiv.append(foxImg);
