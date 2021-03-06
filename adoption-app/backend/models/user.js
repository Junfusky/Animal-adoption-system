// require packages
const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');


// define user schema
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, maxLength: 50},
    password: {type: String, required: true, minlength: 6},
    phone: {type: String, length: 10, required: false}, 
    applyList: {type: [String], maxLength: 5, required: false},
    isAdmin: {type: Boolean, required: true}
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'), {expiresIn: '24h'});
    return token;
}

// config User
const User = mongoose.model('users', userSchema);

// validate user
function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required().email(),
        username: Joi.string().required().max(50),
        password: Joi.string().required().min(6),
        phone: Joi.string().length(10).optional(),
        applyList: Joi.array().max(5).optional(),
        isAdmin: Joi.boolean().required()
    })
    return schema.validate(user);
}

// export
module.exports.User = User;
module.exports.validateUser = validateUser;
