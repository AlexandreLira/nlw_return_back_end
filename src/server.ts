import express from "express";
import { addAbortSignal } from "stream";

const app = express();

app.get('/users', (req, res) => {
    return res.send('Hello World')
})

app.listen(3333, () => {
    console.log('hello worl')
})