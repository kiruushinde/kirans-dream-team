// now once the connection to db is established it's time to define the  schema.

const mongoose = require('mongoose');
const validator = require('validator');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,

        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid login details..!");
            }
        }
    },

    message: String
})

const Form = new mongoose.model("Form", formSchema);

module.exports = Form;