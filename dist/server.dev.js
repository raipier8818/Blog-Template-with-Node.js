"use strict";

var http = require('http');

var express = require('express');

var info = require('./public/script/info');

var readPost = require('./public/script/readPosts');

var PORT = parseInt(info.port);

var ghrepos = require('ghrepos');

var mysql = require('mysql');

var bodyParser = require('body-parser');

var _require = require('http2'),
    connect = _require.connect;

var _require2 = require('pug'),
    render = _require2.render;

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);
app.use(info["static"], express["static"](__dirname + info["static"]));
app.use(bodyParser.urlencoded({
  extended: false
}));
setInterval(function () {
  http.get(info.address);
}, 600000);
var connection = mysql.createConnection(info.database);
connection.connect(); // Main Page

app.get('/', function (req, res) {
  res.render('index', {
    main: info.main,
    pageName: info.body
  });
});
app.get('/login', function (req, res) {
  // res.render('login', {main: info.main})
  res.render('index', {
    pageName: 'login',
    main: info.main
  });
});
app.post('/login', function (req, res) {
  console.log(req.body);
  var user = {
    "username": req.body.userId,
    "password": req.body.userPassword
  };
  res.redirect('/');
});
app.get('/register', function (req, res) {
  res.render('index', {
    pageName: 'register',
    main: info.main
  });
});
app.post('/register', function (req, res) {
  res.redirect('/');
});
app.get('/profile', function (req, res) {
  var authOptions = {
    use: info.profile.github.id,
    token: process.env.TOKEN
  }; // console.log(authOptions);

  ghrepos.listUser(authOptions, info.profile.github.id, function (err, repolist) {
    // console.log((repolist));
    // console.log(authOptions);
    if (repolist == undefined) {
      repolist = [];
    }

    res.render('index', {
      pageName: 'profile',
      main: info.main,
      profile: info.profile,
      repolist: repolist
    });
  });
});
app.get('/post', function (req, res) {
  var postListObj = readPost.list("./post");

  if (req.query.id === undefined) {
    res.render('index', {
      pageName: 'postList',
      main: info.main,
      profile: info.profile,
      postListObj: postListObj
    });
  } else {
    var postFileName = readPost.findFilebyId(postListObj, req.query.id);
    if (postFileName === undefined) next(); // console.log(postListObj[postFileName].pug);

    res.render('index', {
      pageName: 'post',
      main: info.main,
      profile: info.profile,
      postHtml: postListObj[postFileName].html
    }); // res.send(index.mainPage(info.main, postListObj[postFileName].html));
  }
});
app.get('/category', function (req, res) {
  var postListObj = readPost.list("./post");
  var post_category = {};
  var keys = Object.keys(postListObj);
  keys.forEach(function (key) {
    // console.log(postListObj[key].title)
    if (post_category.hasOwnProperty(postListObj[key].category)) {
      post_category[postListObj[key].category].push({
        title: postListObj[key].title,
        id: postListObj[key].id,
        date: postListObj[key].date
      });
    } else {
      post_category[postListObj[key].category] = new Array();
      post_category[postListObj[key].category].push({
        title: postListObj[key].title,
        id: postListObj[key].id,
        date: postListObj[key].date
      });
    }
  });
  res.render('index', {
    pageName: 'category',
    main: info.main,
    profile: info.profile,
    categories: post_category
  });
});
app.get('*', function (req, res) {
  res.status(404).render('error', {
    error_num: 404,
    error_description: '404 Not Found'
  });
}); // server와 browser가 연결될때까지 기다리는 것

app.listen(process.env.PORT || PORT, function () {
  console.log('listening on 8080');
});