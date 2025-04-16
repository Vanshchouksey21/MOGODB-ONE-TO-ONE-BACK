const express = require('express');
const router = express.Router();
const {datasave , getAllBooks} = require('../Controller/AuthorController');


router.post('/datasave'  ,datasave);

router.get('/getdata', getAllBooks);

module.exports = router;