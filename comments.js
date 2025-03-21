// Create web server
// Create a route to serve comments
// Create a route to accept comments

// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Create a route to serve comments
app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});

// Create a route to accept comments
app.post('/comments', (req, res) => {
    res.send('Thanks for your comment!');
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});
