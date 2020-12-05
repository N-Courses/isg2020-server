//importation
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//initialisation
const app = express();
app.use(bodyparser.json())
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/isg2020'
    , { useNewUrlParser: true })
    .then(() => {
        console.log('mongo connected')
    }).catch((err) => {
        console.log(err);
    })

//traitement

app.get('/', (req, res) => {
    res.send("ok")
})

require('./routes')(app);

//execution
app.listen(5000, (err, success) => {
    if (err) {
        console.log(err) //catch
    } else {
        console.log("server listen on port http://localhost:5000") //then
    }
})


/* .then(() => {
    console.log("ok");
})
.catch(() => {
    console.log("error");
}) */