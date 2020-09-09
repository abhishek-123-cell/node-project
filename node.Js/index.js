const express=require('express');
const port=8001;
const path=require('path');
const app=express();
// app.use(express.static('assets'));

const db=require('./config/mongoose');
const Contact = require('./modals/contact');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
// app.use(function(req,res,next){
//     console.log('middleware 1 called');
//     next();

// })

var contactList=[
    {
FirstName:'Abhishek',LastName:'Upadhyay',phone:'6205079820',email:'abhishekmou1@gmail.com',gender:'male'
    }
]
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:'lets play with ejs'
    });
});
app.get('/',function(req,res){
    Contact.find({},function(err,contacts){
        if(err){
            console.log('we r fetching db');
            return;
        }
    return res.render('home',{
        title:'Contact List',
        contact_list: contactList
    });
    });
});
app.post('/create-contact',function(req,res){
     
    Contact.create({
        
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        date: req.body.date,
        category:req.body.category


    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newContact);
            return res.redirect('back');
    })
  

});
//  contactList.push(req.body);
        
//         // FirstName: req.body.FirstName,
//         // LastName: req.body.LastName,

//         // phone: req.body.phone
        




// return res.redirect('/');
// });
app.get('/delete-contact/',function(req,res){
    console.log(req.query);
   let phone=req.query.phone;
   let contactIndex=contactList.findIndex(contact=>contact.phone==phone)
       if(contactIndex!=-1){
           contactList.splice(contactIndex,1);
       
   }
   return res.redirect('back');
});

app.listen(port,function(err){
if(err){
    console.log('error!!!!!',err);
}
console.log('my server is running at a port=',port);
})

