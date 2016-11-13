const express = require("express");
const bodyParser = require("body-parser");

const webhooks = express.Router();

webhooks.use(bodyParser.urlencoded());

/*webhooks.post("/job_done", (req, res, next) => {
        req.headers["content-type"] = "application/json";
        next();
});*/

webhooks.use(bodyParser.raw());

webhooks.post("/job_change", (req, res, next) => {

        console.log(typeof req.body);
        console.log(JSON.stringify(req.body));
});

module.exports = webhooks;