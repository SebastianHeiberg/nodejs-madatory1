import express from 'express'

const PORT = 8080

const app = express()
app.use(express.static("public"))
app.use(express.json())

// prepare pages for loading

import { readpage, renderPage } from "./util/templateEngine.js";

const frontPage = readpage("./public/pages/frontpage/frontpage.html")
const frontpagePage = renderPage(frontPage)

const fetchPage = readpage("./public/pages/fetch/fetch.html")
const fetchpagePage = renderPage(fetchPage)

const restPage = readpage("./public/pages/rest/restapi.html")
const restpagePage = renderPage(restPage)

const createnewprojctPage = readpage("./public/pages/createnewprojct/createNewProject.html")
const createnewprojctPagePage = renderPage(createnewprojctPage)

const loginPage = readpage("./public/pages/login/login.html", {
    cssLinks: `<link rel="stylesheet" href="./public/pages/login/login.css">`
})
const loginPagePage = renderPage(loginPage)

const callbackPage = readpage("./public/pages/callback/callback.html")
const callbackPagePage = renderPage(callbackPage)

const commandsPage = readpage("./public/pages/commands/commands.html")
const commandsPagePage = renderPage(commandsPage)

const variablesPage = readpage("./public/pages/variables/variables.html")
const variablessPagePage = renderPage(variablesPage)

const webadressPage = readpage("./public/pages/webadress/webadress.html")
const webadressPagePage = renderPage(webadressPage)

const spreadoperatorPage = readpage("./public/pages/spreadOperator/spreadOperator.html")
const spreadoperatorPagePage = renderPage(spreadoperatorPage)

const nodemonPage = readpage("./public/pages/nodemon/nodemon.html")
const nodemonPagePage = renderPage(nodemonPage)

const packagejsonPage = readpage("./public/pages/package-json/package-json.html")
const packagejsonPagePage = renderPage(packagejsonPage)

const readfilesPage = readpage("./public/pages/readfiles/readfiles.html")
const readfilesPagePage = renderPage(readfilesPage)

const loopsPage = readpage("./public/pages/loops/loops.html")
const loopsPagePage = renderPage(loopsPage)

const adminPage = readpage("./public/pages/admin/admin.html")
const adminPagePage = renderPage(adminPage)

const datePage = readpage("./public/pages/date/date.html")
const datePagePage = renderPage(datePage)

//mappings

app.get("/", (req, res) => {
    res.send(frontpagePage)
})

app.get("/date", (req, res) => {
    res.send(datePagePage)
})

app.get("/admin", (req, res) => {
    res.send(adminPagePage)
})

app.get("/loops", (req, res) => {
    res.send(loopsPagePage)
})

app.get("/readfiles", (req, res) => {
    res.send(readfilesPagePage)
})

app.get("/package-json", (req, res) => {
    res.send(packagejsonPagePage)
})

app.get("/nodemon", (req, res) => {
    res.send(nodemonPagePage)
})

app.get("/spreadoperator", (req, res) => {
    res.send(spreadoperatorPagePage)
})

app.get("/webadress", (req, res) => {
    res.send(webadressPagePage)
})

app.get("/variables", (req, res) => {
    res.send(variablessPagePage)
})

app.get("/commands", (req, res) => {
    res.send(commandsPagePage)
})

app.get("/callback", (req, res) => {
    res.send(callbackPagePage)
})

app.get("/login", (req, res) => {
    res.send(loginPagePage)
})

app.get("/createnewprojct", (req, res) => {
    res.send(createnewprojctPagePage)
})

app.get("/fetch", (req, res) => {
    res.send(fetchpagePage)
})

app.get("/rest", (req, res) => {
    res.send(restpagePage)
})

app.listen(PORT, () => {
    console.log("App is running on port: ", PORT)
})
