// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// configuration of moduls
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// ================= USERLIST HESEG =======================

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
    role: request.body.role,
    disabled: request.body.disabled,
    avatar: request.body.avatar,
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

// ============== DELETE HIIHE HESEG ==============
app.delete("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        users: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);

    fs.writeFile(
      "./public/data/users.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
            users: [],
          });
        }
        response.json({
          status: "Amjilttai",
          users: filteredObject,
        });
      }
    );
  });

  app.put("/users", (request, response) => {
    const body = request.body;

    fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file reader error",
          users: [],
        });
      }

      const savedData = JSON.parse(readData);

      const changedData = savedData.map((d) => {
        if (d.id === body.id) {
          (d.firstname = body.firstname),
            (d.lastname = body.lastname),
            (d.email = body.email),
            (d.phonenumber = body.phonenumber);
        }
        return d;
      });

      fs.writeFile(
        "./public/data/users.json",
        JSON.stringify(changedData),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "error during write file",
              users: [],
            });
          }
          response.json({
            status: "Amjilttai",
            users: changedData,
          });
        }
      );
    });
  });
});

// ================= USER PRODUCT HESEG =======================

app.get("/products", (request, response) => {
  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
    if (readError) {
      response.json({
        status: "file reader error",
        products: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "amjilttai avlaa",
      products: objectData,
    });
  });
});

app.post("/products", (request, response) => {
  const newUserProduct = {
    id: Date.now().toString(),
    name: request.body.name,
    price: request.body.price,
    stock: request.body.stock,
    size: request.body.size,
    color: request.body.color,
    category: request.body.category,
    description: request.body.description,
  };
  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
    if (readError) {
      response.json({
        status: "file does not exist",
        products: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(newUserProduct);
    console.log(dataObject);

    fs.writeFile(
      "./public/data/products.json", // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            products: [],
          });
        }
        response.json({
          status: "amjilttai",
          products: dataObject,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
