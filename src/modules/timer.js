const deadline = new Date('2026-05-31T23:59:59');

        function updateTimer() {
            const now = new Date();
            const timeRemaining = deadline - now;
            if (timeRemaining <= 0) {
                document.getElementById('timer-hours').textContent = '00';
                document.getElementById('timer-minutes').textContent = '00';
                document.getElementById('timer-seconds').textContent = '00';
                return;
            }
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            document.getElementById('timer-hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('timer-minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('timer-seconds').textContent = seconds.toString().padStart(2, '0');
        }
        updateTimer();
        setInterval(updateTimer, 1000); 