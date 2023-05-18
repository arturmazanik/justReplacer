const express = require("express");
let app = express();
let server = app.listen(3000);
console.log("Server run on http://localhost:3000");
app.use(express.static(__dirname));