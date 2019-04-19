import '../imports/ui/site.js';
import { Projects } from '../imports/api/projects.js';

Router.route('/', function () {
  this.render('home');
});

Router.route('/projects', function () {
  this.render('projects');
});

// THIS FINDS A PROJECT BASED ON ID
// IT'S THE BETTER WAY TO DO IT, BUT DOESN'T LOOK AS GOOD IN BROWSER
// Router.route('/project/:id_str', function () {
//   this.render('project', {
//     data: function () {
//       // get id from params and ensure it's a number
//       let id = new Mongo.ObjectID(this.params.id_str);
//       console.log(id);
//       console.log(Projects.findOne({ _id: id }));
//       // find project with that id
//       return Projects.findOne({ _id: id });
//     }
//   });
// },
// {
//   name: 'project.show'
// });

Router.route('/project/:name', function () {
  this.render('project', {
    data: function () {
      // find project based on name
      return Projects.findOne({ name: this.params.name });
    }
  });
},
{
  name: 'project.show'
});


Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/hire', function () {
  this.render('hire');
});