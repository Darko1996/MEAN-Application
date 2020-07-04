const express = require('express'); //import
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const sendMail = require('./controllers/mail');

const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/user");

const app = express();

// process.env.MONGO_ATLAS_PW global variable for nodeJS from nodemon.json
mongoose.connect("mongodb+srv://darko:" + process.env.MONGO_ATLAS_PW + "@cluster0-wsyin.mongodb.net/node-angular?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to database.');
})
.catch(() => {
  console.log('Connection failed');
});

app.use(bodyParser.json());
//using images from dir
// app.use("/images/kuhinje", express.static(path.join("backend/images/kuhinje/"))); //for local testing
app.use("/images/kuhinje", express.static(path.join(__dirname,"images/kuhinje/")));
app.use("/images/tv-komode", express.static(path.join(__dirname,"images/tv-komode/")));
app.use("/images/police", express.static(path.join(__dirname,"images/police/")));
app.use("/images/komode", express.static(path.join(__dirname,"images/komode/")));
app.use("/images/garderoberi-i-ormari", express.static(path.join(__dirname,"images/garderoberi-i-ormari/")));
app.use("/images/kancelarijski-stolovi", express.static(path.join(__dirname,"images/kancelarijski-stolovi/")));
app.use("/images/katalog-boja", express.static(path.join(__dirname,"images/katalog-boja/")));
app.use("/images/fiokari-i-nocni-stocici", express.static(path.join(__dirname,"images/fiokari-i-nocni-stocici/")));
app.use("/images/predsoblja-i-cipelari", express.static(path.join(__dirname,"images/predsoblja-i-cipelari/")));
app.use("/images/klub-i-stolovi-za-rucavanje", express.static(path.join(__dirname,"images/klub-i-stolovi-za-rucavanje/")));
app.use("/images/kupatilski-namestaj", express.static(path.join(__dirname,"images/kupatilski-namestaj/")));
app.use("/images/ostalo", express.static(path.join(__dirname,"images/ostalo/")));

//for prod
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
  next()
})

// Contact form
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
  const { name, email, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(name, email, text, function(err, data){
    if (err) {
      res.status(500).json({ message: 'Internal error' });
    } else {
      res.json({ message: 'Message sent!' });
    }
  })
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

app.use(productsRoutes);
app.use("/api/user", userRoutes);

//for prod
app.use((req, res, next) => { 
  res.sendFile(path.join(__dirname, "angular", "index.html"));
})

module.exports = app; //export
