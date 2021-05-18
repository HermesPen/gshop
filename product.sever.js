var express = require('express');//获取express
var config = require('./config/index');//获取根目录config下的index.js

var port = process.env.PORT || config.build.port;//打开的端口号等于当前环境或上面index.js里增加的那个port

var app = express();

var router = express.Router();//express路由

router.get('/', function (req, res, next) {//返回index.html
  req.url = '/index.html';
  next();
});

app.use(router);//使用路由

var appData = require('./data.json');//访问json，下面三条都是data.json的数据
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {//配置接口获取json里的数据
  res.json({
    errno: 0,
    data: seller
  });
});

apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRoutes);//使用配置的请求数据接口

app.use(express.static('./dist'));使用静态文件夹下的文件

module.exports = app.listen(port, function (err) {//监听port端口
  if (err) {
    console.log(err);node product.sever.js
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n')
});