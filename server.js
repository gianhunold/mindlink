const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5178;

const wordlist = [
  "Baum",
  "Apfel",
  "Haus",
  "Pferd",
  "Echse",
  "Computer",
  "Mars",
  "Richter",
  "Schuh",
  "Uhr",
  "Affe",
  "Buch",
  "Aal",
  "Maus",
  "Tomate",
  "Anwalt",
  "Kopfhörer",
  "Pult",
  "Stuhl",
  "Flasche",
  "Papier",
  "Wurst",
  "Auto",
  "Rad",
  "Rauch",
  "Feuer",
  "Funken",
  "Stift",
  "Karte",
  "Teller",
  "Tasse",
  "Gabel",
  "Kerze",
  "Docht",
  "Fernseher",
  "Kamera",
];

app.use(express.static(__dirname + "/public"));

// Serve static HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/newgame", (req, res) => {
  let example = {};
  //let example = { 1: "Test1", 2: "Test2", 3: "Test3", 4: "Test4", 5: "Test5" };
  for (let n = 0; n < 25; n++) {
    let randomnumber = Math.floor(Math.random() * wordlist.length);
    example[n] = wordlist[randomnumber];
  }
  res.json(example);
});

app.get("/guess", (req, res) => {
  let guess = req.query.guess;
  let result = { 1: "blue" };
  res.send(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
