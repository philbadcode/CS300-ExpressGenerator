var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET dashboard page with posts. */
router.get('/', async function(req, res, next) {
  try {
    // Fetch posts from jsonplaceholder using axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    // Render the dashboard template with the posts data
    res.render('dashboard', { title: 'Social Media Dashboard', posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;