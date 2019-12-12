const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/find/:id', async (req, res) => {
    
  res.json(await User.findAll());
});

app.get('/findall', async (req, res) => {
    res.json(await User.findAll());
});

app.put('/update/:id', (req, res) => {
  res.json('Im in update');
});

app.delete('/delete/:id', (req, res) => {
  res.json('Im in delete');
});

app.listen(3000);