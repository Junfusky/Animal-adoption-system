// require packages
const mongoose = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));

// define user schema
const animalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sex: {type: String, required: true, enum: ['male', 'female']},
    breed: {type: String, required: true},
    species: {type: String, required: true},
    shelter: {type: String, required: true},
    state: {type: String, required: false},
    city: {type: String, required: false},
    zip: {type: String, required: false},
    DoB: {type: Date, required: false},
    pic: {type:String, required: false},
    requestList: {type: [String], required: false},
    status: {type: String, required: true, default: 'available'}
})


// config Animal
const Animals = mongoose.model('animals', animalSchema);

// validate animal
function validateAnimal(animal) {
    const schema = Joi.object({
        name: Joi.string().required(),
        sex: Joi.string().required(),
        breed: Joi.string().required(),
        species: Joi.string().required(),
        shelter: Joi.string().required(),
        state: Joi.string().optional(),
        city: Joi.string().optional(),
        zip: Joi.string().optional(),
        DoB: Joi.date().format("MM/DD/YYYY").optional(),
        pic: Joi.string().optional(),
        requestList:Joi.array().optional(),
        status: Joi.string().required(),
    })
    return schema.validate(animal);
}

module.exports.Animal = Animal;
module.exports.validateAnimal = validateAnimal;