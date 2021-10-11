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

// // update an animal
// router.put('/:id', [auth, admin], async (req, res) => {
//     delete req.body._id;
//     const { error } = validateAnimal(req.body);
//     if(error) {
//         return res.status(400).send(error.details[0].message);
//     }
//     const animal = await Animal.findByIdAndUpdate(req.params.id, { status: req.body.status}, {new:true});

//     if(!animal) {
//         return res.status(404).send('The animal with given id does not exist.');
//     }
//     res.send(animal);
// })

// update animal info
router.patch('/:id', [auth, admin], async (req, res) => {
    if(!req.params.id) {
        return res.status(404).send('The animal with given id does not exist.');
    }

    // build updated info
    if(req.body.name) {
        await Animal.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new:true});
    }
    if(req.body.sex) {
        await Animal.findByIdAndUpdate(req.params.id, {sex: req.body.sex}, {new:true});
    }
    if(req.body.breed) {
        await Animal.findByIdAndUpdate(req.params.id, {breed: req.body.breed}, {new:true});
    }
    if(req.body.species) {
        await Animal.findByIdAndUpdate(req.params.id, {species: req.body.species}, {new:true});
    }
    if(req.body.shelter) {
        await Animal.findByIdAndUpdate(req.params.id, {shelter: req.body.shelter}, {new:true});
    }
    if(req.body.state) {
        await Animal.findByIdAndUpdate(req.params.id, {state: req.body.state}, {new:true});
    }
    if(req.body.city) {
        await Animal.findByIdAndUpdate(req.params.id, {city: req.body.city}, {new:true});
    }
    if(req.body.zip) {
        await Animal.findByIdAndUpdate(req.params.id, {zip: req.body.zip}, {new:true});
    }
    if(req.body.DoB) {
        await Animal.findByIdAndUpdate(req.params.id, {DoB: req.body.DoB}, {new:true});
    }
    if(req.body.pic) {
        await Animal.findByIdAndUpdate(req.params.id, {pic: req.body.pic}, {new:true});
    }
    if(req.body.requestList) {
        await Animal.findByIdAndUpdate(req.params.id, {requestList: req.body.requestList}, {new:true});
    }
    if(req.body.status) {
        await Animal.findByIdAndUpdate(req.params.id, {status: req.body.status}, {new:true});
    }
    res.send('Successfuly updated!');
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