const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const uri =
  'mongodb+srv://megaBooking:Ax3sIFNQagU6Wj3P@cluster0.2ffsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db('fitLab');
    const servicesCollection = database.collection('services');

    // GET all services

    app.get('/services', async (req, res) => {
      const cursor = servicesCollection.find({});
      const allServices = await cursor.toArray();
      res.json(allServices);
      res.send(allServices);
    });

    // GET single user single destinations

    // app.get('/events/:destinationId', async (req, res) => {
    //   const singleDestinationId = req.params.destinationId;

    //   const query = { _id: ObjectId(singleDestinationId) };

    //   const result = await servicesCollection.findOne(query);
    //   res.json(result);
    // });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

client.connect((err) => {
  //   const collection = client.db('test').collection('devices');
  //   client.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at vs code dsdsasda ${port}`);
});

// tYoy3JREwYOeTNbH;
