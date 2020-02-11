const express = require ('express');
const router = express.Router();
const Kollektiv = require("../models/kollektiv")




router.delete('/kollektiv/:id', (req, res, next) => {
    Kollektiv.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})


router.get('/kollektiv', (req, res, next) => {
    //this will return all the data, exposing only the id and action field to the client
    Kollektiv.find({}, 'nummer')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/kollektiv', (req, res, next) => {
    if(req.body.nummer){
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
