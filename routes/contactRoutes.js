const express = require("express");
const {
  getContacts,
  addContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

// /api/contacts/

// Get all contacts
router.route("/").get(getContacts);

// Add new contact (POST)
router.route("/").post(addContact);

// Get a particular contact by :id
router.route("/:id").get(getContactById);

// Update a contact by :id (PUT)
router.route("/:id").put(updateContact);

// Delete a contact by :id (DELETE)
router.route("/:id").delete(deleteContact);

module.exports = router;
