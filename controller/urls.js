const {shortid} = require("shortid");
const URL = require("../connection.js");

async function generateNewShortURL(req, res) {
    const body = req.body;
    const shortURL =  shortid(8);
    const entry = await URL.create({
        shortURL : shortURL,
        redirectURL : body.url,
        visitHistory : [],
    });
    return res.json({Status: "created",
        shortURL : entry.shortURL,
    });
}

module.exports = {
    generateNewShortURL,
}