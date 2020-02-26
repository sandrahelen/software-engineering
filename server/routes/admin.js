const express = require ('express');
const router = express.Router();
const Admin = require("../models/admin");

router.get('/', (req, res, next) => {
    Admin.find()
        .then(data => res.json(data))
        .catch(next)
});

router.post('/', (req, res, next) => {
    if(req.body){
        Admin.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/:id', (req,res,next) => {
    Admin.findOneAndDelete({'_id':req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

router.get('/username/:username', (req, res, next) => {
    Admin.find({"username": req.params.username})
        .then(data => res.json(data))
        .catch(next)
});

router.get('/:id', (req, res, next) => {
    Admin.find({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});


router.put('/:id', (req, res, next) => {
    if(Admin.find({"_id": req.params.id})){
        Admin.updateOne(req.body)
            .then(data => res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "User does not exist"
        })
    }

});

module.exports = router;