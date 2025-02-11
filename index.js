const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Serve the .bru file (assuming it is inside the backend folder)
app.get("/bru-file", (req, res) => {
  const filePath = "./collection.bru";
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("File not found");
  }
});

// Test endpoint
app.get("/", (req, res) => {
  res.send("Backend running on EC2!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

