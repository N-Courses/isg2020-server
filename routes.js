module.exports = (app) => {

    const studentCtrl = require('./controllers/student.controller')
    app.post('/add_student', studentCtrl.createStudent)
    app.get('/all_students' , studentCtrl.getAll)
    app.get('/student/:id' , studentCtrl.getById)
    app.put('/update_score/:id' , studentCtrl.updateScore)
    app.put('/update_student/:id' , studentCtrl.updateStudent)
    app.delete('/student/:id' , studentCtrl.remove)


    app.post('/register' , studentCtrl.register);
    app.post('/login' , studentCtrl.login);

    // controller 2


}