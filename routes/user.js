const router = require("express").Router();
const { getAllUsers } = require("../db/user");

router.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).send(allUsers);
  } catch (error) {
    console.error("error on GET /user/ route", error);
  }
});

module.exports = router;
