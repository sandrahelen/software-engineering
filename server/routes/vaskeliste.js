const express = require ('express');
const router = express.Router();
const Vaskeliste = require("../models/vaskeliste");
//Henter alle vaskelister
router.get('/', (req, res, next) => {
    Vaskeliste.find()
        .then(data => res.json(data))
        .catch(next)
});
//Lager ny vaskeliste
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
//Henter en gitt vaskeliste på ID
router.get('/:id', (req, res, next) => {
    Vaskeliste.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

//Oppdaterer en gitt vaskeliste
router.put('/:id', (req, res, next) => {
    Vaskeliste.updateOne(req.body)
        .then(data => res.json(data))
        .catch(next)
});

//Sletter en gitt vaskeliste
router.delete('/:id', (req, res, next) => {
    Vaskeliste.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});


module.exports = router;