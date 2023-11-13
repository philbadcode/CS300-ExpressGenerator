var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET dashboard page with comments. */
router.get('/dashboard', async function(req, res, next) {
  try {
    // Fetch comments from jsonplaceholder using axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const comments = response.data;

    // Render the dashboard template with the comments data
    res.render('dashboard', { title: 'Social Media Dashboard', comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;