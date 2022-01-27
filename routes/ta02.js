//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();


let users = ["hunter44", "coolkid33", "blakecake"];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    userlists: users,
  });
});

router.post('/addUser', (req, res, next) =>{
  users.push(req.body.users);
  console.log(users);
  res.redirect('/ta02');  
});



router.post('/removeUser', (req, res, next) =>{
 var user = req.body.users;
 console.log(user);
 users = users.filter((name) => name != user);
res.redirect('/ta02');    
});



module.exports = router;
