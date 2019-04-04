/* // Date
let date = new Date();
let methods;

// прибавили 10 минут к дате 
date.setMinutes(date.getMinutes() + 10);

// изменить для нужного региона toLocaleDateString()
// 1 параметр - формат
// 2 параметр - объект с настройками
date = date.toLocaleDateString('ru-RU', {
    year: '2-digit',
    month: 'short',
    weekday: 'long'
}); */

//console.log(date);


// setInterval
// если ходит останавливать этот интервал нужно его присвоить в переменную
/* let timer = setInterval(() => {
    console.log(Date.now());
}, 500); */

// clearInterval(timer) - останавливает

/* // for each применяется либо к массивам, либо к коллекциям, полуечнным
// через querySelectorAll - НЕживым коллекциям
let buttons = document.querySelectorAll('.timer__button');

// 1 параметр значение
// 2 параметр индекс в массиве
// 3 параметр сам массив
// let array = [1, 2, 'one'];
// array.forEach((value, index, array) => {
//     console.log(value, index, array);
// });
function clickEvent(e) {

}

// повесить на все кнопки обработчик событий
buttons.forEach(btn => btn.addEventListener('click', clickEvent)); */



// Timer
const buttons = document.querySelectorAll('[data-time]');

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
        if (!seconds || typeof seconds !== 'number') return console.log('Please, provide seconds.');
        
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
        const minutes = Math.floor(seconds / 60);
        const reminderSeconds = seconds % 60;

        const  dispaly = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
        document.title = dispaly;
        timerDisplay.textContent = dispaly;
    }

    function dispayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();

        endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function stop() {

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

