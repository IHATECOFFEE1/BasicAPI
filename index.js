const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var data = [
    {
        "id": 1,
        "name": "John",
        "age": 25
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 30
    },
    {
        "id": 3,
        "name": "Jack",
        "age": 28
    }
];


app.get('/', (req, res) => res.json(data));

// post
app.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
});

// delete
app.delete('/:id', (req, res) => {
    var id = req.params.id;
    var index = data.findIndex((item) => item.id == id);
    data.splice(index, 1);
    res.json(data);
});

// update
app.patch('/:id', (req, res) => {
    var id = req.params.id;
    var index = data.findIndex((item) => item.id == id);
    data[index] = {...data[index], ...req.body};
    res.json(data);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
