require("dotenv").config();
const app = require("./app.js");

// const port = process.env.PORT || 9000;

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});

