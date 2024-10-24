const enterNoteinp = document.getElementById('enterNote');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

createBtn.onclick = function () {
    if (enterNoteinp.value.length === 0) {
        return;
    }

    const newNoteHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="note-text">${enterNoteinp.value}</span>
            <span>
                <button class="btn btn-small btn-success mark-completed">&check;</button>
                <button class="btn btn-small btn-danger delete-note">&times;</button>
            </span>
        </li>
    `;

    listElement.insertAdjacentHTML('beforeend', newNoteHTML);

    enterNoteinp.value = '';

    const newNote = listElement.lastElementChild;
    
    const markCompletedButton = newNote.querySelector('.mark-completed');
    markCompletedButton.onclick = function () {
        const noteText = newNote.querySelector('.note-text');
        noteText.classList.toggle('completed');
    }

    const deleteButton = newNote.querySelector('.delete-note');
    deleteButton.onclick = function () {
        newNote.remove();
    }
}