const express = require("express");
const db = require("../db");

const app = require("./server");
const port = 4040;

app.listen(port, () => {
  db.connect((error) => {
    if (error) {
      console.error("[ERROR] Connection error: ", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");
    }
  });

  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
