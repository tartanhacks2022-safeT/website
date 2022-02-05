import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = require('./config');

const app = initializeApp(config.firebaseConfig);
module.exports = getDatabase();