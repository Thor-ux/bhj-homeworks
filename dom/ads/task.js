document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let currentIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));

        function rotateAd() {
            // Removal of active class and style
            cases[currentIndex].classList.remove('rotator__case_active');
            cases[currentIndex].style.color = '';

            // Looping
            currentIndex = (currentIndex + 1) % cases.length;

            // Addition of active class
            const currentCase = cases[currentIndex];
            currentCase.classList.add('rotator__case_active');

            // Color
            if (currentCase.dataset.color) {
                currentCase.style.color = currentCase.dataset.color;
            }

            // Schedule
            const speed = parseInt(currentCase.dataset.speed) || 1000;
            setTimeout(rotateAd, speed);
        }

        rotateAd();
    });
});