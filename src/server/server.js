import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const db = require('../../db.js');
import { ref, set } from "firebase/database";

let port = 7777;
let app = express();

app.listen(port, console.log("Server listening on port", port));
/*app.get('/', (req, res) => {
    res.send("test");
});*/

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

/*
// test db
console.log(db);
function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  writeUserData("hihi", "test", "chacha", "asdf");
*/