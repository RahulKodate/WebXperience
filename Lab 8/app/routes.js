// app/routes.js
// grab the nerd model we just created
var Sample = require("./models/sample");
const path = require("path");

module.exports = function (app) {
  // server routes
  // handle things like api calls
  // authentication routes
  // sample api route

  app.get("/api/show", async (req, res) => {
    try {
      const samples = await Sample.find({});
      res.json(samples);
      console.log(samples);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  app.post("/api/insert", async (req, res) => {
    try {
      var rec = new Sample(req.body);
      const result = await rec.save();
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)
  // frontend routes =========================================================
  // route to handle all angular requests
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "/Users/rahulkodate/Documents/GitHub/Web-Design-and-User-Experience-Engineering/Lab 8/public/views/index.html"));
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });
};