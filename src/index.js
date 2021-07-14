const express = require("express");
const cors = require("cors");

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.set("view engine", "ejs");

// init express aplication
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

//database
const Database = require("better-sqlite3");
const db = new Database("./src/data/database.db", {
  verbose: console.log,
});

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id= ?`);
  const cardData = query.get(req.params.id);

  res.render("card", cardData);
});

server.post("/card/", (req, res) => {
  const response = {};

  if (req.body.name === "") {
    response.success = false;
    response.error = "Missing name";
  } else if (isNaN(parseInt(req.body.palette))) {
    response.success = false;
    response.error = "Missing palette";
  } else if (req.body.job === "") {
    response.success = false;
    response.error = "Missing job";
  } else if (req.body.email === "") {
    response.success = false;
    response.error = "Missing email";
  } else if (req.body.phone === "") {
    response.success = false;
    response.error = "Missing phone";
  } else if (req.body.linkedin === "") {
    response.success = false;
    response.error = "Missing linkedin";
  } else if (req.body.github === "") {
    response.success = false;
    response.error = "Missing github";
  } else if (req.body.photo === "") {
    response.success = false;
    response.error = "Missing photo";
  } else {
    // INSERT de los datos en la bbdd

    const insertStmt = db.prepare(
      "INSERT INTO users (palette, name, job, phone, photo, email, github, linkedin)" +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );

    const result = insertStmt.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.photo,
      req.body.email,
      req.body.github,
      req.body.linkedin
    );

    response.success = true;
    if (req.hostname === "localhost") {
      response.cardURL =
        `http://localhost:${serverPort}/card/` + result.lastInsertRowid;
    } else {
      response.cardURL =
        "https://awesomeprofilecards.herokuapp.com/card/" +
        result.lastInsertRowid;
    }
  }

  res.json(response);
});
