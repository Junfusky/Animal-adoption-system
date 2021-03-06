const bcrypt = require('bcrypt');
const Joi = require('joi');
const _ = require('lodash');
const { User } = require('../models/user')
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({email: req.body.email});
    if(!user) {
        return res.status(400).send('Invalid email.');
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) {
        console.log(validPassword)
        return res.status(400).send('Invalid password.');
    }

    const token = user.generateAuthToken();
    res.send({ authtoken: token });
})


function validate(req) {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    })
    return schema.validate(req);
}

module.exports = router;