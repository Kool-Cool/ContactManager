const express = require("express");
const router = express.Router();

// /api/contacts/

// get all contacts
router.route("/").get((req, res) => {
  res.status(200).json({
    message: "Get all contacts",
  });
});

// add new contact (post)
router.route("/").post((req, res) => {
  res.status(200).json({
    message: "Add all contacts (POST)",
  });
});

// get particular :id
router.route("/:id").get((req, res) => {
  res.status(200).json({
    message: `Get contact of id :- ${req.params.id}`,
  });
});

// update
router.route("/:id").put((req, res) => {
  res.status(200).json({
    message: `Update (PUT) contact of id :- ${req.params.id}`,
  });
});

// delete
router.route("/:id").delete((req, res) => {
  res.status(200).json({
    message: `Delete  contact of id :- ${req.params.id}`,
  });
});

module.exports = router;
