/*----------------exemple precedent---------

require('dotenv').config();
const { baseDeDonneesTemp } = require('./petitesrecettes');
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URL);

async function main() {
  await client.connect();
  console.log('Connexion OK!');
  const db = client.db('AppliRecette');
  const collection = db.collection('recettes');
  //console.log(collection);
  //const insertStuff = await collection.insertMany(baseDeDonneesTemp);
  
  try {
    const findRecette = await collection.findOne({ nbrePers: 6 });
    console.log(findRecette)
  } catch (error) {
    throw error;
  }
  return 'done !';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
-------------------------------------------------------*/


/*
const url = 'mongodb://localhost:27017';
const dbName = 'monProjetMongo';

//mongodb+srv://bertrandcafolla:<password>@cluster0.qy0clx8.mongodb.net/?retryWrites=true&w=majority

MongoClient.connect(url, function(err, client) {  
    console.log("Connecté à MongoDB");
    const db = client.db(dbName);
    console.log(db);
    client.close();
  });

/*
const http = require('node:http');
//const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(res)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

*/

/*
const hostname = 'localhost';
const port = 3000;


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/