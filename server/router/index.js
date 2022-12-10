const express = require("express");

const router = express.Router();

router.get("/data", async (req, res) => {
  res.status(200);
  res.send({
    status: "ok",
  });
});
router.get("/error", async (req, res) => {
  res.status(500);
  res.send({ status: "Internal Error" });
});
router.get("/loading", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  res.send({ status: "ok" });
});

module.exports = router;
