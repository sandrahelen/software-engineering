const express = require ('express');
const router = express.Router();
const Vaskeliste = require("../models/vaskeliste");

router.get('/', (req, res, next) => {
    Vaskeliste.find()
        .then(data => res.json(data))
        .catch(next)
});

router.post('/', (req, res, next) => {
    if(req.body){
        Vaskeliste.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.get('/:id', (req, res, next) => {
    Vaskeliste.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});


router.put('/:id', (req, res, next) => {
    Vaskeliste.updateOne(req.body)
        .then(data => res.json(data))
        .catch(next)
});


router.delete('/:id', (req, res, next) => {
    Vaskeliste.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});


module.exports = router;