const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mcg'
  });
   
connection.connect();

router.get('/', (req, res) => {
    connection.query('SELECT *, DATE_FORMAT(dob, "%d/%m/%Y") AS n_dob FROM patients', (err, data) => {
        if(err) {
            throw err;
            res.json({error : 'error'});
        } else {
            res.json(data);
        }
    });
})

router.put('/', (req, res) => {
    connection.query('INSERT INTO patients (first_name, last_name, dob, gender) VALUES(?, ?, ?, ?)', [req.body.fn, req.body.ln, req.body.db, req.body.gd], (err, data) => {
        if(err) {
            throw err;
            res.json({error: 'error'});
        } else {
            res.json({success : 'success'});
        }
    });
});

module.exports = router;