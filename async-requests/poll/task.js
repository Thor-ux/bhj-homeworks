document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    let currentPollId = null;

    function loadSurvey() {
        fetch('https://students.netoservices.ru/nestjs-backend/poll')
            .then(response => response.json())
            .then(data => {
                currentPollId = data.id;
                pollTitle.textContent = data.data.question;
                pollAnswers.innerHTML = '';

                data.data.answers.forEach((answer, index) => {
                    const button = document.createElement('button');
                    button.className = 'poll__answer';
                    button.textContent = answer;
                    button.addEventListener('click', () => handleVote(index));
                    pollAnswers.appendChild(button);
                });
            })
            .catch(error => console.error('Error loading survey:', error));
    }

    function handleVote(answerIndex) {
        const formData = new URLSearchParams();
        formData.append('vote', currentPollId);
        formData.append('answer', answerIndex);

        fetch('https://students.netoservices.ru/nestjs-backend/poll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            displayResults(data.stat);
        })
        .catch(error => console.error('Error submitting vote:', error));
    }

    function displayResults(results) {
        pollAnswers.innerHTML = '';
        const totalVotes = results.reduce((sum, result) => sum + result.votes, 0);

        results.forEach(result => {
            const resultElement = document.createElement('div');
            const percentage = ((result.votes / totalVotes) * 100).toFixed(2);
            resultElement.textContent = `${result.answer}: ${percentage}%`;
            pollAnswers.appendChild(resultElement);
        });

        const newPollButton = document.createElement('button');
        newPollButton.textContent = 'Новый опрос';
        newPollButton.addEventListener('click', loadSurvey);
        pollAnswers.appendChild(newPollButton);
    }

    loadSurvey();
});