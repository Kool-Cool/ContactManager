const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add email address"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add phone number"],
    },
  },
  {
    timestamps: true, // Add timestamps in the schema options
  }
);

// Create the model from the schema
// const Contact = mongoose.model('Contact', contactSchema);

// module.exports = Contact;

module.exports = mongoose.model('Contact', contactSchema);
