const express = require('express');

const helmet = require('helmet');

const bodyParser = require('body-parser');

const app =express();

const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

//get music
app.post("/music/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=music&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get podcast
app.post("/podcast/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=podcast&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get movie
app.post("/movie/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=movie&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get musicVideo
app.post("/musicVideo/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=musicVideo&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get audiobook
app.post("/audiobook/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=audiobook&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get shortFilm
app.post("/shortFilm/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=shortFilm&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get tvShow
app.post("/tvShow/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=tvShow&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get software
app.post("/software/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=software&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get ebook
app.post("/ebook/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=ebook&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//get all
app.post("/all/:query/", async (req, res) => {
    const query = req.params.query;
    const url = `https://itunes.apple.com/search?term=${query}&media=all&limit=10`;
    const fetchRes = await fetch(url);
    const json = await fetchRes.json();
        res.json(json)
        console.log(json);
    })

//handle errors
app.use(function(err, req, res, next) {
    res.status(500).send("Something went wrong")
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})