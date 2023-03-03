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
  const body = request.body;
  console.log(body);
  fs.readFile("./public/data/users.json", "utf-8", (readError, readData) => {
    // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
    if (readError) {
      response.json({
        status: "file does not exist",
        users: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);

    fs.readFile(
      "./public/data/users.json", // zaawal public dotor data dotor users gdg json bga gdgig zaaj uguh ystoi !!!
      (readError) => {
        if (readError) {
          response.json({
            status: "Error during file write",
            users: [],
          });
        }

        const roleData = JSON.parse(readData); // parse ashiglan object bolgoj bga
        const roleName = roleData.filter((role) => role.id === body.role)[0];

        const newUser = {
          id: Date.now().toString(),
          firstname: request.body.firstname,
          lastname: request.body.lastname,
          number: request.body.number,
          email: request.body.email,
          role: roleName,
        };
        dataObject.push(newUser);
        fs.writeFile("./public/data/users.json", (writeError) => {
          if (writeError) {
            response.json({
              status: "Aldaa garlaa JSON FILE zuruud bn",
            });
          }
          response.json({
            status: "amjilttai",
            users: dataObject,
          });
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
    // zaawal public dotor data dotor products gdg json bga gdgig zaaj uguh ystoi !!!
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
    // zaawal public dotor data dotor product gdg json bga gdgig zaaj uguh ystoi !!!
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
      "./public/data/products.json", // zaawal public dotor data dotor product gdg json bga gdgig zaaj uguh ystoi !!!
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

// ============== PRODUCT DELETE HIIH HESEG ==============
app.delete("/products", (request, response) => {
  const body = request.body;

  fs.readFile("./public/data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        products: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.productId);

    fs.writeFile(
      "./public/data/products.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
            products: [],
          });
        }
        response.json({
          status: "Amjilttai",
          products: filteredObject,
        });
      }
    );
  });

  app.put("/products", (request, response) => {
    const body = request.body;

    fs.readFile(
      "./public/data/products.json",
      "utf-8",
      (readError, readData) => {
        if (readError) {
          response.json({
            status: "file reader error",
            products: [],
          });
        }

        const savedData = JSON.parse(readData);

        const changedData = savedData.map((d) => {
          if (d.id === body.id) {
            (d.name = body.name),
              (d.price = body.price),
              (d.stock = body.stock),
              (d.size = body.size),
              (d.color = body.color),
              (d.category = body.category),
              (d.description = body.description);
          }
          return d;
        });

        fs.writeFile(
          "./public/data/products.json",
          JSON.stringify(changedData),
          (writeError) => {
            if (writeError) {
              response.json({
                status: "error during write file",
                products: [],
              });
            }
            response.json({
              status: "Amjilttai",
              products: changedData,
            });
          }
        );
      }
    );
  });
});

// =========== API get all user ROLES =========
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "ymr negen alda garlaa!!!",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);

    response.json({
      status: "Success",
      data: dataObject,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
