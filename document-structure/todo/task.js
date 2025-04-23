document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task__input');
    const tasksForm = document.getElementById('tasks__form');
    const tasksList = document.getElementById('tasks__list');

    // Task
    function createTask(taskText) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <div class="task__title">
                ${taskText}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;

        // remove
        const removeButton = taskElement.querySelector('.task__remove');
        removeButton.addEventListener('click', (e) => {
            e.preventDefault();
            taskElement.remove();
        });

        return taskElement;
    }

    // Task listen
    tasksForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTask = createTask(taskText);
            tasksList.appendChild(newTask);
            taskInput.value = '';
        }
    });

    // New input after Enter 
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            tasksForm.dispatchEvent(new Event('submit'));
        }
    });
});