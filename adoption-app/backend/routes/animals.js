const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Animal, validateAnimal } = require('../models/animal')
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// get all animals
router.get('/', async (req, res) => {
    const animals = await Animal.find().sort('species');
    res.send(animals);
})

// add an animal
router.post('/', [auth, admin], async (req, res) => {
    const { error } = validateAnimal(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    // let animal = new Animal({
    //     name: req.body.name,
    //     sex: req.body.sex,
    //     breed: req.body.breed,
    //     species: req.body.species,
    //     shelter: req.body.shelter,
    //     state: req.body.state,
    //     city: req.body.city,
    //     zip: req.body.zip,
    //     DoB: req.body.DoB,
    //     pic: req.body.pic,
    //     requestList: req.body.requestList,
    //     status: req.body.status
    // })
    let animal = new Animal(_.pick(req.body, ['name', 'sex', 'breed','species','shelter','state', 'city', 'zip', 'DoB', 'pic', 'requestList', 'status']));
    animal = await animal.save();
    res.send(animal);
})

// update an animal
router.put('/:id', [auth, admin], async (req, res) => {
    delete req.body._id;
    const { error } = validateAnimal(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    const animal = await Animal.findByIdAndUpdate(req.params.id, { status: req.body.status}, {new:true});

    if(!animal) {
        return res.status(404).send('The animal with given id does not exist.');
    }
    res.send(animal);
})

// delete an animal
router.delete('/:id', [auth, admin], async (req, res) => {
    const animal = await Animal.findByIdAndRemove(req.params.id);
    if(!animal) {
        return res.status(404).send('The animal with given id does not exist.');
    }
    res.send(animal);
})

// get a single animal
router.get('/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    if(!animal) {
        return res.status(404).send('The animal with given id does not exist.');
    }
    res.send(animal);
})

module.exports = router;