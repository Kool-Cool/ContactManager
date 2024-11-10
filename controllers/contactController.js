const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  const allContacts = await Contact.find();
  res.status(200).json({
    message: "Get all contacts",
    data: allContacts,
  });
});

// @desc Add a new contact
// @route POST /api/contacts
// @access public
const addContact = asyncHandler(async (req, res) => {
  // getting request from body
  console.log("The req.body is:- \n ", req.body);

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field are mandatory !");
  }

  const newContact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json({
    message: "Created new contact",
    data: newContact,
  });
});

// @desc Get a particular contact by id
// @route GET /api/contacts/:id
// @access public
const getContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact_by_id = await Contact.findById(id);

  if (!contact_by_id) {
    res.status(404);
    throw new Error("Contact not fond");
  }

  res.status(200).json({
    message: `Get contact with id: ${id}`,
    data: contact_by_id,
  });
});

// @desc Update a contact by id
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact_by_id = await Contact.findById(id);

  if (!contact_by_id) {
    res.status(404);
    throw new Error("Contact not fond");
  }

  const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: `Update contact with id: ${id}`,
    data: updateContact,
  });
});

// @desc Delete a contact by id
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact_by_id = await Contact.findById(id);

  if (!contact_by_id) {
    res.status(404);
    throw new Error("Contact not fond");
  }

  await Contact.findByIdAndDelete(id);

  res.status(200).json({
    message: `Deleted contact with id: ${id}`,
    data : contact_by_id
  });
});

module.exports = {
  getContacts,
  addContact,
  getContactById,
  updateContact,
  deleteContact,
};
