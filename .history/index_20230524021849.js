const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const categories = require("./data/categories.json");
const news = require("./data/news.json")

app.use(cors());

app.get('/', (req, res) => {
    res.send("News API is Running")
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == "08") {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})

app.listen(port, () => {
    console.log("News server is running on port", port)
})