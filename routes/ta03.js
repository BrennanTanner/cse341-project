//TA03 PLACEHOLDER
const { application } = require('express');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

let datalist = [];

(async ()=> {
  try {
    let response = await fetch(url)
    datalist = await response.json();
  } catch (error) {
    console.log('error');
  }
})();

router.post('/search', (req, res, next) =>{
  let newData = [];
  for (let i = 0; i < datalist.length; i++){
    for (let x = 0; x < datalist[i].tags.length; x++){
      if (datalist[i].tags[x] == this.search) {
        newData[i] = datalist[i];
        console.log(newData[i]);
      }

  }
  }
  for (let i = 0; i < newData.length; i++){
    if (i < newData.length){
  datalist[i] = newData[i];
  }
  else{
    datalist.splice(i, 1);
  }
  console.log(users);
  res.redirect('/ta02');  
}
});

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    datalist: datalist,
  });
});


module.exports = router;
