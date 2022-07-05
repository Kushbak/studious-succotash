// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://kushbak:12345@cluster0.abvgu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const URI = "mongodb+srv://kushbak:12345@cluster0.abvgu.mongodb.net/?retryWrites=true&w=majority";

async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    app.listen(3000, () => {
      console.log('Server is running on port', 3000)
    })
  } catch (e) {
    console.log(e)
  }
}
start()