const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, 'dist/KA')));

app.listen(PORT, (req, res) => {
  console.log('Running');
})


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-single-page-application/index.html'))
});
