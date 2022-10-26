const express = require("express");
const path = require("path");
const fs = require("fs");
const os = require("os");

const app = express();
const port = process.env.PORT || 4000;

const dataPath = path.join(__dirname, "data");

createDir(dataPath);

app.use("/data", express.static(dataPath));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log("Server running on port 4000");
});

function createDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}