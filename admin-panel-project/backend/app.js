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
  response.send('Here Im a brutaly powerful express server!');
})

app.post("/users", (request, response) => {
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const number = request.body.number;
  const email = request.body.email;
})

// post orulj ireh

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
