let getHomePage = (req, res) => {
  return res.render("index.ejs");
};

let getAbout = (req, res) => {
  return res.send(`I'm Việt Tiến`);
};

module.exports = {
  getHomePage,
  getAbout,
};
