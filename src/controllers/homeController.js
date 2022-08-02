import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `users` ", function (err, results, fields) {
    results.map((row) => {
      data.push({
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
        address: row.address,
      });
    });
    return res.render("index.ejs", { dataUser: JSON.stringify(data) });
  });
};

let getAbout = (req, res) => {
  return res.send(`I'm Việt Tiến`);
};

module.exports = {
  getHomePage,
  getAbout,
};
