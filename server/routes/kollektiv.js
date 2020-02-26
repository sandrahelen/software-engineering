const express = require ('express');
const router = express.Router();
const Kollektiv = require("../models/kollektiv")
//Sletter et valgt kollektiv
router.delete('/:id', (req, res, next) => {
    Kollektiv.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})
//Returnerer alle kollektiv
router.get('/', (req, res, next) => {
    Kollektiv.find()
        .then(data => res.json(data))
        .catch(next)
});

//Returnerer et valgt kollektiv
router.get('/:id', (req, res, next) => {
    Kollektiv.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
//Oppdaterer et valgt kollektiv
router.put('/:id', (req, res, next) => {
    if(Kollektiv.find({"_id": req.params.id})){
        Kollektiv.updateOne(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "Kollektiv does not exist"
        })
    }

});


//Legger til et nytt kollektiv
//TODO Trenger kanskje ikke denne
router.post('/', (req, res, next) => {
    if(req.body){
        Kollektiv.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});

module.exports = router;
