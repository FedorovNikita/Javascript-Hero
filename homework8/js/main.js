// Timer
const buttons = document.querySelectorAll('[data-time]');
const form = document.getElementById('custom');
const stopButton = document.querySelector('.stop');
const timer = (function() {
    let countDown,
        timerDisplay,
        endTime,
        alarmSound;
    
    // принимаем стартовые параметры
    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector); 
        
        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound);
        }
    }

    // принимает время в секундах
    function start(seconds) {
        if (!timerDisplay || !endTime) return console.log('Please, init module first.');
        if (!seconds || typeof seconds !== 'number') return timerDisplay.textContent = 'Please, provide seconds.';
        
        // reset timer
        clearInterval(countDown);
        
        if (alarmSound) {
            // reset sound
            alarmSound.pause()
            alarmSound.currentTime = 0;
        }
        
        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        dispayEndTime(then);
        stopButton.textContent = 'STOP';
        
        countDown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countDown);
                playSound();
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    // приводим время в нужную нам форму 
    function displayTimeLeft(seconds) {
        const day = Math.floor(seconds / 86400);
        const hour = Math.floor((seconds / 3600) % 24);
        const minutes = Math.floor((seconds / 60) % 60);
        const reminderSeconds = seconds % 60;
        const  dispaly =  `${day}  ${day == 0 ? 'дней' : day == 1 ? 'день' : day >= 2 && day <=4  ? 'дня' : 'дней'} ${hour}:${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`; 
    
        document.title = dispaly;
        timerDisplay.textContent = dispaly;  
    }

    function dispayEndTime(timestamp) {
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
        // reset timer
        clearInterval(countDown);
    }

    function playSound() {
        alarmSound.play();
    }

    return {
        init,
        start,
        stop
    }
})();

// init timer
timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/message_sound.mp3'
});

// start timer by click
function startTimer(e) {
    const seconds = parseInt(this.dataset.time);
    timer.start(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let inp = document.querySelector('input');
    timer.start(parseInt(inp.value * 60));
});

stopButton.addEventListener('click', function(e) {
    timer.stop();
})