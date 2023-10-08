import fs from 'fs'

export function readpage (filepath) {
    return fs.readFileSync(filepath).toString()
}

export function renderPage(page, config = {}){
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
    .replace("$CSS_LINKS", config.cssLinks || "")

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()   
    
    return navbar + page + footer
}