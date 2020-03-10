const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const config = require('config');

/// Register a new User
router.post('/register', async(req, res) => {
    const {username, password, kollektiv, fornavn, etternavn} = req.body;

    if(!username || !password) return res.status(400).json({msg: "Please enter all fields"});

    try {

        const salt = await bcrypt.genSalt(10);
        if(!salt) throw Error("something wrong with salt");
        const hash = await bcrypt.hash(password, salt);
        if(!hash) throw Error("something wrong with hash");

        const newUser = new User({
            username: username,
            password: hash,
            kollektiv: kollektiv,
            fornavn: fornavn,
            etternavn: etternavn
        });

        const saveUser = await newUser.save();

        const token = jwt.sign({id: saveUser._id}, config.get('jwtsecret'), {expiresIn: 3600});

        res.status(200).json({
            token,
            user: {
                id: saveUser._id,
                username: saveUser.username,
                password: saveUser.password,
                kollektiv: saveUser.kollektiv,
                fornavn: saveUser.fornavn,
                etternavn: saveUser.etternavn
            }
        });
    } catch (e) {res.status(400).json({error: e.message})};
});

///login
router.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) return res.status(400).json({msg: "Please enter all fields"});

    User.findOne({ username })
        .then( user => {
            if(!user) return res.status(400).json({msg: "User Does not exist"});

            bcrypt.compare(password, user.password).then((result) =>{
                if(result === false) return res.status(400).json({msg: "password does not match"});

                const token = jwt.sign({ id: user._id }, config.get('jwtsecret'), { expiresIn: 3600 });
                if (!token) throw Error('Couldnt sign the token');

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

//Sletter en bruker med gitt ID
router.delete('/:id', (req,res,next) => {
    User.findOneAndDelete({'_id':req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
//Henter alle brukere
router.get('/', (req, res, next) => {
    User.find()
        .then(data => res.json(data))
        .catch(next)
});

//Henter en bruker med gitt ID
router.get('/:id', (req, res, next) => {
    User.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
//Henter en bruker med gitt brukernavn
router.get('/username/:username', (req, res, next) => {
    User.find({"username": req.params.username})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;