const express = require ('express');
const router = express.Router();
const User = require("../models/user");

router.get('/', (req, res, next) => {
    User.find()
        .then(data => res.json(data))
        .catch(next)
});

router.post('/', (req, res, next) => {
    if(req.body){
        User.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/:id', (req,res,next) => {
    User.findOneAndDelete({'_id':req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

router.get('/:id', (req, res, next) => {
    User.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

router.get('/username/:username', (req, res, next) => {
    User.find({"username": req.params.username})
        .then(data => res.json(data))
        .catch(next)
});

router.put('/:id', (req, res, next) => {
    if(User.find({"_id": req.params.id})){
        User.updateOne(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "User does not exist"
        })
    }

});

module.exports = router;