import express from "express";
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home page !!<h1/>")
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})