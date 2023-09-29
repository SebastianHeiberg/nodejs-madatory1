import express from 'express'
import path from 'path'

const PORT = 8080

const app = express()



app.get("/createnewproject", (req, res) => {
    res.sendFile(path.resolve("./public/createnewproject.html" ))
})

app.get("/fetch", (req, res) => {
    res.sendFile(path.resolve("./public/fetch.html" ))
})

app.listen(PORT, () => {
    console.log("App is running on port: ", PORT)
})
