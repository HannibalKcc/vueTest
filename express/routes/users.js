var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function (req, res, next) {
  // 把数据填装入ejs写的html页面中
  let list = [{_id: 1, username: 'huhansan', email: 'gogogo.com'}];
  res.render('userList', {
    user: list
  })
});

module.exports = router;
