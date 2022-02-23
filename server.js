const colors = require("colors")
const express = require("express")

const app = express();


// Body parser //
app.use(express.json());

const PORT = 5000;

app.listen(PORT, console.log(
    `Server is running on port ${PORT}`.yellow
      .bold
  ))