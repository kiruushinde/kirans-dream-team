const express = require('express');
const app = express();
require("./db/connection");
const hbs = require('hbs');
const path = require('path');
const Form = require("./models/form");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// accessing paths of our folder views and partials
const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(static_path));

// setting app with hbs file
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/contact", async(req, res) => {
    try {
        const user = new Form(req.body);
        const data = await user.save();
        res.status(201).render("index");
        console.log(data);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
})

app.listen(port, (req, res) => {
    console.log(`listening on port no. ${port}`);
})