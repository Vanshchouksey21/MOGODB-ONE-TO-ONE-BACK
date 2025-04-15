const express = require('express');
const router = express.Router();
const {datasave} = require('../Controller/AuthorController');


router.post('/datasave'  ,datasave);

module.exports = router;