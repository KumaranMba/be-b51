const usersRouter = require('express').Router();

const User = require('../models/user');


// endpoint to view all the notes
usersRouter.get('/', (request, response) => {
  User.find({}, {})
        .then(user => {
            response.status(200).json(user);
        });
});

// endpoint to create a new resource based on the request data
usersRouter.post('/',(request,response) => {
    const user = new User(request.body);
   
    user.save()
       .then(()=>{
        response.status(201).json({message:'user created successfully'});
       });
});


//endpoint to fetch a single resource based on it
usersRouter.get('/:id',(request,response)=>{
    const id = request.params.id;

    User.findById(id)
      .then(user=>{
        response.status(200).json(user);
      })
      .catch(err =>{
        response.status(400).json({message: 'id does not exists'});
      })

});

// deletes a single resources based on id

usersRouter.delete('/:id',(request,response)=>{
    const id = request.params.id;

    User.findByIdAndDelete(id)
         .then(deletedNote =>{
                if(deletedNote){
                    response.status(200).json({message:'note deleted successfully'});
                }else{
                    response.status(400).json({message:'id does not exists'});
                }
         })
         .catch(err=>{
            response.status(404).json({message:'deleting note failed'});
         })
});

// replaceing the entire note object identified by an id
usersRouter.put('./:id',(request,response)=>{
    const id = request.params.id;
    
    const userToReplace = request.body;

    Note.findByIdAndUpdate(id,userToReplace)
       .then(updateNote=>{
        if(updateNote){
            response.status(200).json({message:'note replaced successfully'});
        }else{
            response.status(400).json({message:'id does not exists'});
        }
       })
       .catch(err => {
        response.status(404).json({message: 'replacing the note failed...'});
       });
});

// replaceing the entire note object identified by an id
usersRouter.patch('./:id',(request,response)=>{
    const id = request.params.id;
    
    const noteToPatch = request.body;

    User.findByIdAndUpdate(id,noteToPatch)
       .then(updateNote=>{
        if(updateNote){
            response.status(200).json({message:'note to Patched successfully'});
        }else{
            response.status(400).json({message:'id does not exists'});
        }
       })
       .catch(err => {
        response.status(404).json({message: 'Patching the note failed...'});
       });
});


module.exports = usersRouter;