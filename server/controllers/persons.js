require("../models/users");
const mongoose = require("mongoose");
const users = mongoose.model("users");

exports.getAllPersons = (req, res) => {
    users.find().exec( (error, allPersons) => {
        if(error){
            return res.status(500).json({
                error : "oops! something went wrong."
            })
        }
        if(!allPersons){
            return res.status(404).json({
                error : "request not found!!"
            })
        }
        return res.status(200).json(
            allPersons
        )
    })
};

exports.createPerson = (req, res) => {
    const user = new users(req.body);
    user.save( (error, user) => {
        if(error){
            return res.status(500).json({
                error : "Ooppss!! Something went wrong!!"
            })
        }
        return res.status(200).json({
            person : user
        })
    })
};

exports.editPerson = (req, res) => {
    let person={
    first_name :req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    mobile_number: req.body.mobile_number,
    gender: req.body.gender
    }
    console.log(req.body.first_name)
    console.log(req.params)
    users.findByIdAndUpdate(
        req.params.personId,
        {
            $set: person
        },
        {new:true},
        (err, user)=>{
            if (err ){
                return res.status(400).json({
                    error : "oops!something went wrong"
                })
            }
            res.json(user);
        }
    )
};

exports.deletePerson = (req, res) => {
    users.findOneAndRemove(
        { _id: req.params.personId},
        (error, user) => {
        if(error){
            return res.status(500).json({
                error : "Oppss!! Something went wrong!!"
            })
        }
        if(!user){
            return res.status(404).json({
                error : "Person not found"
            })
        }
        return res.status(200).json({
            person : `${user.first_name} ${user.last_name} is deleted successfully`
        })
    })
};