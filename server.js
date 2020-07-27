const express = require('express');
const path = require('path');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const PORT = process.env.PORT || 5001;
var data = fs.readFileSync('data.json');
var ads = JSON.parse(data);

app.use(express.static(path.join(__dirname, 'dist/angular-single-page-website')));

app.listen(PORT, (req, res) => {
  console.log('Running');
})

app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-single-page-website/index.html'))
});

app.get('/api/countClick/', countClick);

function countClick(req, res) {
  var imageId = req.query.id;

  fs.appendFile('count.txt', imageId + " ", function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send("Saved");
  });
}

app.get('/api/getAllCount', (req, res) => {
  res.send(fs.readFileSync('count.txt'));
})

app.get('/api/getAds', sendAllAds);

function sendAllAds(request, response) {
  response.send(ads);
}

app.post('/api/addAds', urlencodedParser, function (req, res) {
  let imageId = req.body.imageId;
  let link = req.body.link;
  let redirectionTo = req.body.redirectionTo;
  let price = req.body.price;

  let jsonData = {
    "imageId" : imageId,
    "link" : link,
    "redirectionTo" : redirectionTo,
    "price" : price,
  };

  ads.push(jsonData);
  var data1 = JSON.stringify(ads, null, 2);
  fs.writeFile('data.json', data1, finished);
  res.send("success");
})

function finished(err) {
  console.log('all set.');
}
