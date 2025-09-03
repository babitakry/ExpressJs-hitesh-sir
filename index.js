import express from "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom');
})

app.get('/login', (req, res) => {
  res.send('<h1> Please login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai aur code</h2>")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
