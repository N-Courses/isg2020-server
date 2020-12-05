const Student = require('../models/student.model');

exports.createStudent = (req, res) => {
    console.log(req.body);
    var new_student = new Student(req.body)
    new_student.save((err , result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });
}

exports.getAll = (req , res)=>{

    Student.find()
    .then((result)=>{
        res.send(result);
    })
}

exports.getById = (req , res)=>{

    var id = req.params.id;
    Student.findOne({_id : id})
    .then((result)=>{
        res.send(result);
    })
}

exports.updateScore = (req , res)=>{

    var id = req.params.id;
    var score = req.body.score;
    Student.updateOne({_id : id} , {score : score})
    .then((result)=>{
        res.send(result)
    })
}
exports.updateStudent = (req , res)=>{

    var id = req.params.id;
    Student.updateOne({_id : id} , req.body)
    .then((result)=>{
        res.send(result)
    })
}

exports.remove = (req , res)=>{

    var id = req.params.id;
    Student.remove({_id : id})
    .then((result)=>{
        res.send(result)
    })
}