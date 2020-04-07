const express = require ('express');
const router = express.Router();
const Studentby = require("../models/studentby");

//TODO Trenger ikke denne
router.post('/', (req, res, next) => {
    if(req.body){
        Studentby.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});
//Henter alle studentbyer
router.get('/', (req, res, next) => {
    Studentby.find()
        .then(data => res.json(data))
        .catch(next)
});
//Henter en studentby med gitt ID
router.get('/:id', (req, res, next) => {
    Studentby.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
//Oppdaterer en studentby med gitt ID
router.put('/:id', (req, res, next) => {
        Studentby.updateOne(req.body)
            .then(data => res.json(data))
            .catch(next)
});

//Sletter en studentby med gitt ID
router.delete('/:id', (req, res, next) => {
    Studentby.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})


module.exports = router;