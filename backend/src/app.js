const express = require('express');
const cors = require('cors');
var mysql = require('mysql2'); // Por estar rodando em docker o mysql a lib mysql tradicional não funciona
const querys = require('./querys');
const utils = require('./utils');
const app = express();
const baseAddress = 'http://localhost'
const port = 4000;

app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pwd-pucpr",
  database: "ec_inov_colab"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.send("API rodando");
});

app.get('/users', (req, res) => {
  db.query(querys.selectUsers, (err, results) => {
    if (err) return res.status(500).send(err);
    const mappedResults = utils.mapUserToResponse(results);
    console.log(`200 OK -> ${JSON.stringify(mappedResults)}`);
    res.contentType = "application/json"
    res.json(mappedResults);
  });
})

app.get('/users/:id', (req, res) => {
  const userID = parseInt(req.params.id);
  db.query(querys.selectUserById, userID, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.count == 0) return res.status(404).send();
    const mappedResults = utils.mapDbUserToOutputUser(results[0]);
    console.log(`200 OK -> ${JSON.stringify(mappedResults, null, ' ')}`);
    res.contentType = "application/json"
    res.json(mappedResults);
  });
})

app.post('/users', (req, res) => {
  const { name, username, email, address, phone, website, company } = req.body;
  const { street, suite, city, zipcode, geo } = address;

  var validateResult = utils.validate(name, username, email, phone, website, company, street, suite, city, zipcode, geo);
  if (validateResult)
    return res.status(400).json({error: validateResult});

  db.query(
    querys.insertUser,
    [name, username, email, street, suite, city, zipcode, geo.lat, geo.lng, phone, website, company.name, company.catchPhrase, company.bs],
    (err, result) => {
      if (err)
        return res.status(500).send(err);
      console.log(`201 CREATED -> ${result.affectedRows} affected rows`);
      res.status(201).location(`${baseAddress}:${port}/usuarios/${result.insertId}`).json(result);
    });
})


app.put('/users/:id', (req, res) => {
  const userID = parseInt(req.params.id);

  const { name, username, email, address, phone, website, company } = req.body;
  const { street, suite, city, zipcode, geo } = address;

  var validateResult = utils.validate(name, username, email, phone, website, company, street, suite, city, zipcode, geo);
  if (validateResult)
    return res.status(400).json({error: validateResult});

  db.query(
    querys.updateUserById,
    [name, username, email, street, suite, city, zipcode, geo.lat, geo.lng, phone, website, company.name, company.catchPhrase, company.bs, userID],
    (err, result) => {
      if (err) return res.status(500).send(err);
      console.log(`200 OK -> ${result.affectedRows} affected rows`);
      res.status(200).location(`${baseAddress}:${port}/usuarios/${result.insertId}`).json(result);
    });
})

app.delete('/users/:id', (req, res) => {
  const userID = parseInt(req.params.id);
  db.query(querys.deleteUserById, [userID],
    (err, result) => {
      if (err) return res.status(500).send(err);
      console.log(`200 OK -> ${result.affectedRows} affected rows`);
      res.json(result);
    });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});