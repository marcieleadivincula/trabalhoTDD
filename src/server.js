// const express = require("express");
// const bodyParser = require("body-parser");
const app = require('./app');

app.listen(process.env.PORT || 3000);

// const app = express();

// app.use(bodyParser.json());

// app.listen(5000, () => {
//   console.log(`Server is running on port 5000.`);
// });