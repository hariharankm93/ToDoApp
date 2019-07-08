const express = require('express');
const router = express.Router();
const ToDo = require('./models/todo');

router.get('/todos',(req,res,next)=>{
    ToDo.find({},'action').then(data => res.json(data)).catch(next)
});

router.post('/todos',(req,res,next)=>{
    if(req.body.action){
        ToDo.create(req.body).then(data => res.json(data)).catch(next)
    }
    else{
        res.json({
            error : 'Input field is empty'
        })
    }
})


router.delete('/todos/:id',(req,res,next)=>{
    ToDo.findByIdAndDelete({"_id": req.params.id}).then(data => res.json(data)).catch(next);
})

module.exports = router;