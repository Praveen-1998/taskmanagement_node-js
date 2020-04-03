const express=require('express');
const router=express.Router();
const taskController=require('../Controller/task')


router.post('/postTask',taskController.postTaskDetails)

router.get('/getAlltasks' , taskController.getAlltasks)

router.get('/getParticularTask/:userName', taskController.getParticularUserTask)

router.delete('/deleteParticularTask/:id', taskController.deleteParticularUserTask)

router.post('/updateParticularTask', taskController.updateParticularUserTask)


module.exports=router;