const express = require("express")

const app = express()

const PORT = 4500

app.get("/", (req, res) => {
    res.send("This is the Home Page!")
    
})

app.get("/about", (req, res) => {
    res.send("Some stuff will go here.")
})

app.get("/blog", (req, res) => {
    res.send("A directory of all my blog posts will go here.")
})


app.listen(PORT, () => {
    console.log(`The server be running on ${PORT}`)
})