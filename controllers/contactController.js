// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
  res.status(200).json({
    message: "Get all contacts",
  });
};

// @desc Add a new contact
// @route POST /api/contacts
// @access public
const addContact = (req, res) => {
  res.status(201).json({
    message: "Add new contact",
  });
};

// @desc Get a particular contact by id
// @route GET /api/contacts/:id
// @access public
const getContactById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id, 10); // Cast to integer with base 10

  // Check if the 'id' is a valid integer
  if (isNaN(id)) {
    return res.status(400).json({
      message: "Invalid ID. Please provide a valid integer ID.",
    });
  }
  res.status(200).json({
    message: `Get contact with id: ${id}`,
  });
};

// @desc Update a contact by id
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Update contact with id: ${id}`,
  });
};

// @desc Delete a contact by id
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Deleted contact with id: ${id}`,
  });
};

module.exports = {
  getContacts,
  addContact,
  getContactById,
  updateContact,
  deleteContact,
};
