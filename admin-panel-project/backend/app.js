// import necessary module
const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// configuration of moduls
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.post("/products", (request, response) => {
  const body = request.body;

  console.log("body", body);

  const newProduct = {
    id: Date.now().toString(),
    title: body.title,
    subTitle: body.subTitle,
    price: body.price,
    description: body.description,
    color: body.color,
  };

  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(newProduct);

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.delete("/products", (request, response) => {
  const body = request.body;
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File reader error",
        body: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObjects = readObject.filter((w) => w.id !== body.productId);

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            body: [],
          });
        }

        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
