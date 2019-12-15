const router = require("express").Router();
const { join } = require('path');
const { fileUpload } = require('../services/file-upload');
const postsData = require("../tests/seed_data/seed-posts.json");


// Create post
router.post('/', (req, res) => {
  try {
    res.status(200).send(req.body);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
  

// Get all posts
router.get('/', (req, res) => {

  try {
    res.status(200).json(postsData);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});


// Get one post
router.get('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const post = postsData.find(data => data.id === Number(id));

    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});


// Update post
router.put('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const post = postsData.find(data => data.id === Number(id));

    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});


// Delete post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  try {
    const post = postsData.find(data => data.id === Number(id));
  
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
  
    res.status(200).json(post);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
});


// Upload file
router.post('/file/upload', fileUpload.single('file'), (req, res) => {
  try {
    res.status(200).send(req.file);
  } catch (e) {
    res.status(400).send(e);
  }
});


// Download file
router.get('/file/download', (req, res) => {
  
  try {
    const sampleFile = join(__dirname, '../tests/seed_data/sample.txt');

    res.contentType('Content-Type', 'text/html');
    res.status(200).download(sampleFile);

  } catch(e) {
    res.status(400).send({ error: e.message });
  }
});


module.exports = router;
