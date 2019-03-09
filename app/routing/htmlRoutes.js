// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

module.exports = function (app) {

  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  app.get('/img', (req, res)=>{
    res.sendFile(path.join(__dirname, "../../data/img/Arturo.jpeg"))
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Path

};
