const createdTask = require('../Models/task')

// To post user Tasks
exports.postTaskDetails = (req, res, next) => {
    let task = new createdTask({
        taskName: req.body.taskName,
        creationTimestamp: req.body.creationTimestamp,
        expiry: req.body.expiry,
        completionStatus: req.body.completionStatus,
        createdBy: req.body.createdBy
    })
    task.save().then(details => {
        console.log(details);
        res.json(details)
    }).catch(err => {
        console.log(err)
    })
}

//To get all user Tasks 
exports.getAlltasks = (req, res, next) => {
    createdTask.find().then(allTasks => {
        console.log(allTasks)
        res.json(allTasks)
    }).catch(err => {
        console.log(err);
    })
}

// To get particular user task
exports.getParticularUserTask = (req, res, next) => {
    let username = req.params.userName
    console.log(username, 'praveen');
    createdTask.find({'createdBy':username}).then(particularTask => {
        console.log(particularTask, 'task')
        res.json(particularTask)
    }).catch(err => {
        console.log(err);
    })
}

// To update particular user tasks
exports.updateParticularUserTask=(req,res,next)=>{
    let id=req.body.id;
    console.log(id);
    createdTask.findByIdAndUpdate(id).then(task=>{
        task.taskName=req.body.taskName,
        task.creationTimestamp=req.body.creationTimestamp,
        task.expiry=req.body.expiry,
        task.completionStatus=req.body.completionStatus,
        task.completionStatus=req.body.completionStatus,
        task.editTimestamp=req.body.editTimestamp,
        task.save();
        res.json(task)
}).catch(err=>{
    console.log(err);
})
}

// To delete particular user task
exports.deleteParticularUserTask = (req, res, next) => {
    let id = req.params.id
    console.log(id);
    createdTask.findByIdAndRemove(id).then(task => {
        res.json({
            message: 'task deleted successfully'
        })
    }).catch(err => {
        console.log(err);
    })
}
