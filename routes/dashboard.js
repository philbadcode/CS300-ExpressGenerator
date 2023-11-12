var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET dashboard page with posts. */
router.get('/', async function(req, res, next) {
  try {
    // Fetch posts from jsonplaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Render the dashboard template with the posts data
    res.render('dashboard', { title: 'Social Media Dashboard', posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;