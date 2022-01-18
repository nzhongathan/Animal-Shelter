const { response } = require('express')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { mongodb } = require('../mongo/index.js')
const ObjectId = require('mongodb').ObjectID

router.use(bodyParser.urlencoded({extended: true}))
router.get('/:animal', async function(request, response, next) {
    const animalQuery = request.params.animal
    const db = await mongodb()
    var docs = []
    if (animalQuery == "all") {
        docs = await (await db.collection('Animals').find({adopted: {$ne: true}}).project({animal: true, _id: false}).toArray()).map(function(u) {return u.animal;})
    } else {
        docs = await db.collection('Animals').find({animal: animalQuery, adopted: {$ne: true}}).toArray()
    }
    
    response.status(200)
    response.send(docs)
})
router.post('/', async function(request, response, next) {
    const db = await mongodb()
    const petName = ObjectId(request.body.id)

    const { acknowledged, updatedCount } = await db.collection('Animals').updateOne({_id: petName}, {
        $set: {
            adopted: true
        }
    })
    response.status(200)
})
router.post('/user', async function (request, response, next) {
    const db = await mongodb()
    const animal = request.body.animal
    const name = request.body.name
    const breed = request.body.breed
    const status = request.body.status
    const gender = request.body.gender
    const age = parseInt(request.body.yearsOld)
    const picture = request.body.picture

    const { acknowledged, addedCount} = await db.collection("Animals").insertOne({
        animal: animal,
        name: name,
        breed: breed,
        status: status,
        gender: gender,
        yearsOld: age,
        adopted: false,
        picture: picture,
        description: description
    })
    response.status(200)
})
/*
router.post('/', async function(request, resopnse, next) {
    const db = await mongodb()
    const { acknowledged, matchedCount, modifiedCount} = await db.collection('Animals')
    response.status(200)
})*/

module.exports = router