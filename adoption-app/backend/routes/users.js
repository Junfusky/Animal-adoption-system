const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validateUser } = require('../models/user')
const express = require('express');
const router = express.Router();

// get all users
router.get('/', async (req, res) => {
    const users = await User.find().sort('firstName');
    res.send(users);
})

// add a new user
router.post('/', async (req, res) => {
    // check if the new user valid
    const { error } = validateUser(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    // check if the new user exists
    let user = await User.findOne({email: req.body.email});
    if(user) {
        return res.status(400).send('User exists.')
    }
    // only show some attributes
    user = new User(_.pick(req.body, ['firstName', 'lastName', 'applyList','email','phone','username', 'password', 'isAdmin']));
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user = await user.save();

    // put token to the header
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id','firstName', 'lastName', 'applyList','email','phone','username', 'isAdmin']));
})

// update a user
router.put('/:id', async (req, res) => {
    // do not include _id and _v attached by mongoDB
    delete req.body._id;
    delete req.body.__v;
    // check if the update info valid
    const { error } = validateUser(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    // build updated user
    const user = await User.findByIdAndUpdate(req.params.id, { 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        applyList: req.body.applyList,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    }, {new:true});
    if(!user) {
        return res.status(404).send('The user with given id does not exist.');
    }
    
    res.send(user);
})

// update patial info
router.patch('/:id', async (req, res) => {
    if(!req.params.id) {
        return res.status(404).send('The user with given id does not exist.');
    }
    // build updated user
    if(req.body.firstName) {
        await User.findByIdAndUpdate(req.params.id, {firstName: req.body.firstName}, {new:true});
    }
    if(req.body.lastName) {
        await User.findByIdAndUpdate(req.params.id, {lastName: req.body.lastName}, {new:true});
    }
    if(req.body.email) {
        await User.findByIdAndUpdate(req.params.id, {email: req.body.email}, {new:true});
    }
    if(req.body.phone) {
        await User.findByIdAndUpdate(req.params.id, {phone: req.body.phone}, {new:true});
    }
    if(req.body.username) {
        await User.findByIdAndUpdate(req.params.id, {username: req.body.username}, {new:true});
    }
    if(req.body.applyList) {
        await User.findByIdAndUpdate(req.params.id, {applyList: req.body.applyList}, {new:true});
    }
    if(req.body.password) {
        await User.findByIdAndUpdate(req.params.id, {password: req.body.password}, {new:true});
    }
    if(req.body.isAdmin) {
        await User.findByIdAndUpdate(req.params.id, {isAdmin: req.body.isAdmin}, {new:true});
    }
    
    res.send('Successfuly updated!');
})

// delete a user
router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if(!user) {
        return res.status(404).send('The user with given id does not exist.');
    }
    res.send(user);
})

// get a single user
router.get('/:id', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    // if(!user) {
    //     return res.status(404).send('The user with given id does not exist.');
    // }
    res.send(user);
})



module.exports = router;