const Student = require('../models/student.model');
const bcrypt = require('bcryptjs');
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


exports.register = (req , res)=>{
    var email = req.body.email;

    Student.findOne({email : email})
    .then((result)=>{
        if(result){
            res.status(403).send({msg : "student exist"})
        }else{
            var student = new Student(req.body);

                //generate private key

                bcrypt.genSalt(10 ,(error , key)=>{

                    //hash password
                    bcrypt.hash(student.password ,key ,(hash_err , hash_pwd)=>{
                        student.password = hash_pwd;
                        student.save()
                        .then((saved_student)=>{
                            res.send(saved_student)
                        })
                    } )
                })
        }
    })
}

exports.login = (req , res)=>{
    var email = req.body.email;
    var password = req.body.password;
    Student.findOne({email : email})
    .then((result)=>{
        if(!result){
            res.status(403).send({msg : 'undefined student'})
        }else{
            bcrypt.compare(password ,result.password , (err , success)=>{
                if(!success){
                    res.status(403).send({msg : 'invalid password'})
                }else{
                    res.send(result);
                }
            })
        }
    })
}