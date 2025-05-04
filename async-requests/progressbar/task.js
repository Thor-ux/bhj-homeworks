document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progress = document.getElementById('progress');
    const send = document.getElementById('send');
    const fileDesc = document.querySelector('.input__wrapper-desc');

    fileInput.addEventListener('change', (e) => {
        const fileName = e.target.files[0]?.name || 'Имя файла...';
        fileDesc.textContent = fileName;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', (e) => {
            if (e.lengthComputable) {
                const percentComplete = (e.loaded / e.total) * 100;
                progress.value = percentComplete / 100;
            }
        });

        xhr.upload.addEventListener('load', () => {
            progress.value = 1;
            alert('Файл успешно загружен');
        });

        xhr.upload.addEventListener('error', () => {
            alert('Произошла ошибка при загрузке файла');
        });

        xhr.open('POST', form.action);
        xhr.send(formData);

        send.disabled = true;
    });
});