const fs = require("fs");
fs.readFile("./client.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    const database = JSON.parse(data);
    console.log(database);
  }
});
