Router.route('/', {name: 'home'}, function () {
  this.render('home');
});

Router.route('/search',{name: 'search'} ,function () {
  this.render('search');
});

Router.route('/hottest',{name: 'hottest'}, function () {
  this.render('hottest');
});

Router.route('/news', {name: 'news'},function () {
  this.render('news');
});

Router.route('/toprated', {name: 'toprated'}, function () {
  this.render('toprated');
});

Router.route('/tags',{name: 'tags'}, function () {
  this.render('tags');
});

Router.route('/about', {name: 'about'},function () {
  this.render('about');
});
