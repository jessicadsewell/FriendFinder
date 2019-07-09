var surveyData = require("../data/friends");


// ROUTING 

module.exports = function(app) {
    app.get("api/friends", function(req, res) {
        res.json(surveyData);
    })

    app.post("api/friends", function(req, res) {
        surveyData.push(req.body);
        res.json(true);
    })

    app.post("/api/clear", function(req, res) {
        surveyData.empty();
        res.json({ ok: true});
    })
}
