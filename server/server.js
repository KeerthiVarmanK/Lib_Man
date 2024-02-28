const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

// import express from 'express';
// import cors from 'cors'
// import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lib",
});

// db.connect((err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('DB connected')
// })



//app.get("/", (req, res) => {
//  res.json("hello");
//});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM book";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO book(title, author, subject, publish_date) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.title,
    req.body.author,
    req.body.subject,
    req.body.publish_date,
  ]; 

  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
    } //return res.send(err);
    console.log("created");

    
  });
  res.status(200).send({message:"created"});
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM book WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET title= ?, author= ?,subject= ?, publish_date = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.subject,
    req.body.publish_date,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
})