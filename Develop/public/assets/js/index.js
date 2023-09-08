// Landing page elements
const landingPage = document.getElementById('landingPage');
const notesLink = document.querySelector('a[href="notes.html"]');

// Notes page elements
const notesPage = document.getElementById('notesPage');
const notesList = document.getElementById('notesList');
const noteTitleInput = document.getElementById('noteTitle');
const noteTextInput = document.getElementById('noteText');
const saveButton = document.getElementById('saveButton');
const writeButton = document.getElementById('writeButton');
const selectedNote = document.getElementById('selectedNote');
const selectedNoteTitle = document.getElementById('selectedNoteTitle');
const selectedNoteText = document.getElementById('selectedNoteText');

// Existing notes array (for demonstration purposes)
let existingNotes = [];

// Function to toggle between landing page and notes page
function togglePage() {
  landingPage.style.display = 'none';
  notesPage.style.display = 'block';
}

// Function to update the list of existing notes
function updateNotesList() {
  notesList.innerHTML = '';
  existingNotes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = note.title;
    listItem.addEventListener('click', () => selectNote(index));
    notesList.appendChild(listItem);
  });
}

// Function to select and display a note
function selectNote(index) {
  const note = existingNotes[index];
  selectedNoteTitle.textContent = note.title;
  selectedNoteText.textContent = note.text;
  selectedNote.style.display = 'block';
}

// Function to create a new note
function createNote() {
  const title = noteTitleInput.value;
  const text = noteTextInput.value;

  if (title && text) {
    const newNote = { title, text };
    existingNotes.push(newNote);
    updateNotesList();
    noteTitleInput.value = '';
    noteTextInput.value = '';
    saveButton.disabled = true;
  }
}

// Event listeners
notesLink.addEventListener('click', togglePage);
writeButton.addEventListener('click', () => selectedNote.style.display = 'none');
saveButton.addEventListener('click', createNote);
noteTitleInput.addEventListener('input', () => saveButton.disabled = false);
noteTextInput.addEventListener('input', () => saveButton.disabled = false);
