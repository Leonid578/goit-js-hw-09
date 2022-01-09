const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector ('body');
let timerId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  startBtn.addEventListener('click', onStartClick);
  stopBtn.addEventListener('click', onStopClick);

  function onStartClick(){
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
      }, 1000); 
      startBtn.disabled = 'disabled';
      stopBtn.disabled = '';
      console.log('start')
  }

  function onStopClick(){
    startBtn.disabled = '';
    stopBtn.disabled = 'disabled';
    clearInterval(timerId)
    console.log('stop')
  };