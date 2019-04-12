import '../imports/ui/site.js';

Router.route('/', function () {
  this.render('home');
});

Router.route('/projects', function () {
  this.render('projects');
});

Router.route('/contact', function () {
  this.render('contact');
});