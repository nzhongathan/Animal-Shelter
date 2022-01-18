const { MongoClient } = require('mongodb')
const dotenv = require('dotenv').config({path: 'process.env'})

let client = new MongoClient(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true});
let clientPromise = client.connect()

module.exports.mongodb = async function(dbName = null) {
    client = await clientPromise
    const db = dbName ?? process.env.DB_NAME
    return client.db(db);
}