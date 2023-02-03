// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// configuration of moduls
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
    if (readError) {
      response.json({
        status: "file reader error",
        users: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "amjilttai avlaa",
      users: objectData,
    });
  });
});

app.post("/users", (request, response) => {
  const newUser = {
    id: Date.now().toString(),
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    number: request.body.number,
    email: request.body.email,
  };
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
    if (readError) {
      response.json({
        status: "file does not exist",
        users: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./public/data/users.json", // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            users: [],
          });
        }
        response.json({
          status: "amjilttai",
          users: dataObject,
        });
      }
    );
  });
});

// post orulj ireh

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
