const express = require('express');
const router = express.Router();

//İndex Page Routes
router.get('/', (req,res) => res.render('welcome'));

module.exports = router;