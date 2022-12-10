const express = require("express");
const  router  = require("./router");
const  cors = require('cors')

const PORT = process.env.PORT || 7070;
const app = express();

app.use(cors())
app.use(express.json());
app.use(router)


app.listen(PORT, () => {
  console.log("Server Started http://localhost:" + PORT);
});
