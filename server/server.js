const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());
// console.log(process.env.API_KEY)

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create get request for users
app.get('/api/users', async (req, res) => {
    try {
        const { rows: users } = await db.query('SELECT * FROM weatherusers');
        res.send(users)
    } catch (err) {
        console.error(err.message)
    }
})

// create get request to weather api for data
app.get('/weather', (req, res) => {
    const { cityName, stateCode, countryCode } = req.query;
    // console.log(req.query); -- ran some tests
    const apiKey = process.env.API_KEY;
    // console.log(apiKey) 
    // console.log("city", req.query.cityName, "apiKey", apiKey)
    const params = new URLSearchParams({
        q: cityName, stateCode, countryCode,
        appid: apiKey,
        units: "imperial"
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
    console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send(data); // had copied this fetch request and originally data was in {}, so deleted that to help my weathercard easily access the data
        })
        .catch((err) => {
            console.log(err);
        });
});



// create the get request for students in the endpoint '/api/students'
app.get('/api/students', async (req, res) => {
    try {
        const { rows: students } = await db.query('SELECT * FROM students');
        res.send(students);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/newuser', async (req, res) => {
    try {
        const {firstname, lastname, username} = req.body;

        //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
        const result = await db.query(
            'INSERT INTO weatherusers(firstname, lastname, username) VALUES($1, $2, $3) RETURNING *',
            [firstname, lastname, username],
        );
        console.log(result.rows[0]);
        // res.json(result.rows[0]);

        const { rows: users } = await db.query('SELECT * FROM weatherusers');
        res.send(users)

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for students
app.delete('/api/students/:studentId', async (req, res) => {
    try {
        const studentId = req.params.studentId;
        await db.query('DELETE FROM students WHERE id=$1', [studentId]);
        console.log("From the delete request-url", studentId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a student 
app.put('/api/students/:studentId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const studentId = req.params.studentId
    const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
    console.log("In the server from the url - the student id", studentId);
    console.log("In the server, from the react - the student to be edited", updatedStudent);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
    const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});