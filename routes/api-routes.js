const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("api/notes", (req, res) => {
    let data = fs.readFileSync("db.json", "utf-8");
    data = JSON.parse(data);
    res.json(data.title, data.text)
})

module.exports = router;
