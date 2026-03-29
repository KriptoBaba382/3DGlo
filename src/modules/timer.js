import { formatNumber } from "./utils.js";
const deadline = new Date('2026-05-31T23:59:59');
const hours = document.getElementById('timer-hours');
const minutes = document.getElementById('timer-minutes');
const seconds = document.getElementById('timer-seconds')


       export default function updateTimer() {
            const now = new Date();

            const timeRemaining = deadline - now;
            if (timeRemaining <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                return;
            }
            const hourse = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutese = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const secondse = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            hours.textContent = formatNumber(hourse);
            minutes.textContent = formatNumber(minutese);
            seconds.textContent = formatNumber(secondse);
        }
        updateTimer();
        setInterval(updateTimer, 1000); 