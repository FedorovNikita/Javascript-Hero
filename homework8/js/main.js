// Timer
const buttons = document.querySelectorAll('[data-time');
const stop = document.querySelector('.stop');
const form = document.querySelector('#custom');

const timer = (function() {

    let countdown;
    let timerDisplay;
    let endTime;
    let alarmSound;

    // принимаем стартовые параметры
    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);
        
        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound);
        }

        return this;
    }

    // принимает время в секундах
    function start(seconds) {
        if (!timerDisplay || !endTime) return console.log('Please, init module first');
        if (!seconds || typeof seconds !== 'number') return console.log('Please, provide seconds');

        // сбрасываем таймер, чтобы не было глюков, когда нажали на несколько
        clearInterval(countdown);

        if (alarmSound) {
            // ставим музыку на паузу и обнуляем начало проигрывания, для следующих будильников, если мелодия длинная - актуально
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }

        // текущее время
        const now = Date.now();
        // время окончания
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            
            if (secondsLeft < 0) {
                clearInterval(countdown);
                playSound();
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    // приводим время в нужную нам форму 
    function displayTimeLeft(seconds) {
        const days = Math.floor(seconds  / 60 / 60 / 24);
        const hours = Math.floor(seconds / 60 / 60 % 24);
        const minutes = Math.floor(seconds / 60 % 60);
        const reminderSeconds = seconds % 60;
        const display = `${days ? days + ' день ' : ' '}${hours ? hours + ':' : ' '}${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;

        document.title = display;
        timerDisplay.textContent = display;
    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();
        const day = end.getDate();
        const month = end.getMonth();
        let newMonth = '';
        switch(month) {
            case 0: newMonth = 'января'; break;
            case 1: newMonth = 'февраля'; break;
            case 2: newMonth = 'марта'; break;
            case 3: newMonth = 'апреля'; break;
            case 4: newMonth = 'мая'; break;
            case 5: newMonth = 'июня'; break;
            case 6: newMonth = 'июля'; break;
            case 7: newMonth = 'августа'; break;
            case 8: newMonth = 'сентября'; break;
            case 9: newMonth = 'октября'; break;
            case 10: newMonth = 'ноября'; break;
            case 11: newMonth = 'декабря'; break;
        }

        endTime.textContent = `Be back at ${day} ${newMonth} ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function stop() {
        clearInterval(countdown);
    }

    function playSound() {
        alarmSound.play();
        return this;
    }

    return {
        init,
        start,
        stop,
    }

}());

// init timer
timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/message_sound.mp3'
}).start(86460);

// start timer by click
function startTimer(e) {
    const seconds = parseInt(this.dataset.time);
    timer.start(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
stop.addEventListener('click', timer.stop);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let inp = document.querySelector('input');
    timer.start(+inp.value * 60);
});