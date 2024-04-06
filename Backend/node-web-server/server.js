const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js web server!');
});

// Endpoint to create a new file
app.post('/createFile', (req, res) => {
  const { filename, content } = req.body;

  if (!filename || !content) {
    return res.status(400).send('Filename and content are required.');
  }

  const filePath = path.join(__dirname, `${filename}`);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to create file.');
    }
    console.log('File created successfully:', filePath);
    res.status(200).send('File created successfully.');
  });
});

// Endpoint to get list of uploaded files
app.get('/getFiles', (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to get files.');
    }
    res.status(200).json(files);
  });
});

// Endpoint to get file content by filename
app.get('/getFile/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(404).send('File not found.');
    }
    res.status(200).send(data);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
