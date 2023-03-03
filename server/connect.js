const express = require('express');
const app = express();
const drugLabel = require('../openfda/app');
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pill-pal/index/index.html'));
});

app.post('/search', (req, res) => {
    const drug = req.body.drug;
    drugLabel(drug, (error, result) => {
        if (error) {
            res.send({ error });
        } else {
            res.send({ result });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

