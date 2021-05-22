const express = require(id = 'express');
const businessRoutes = express.Router();

let Business = require(id = './business.model');

//store route
businessRoutes.route('./add').post(function(req,res){
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.this.status(200).json({'business':'business is added successfully'});
        })
        .catch(err=>{
            res.status(400).send("unable to save to database");
        });
});

//get data
businessRoutes.route('/').get(function (req, res){
    Business.find(function (err, business){
        if(err)
            console.log(err);
        else{
            res.json(business);
        }
    });
});

//edit
businessRoutes.route('/edit/:id').get(function(req,res){
    let id = req.param.id;
    Business.findById(id,function(err,business){
        res.json(business);
    });
});

//update
businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.param.id, function (err,business){
        if(!Business)
            res.status(404).send("data is not found");
        else{
            business.person_name = req.body.person_name;
            business.business_name =  req.body.business_name;
            business.person_nic_no = req.body.person_nic_no;
            
            business.save().then(business =>{
                res.json('update complete');
            })
                .catch(err=>{
                    res.status(400).send("unable to update database");
                });
        }
    });
});

//delete
businessRoutes.route('/delete/:id').get(function (req,res){
    Business.findByIdAndRemove({_id:req.param.id},function(err,business){
        if(err)res.json(err);
        else res.json('successfully removed');
    });
    
});

module.exports = businessRoutes;