var express = require('express');
var axios = require('axios');
var router = express.Router();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const comments = response.data;
    const shuffledComments = shuffleArray(comments);
    res.render('dashboard', { title: 'Social Media Dashboard', comments: shuffledComments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;