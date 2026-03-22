import { formatNumber } from "./utils";
const deadline = new Date('2026-05-31T23:59:59');
const hours = document.getElementById('timer-hours');
const minutes = document.getElementById('timer-minutes');
const seconds = document.getElementById('timer-seconds')


        function updateTimer() {
            const now = new Date();

            const timeRemaining = deadline - now;
            if (timeRemaining <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                return;
            }
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            hours.textContent = formatNumber(hours);
            minutes.textContent = formatNumber(minutes);
            seconds.textContent = formatNumber(seconds);
        }
        updateTimer();
        setInterval(updateTimer, 1000); 