const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/api/notes', (req, res) => {
    const noteData = fs.redFilesSync(path.join(__dirname, '../db/db.json'), 'utf8');
    const notes = JSON.parse(noteData);
    return res.json(notes);
});

router.get('/api/notes', (req, res) => {
    const noteData = fs.redFilesSync(path.join(__dirname, '../db/db.json'), 'utf8');
    const notes = JSON.parse(noteData);
    notes.push({ ...req.body, id: uuidv4() });
    const data = JSON.stringify(notes);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), data);
    return res.json('Success!');
});

router.delete('/api/notes/:id', (req, res) => {
    const noteData = fs.redFilesSync(path.join(__dirname, '../db/db.json'), 'utf8');
    const notes = JSON.parse(noteData);
    const filteredNotes = notes.filter((note) => note.id !== req.params.id);
    const data = JSON.stringify(filteredNotes);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), data);
    return res.json('Success!');
});

router.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
