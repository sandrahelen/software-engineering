const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require("../models/admin");
const jwt = require('jsonwebtoken');
const config = require('config');

/// Register a new User
router.post('/register', async(req, res) => {
    const {username, password} = req.body;

    if(!username || !password) return res.status(400).json({msg: "Please enter all fields"});

    try {

        const salt = await bcrypt.genSalt(10); // Genererer tilfeldig data for å gjøre hashingen sikkrere
        if(!salt) throw Error("something wrong with salt");
        const hash = await bcrypt.hash(password, salt); // Hasher passordet med den tidligere genererte saltet
        if(!hash) throw Error("something wrong with hash");

        const newUser = new Admin({
            username: username,
            password: hash
        });

        const saveUser = await newUser.save();

        // Generer et token med brukeren sin id som payload. Denne vil også utgå om en time
        const token = jwt.sign({id: saveUser._id}, config.get('jwtsecret'), {expiresIn: 3600}); 

        //Sender en 200 OK svar tilbake med nødvendig informasjon
        res.status(200).json({
            token,
            user: {
                id: saveUser._id,
                username: saveUser.username,
                password: saveUser.password
            }
        });
    } catch (e) {res.status(400).json({error: e.message})};
});

///login
router.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) return res.status(400).json({msg: "Please enter all fields"});

    Admin.findOne({ username }) //Finner en bruker i databasen med samme brukernavn
        .then( user => {
            if(!user) return res.status(400).json({msg: "User Does not exist"});
            // Sammenligner passordet til brukeren i databasen med det passordet som er skrevet inn
            bcrypt.compare(password, user.password).then((result) =>{
                if(result === false) return res.status(400).json({msg: "password does not match"});

                //Generer et token i likhet med registreringen
                const token = jwt.sign({ id: user._id }, config.get('jwtsecret'), { expiresIn: 3600 });
                if (!token) throw Error('Couldnt sign the token');

                //Sender OK svar tilbake hvis det ikke har skjedd en error enda
                res.status(200).json({
                    token,
                    user: {
                        id: user.id,
                        name: user.username,
                        password: user.password
                    }
                })  
            });        
        })
});

<<<<<<< HEAD
//Sletter brukeren med den IDen i databasen
=======
//Sletter en admin med gitt ID
>>>>>>> 6eaf6842a9c4e3a4f66cfe8e549a2a3130d774ba
router.delete('/:id', (req,res,next) => {
    Admin.findOneAndDelete({'_id':req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
<<<<<<< HEAD
//Henter alle brukere
=======
//Henter alle admin-objekter
>>>>>>> 6eaf6842a9c4e3a4f66cfe8e549a2a3130d774ba
router.get('/', (req, res, next) => {
    Admin.find()
        .then(data => res.json(data))
        .catch(next)
});

<<<<<<< HEAD
//Henter brukeren med spesifisert ID
=======
//Henter admin med gitt ID
>>>>>>> 6eaf6842a9c4e3a4f66cfe8e549a2a3130d774ba
router.get('/:id', (req, res, next) => {
    Admin.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
<<<<<<< HEAD
//Henter brukere med det brukernavnet
=======
//Henter admin med gitt brukernavn
>>>>>>> 6eaf6842a9c4e3a4f66cfe8e549a2a3130d774ba
router.get('/username/:username', (req, res, next) => {
    Admin.find({"username": req.params.username})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;