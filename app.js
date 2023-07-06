import express from 'express';
import session from "express-session";
import { dirname, join } from "path";
import bodyParser from'body-parser';
//import mongoose from 'mongoose';
import MongoStore from "connect-mongo";
import User from "./public/user.js";
import { fileURLToPath } from "url";
import { MONGODB_URI, PORT } from "./config.js";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(join(__dirname, "public")));

app.set("port", PORT);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGODB_URI }),
  })
); 
app.post('/register', async (req, res) => {
    const {name, email, celular} = req.body;
    const newUser = new User({name, email, celular});
    newUser.pagina = "asma";
    console.log(newUser);
    await newUser.save();
    res.redirect("/");
});

/*app.listen(3000, () => {
    console.log('server started');
})*/

export default app;