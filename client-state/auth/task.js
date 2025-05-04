document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    function checkAuth() {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            showWelcomeMessage(userId);
        } else {
            showSigninForm();
        }
    }

    function showWelcomeMessage(userId) {
        userIdSpan.textContent = userId;
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    }

    function showSigninForm() {
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
        signinForm.reset();
    }

    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(signinForm);

        try {
            const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.user_id) {
                localStorage.setItem('user_id', data.user_id);
                showWelcomeMessage(data.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при авторизации');
        } finally {
            signinForm.reset();
        }
    });

    welcomeBlock.addEventListener('click', () => {
        localStorage.removeItem('user_id');
        showSigninForm();
    });

    checkAuth();
});