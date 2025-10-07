const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { v4: uuid4 } = require("uuid");

const { movies } = require("./data/movies.js");

const app = express();
app.use(morgan("dev")); // for logging incoming requests
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

// mock movies data
let reviews = [
    {id: "r1", movieId: "m1", author: "Alice", text: "This movie is amazing", createdAt: new Date},
    {id: "r2", movieId: "m2", author: "Ben", text: "Beautiful animation", createdAt: new Date}
];

// GET all movies
app.get("/api/movies", (req, res) => {
    res.json(movies);
});

// GET single movie
app.get("/api/movies/:id", (req,res) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id === id);
    if (!movie) return res.status(404).json({error: "movie not found"});
    res.json(movie);
});

// GET reviews for single movie
app.get("/api/movies/:id/reviews", (req, res) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id === id);

    if (!movie) return res.status(404).json({error: "movie not found"});
    const movieReviews = reviews.filter((r) => r.movieId === id);
    res.json(movieReviews);
});

// POST new review for single movie
app.post("/api/movies/:id/reviews", (req,res) => {
    const {id} = req.params;
    const { author, text } = req.body;

    const movie =  movies.find((m) => m.id === id);
    if(!movie) return res.status(404).json({error: "movie not found"});




    const newReview = {
        id: uuid4(),
        movieId: id,
        author,
        text,
        createdAt: Date.now()
    };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
