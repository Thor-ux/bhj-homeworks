const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clearBtn');

function saveToLocalStorage() {
    localStorage.setItem('editorContent', editor.value);
}

function loadFromLocalStorage() {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        editor.value = savedContent;
    }
}

function clearEditor() {
    editor.value = '';
    saveToLocalStorage();
}

editor.addEventListener('input', saveToLocalStorage);
clearBtn.addEventListener('click', clearEditor);

window.addEventListener('load', loadFromLocalStorage);