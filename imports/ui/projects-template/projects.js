import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Projects } from '../../api/projects.js';
import './projects.html';
import '../cards/project-card/project-card.js';

Template.projects.onCreated(function projectsOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('projects');
});

Template.projects.helpers({
  projects() {
    return Projects.find({}, { sort: { createdAt: -1 } });
  },
});

Template.projectCard.events({
  'click .project': function() {
    // go to project template for given project
    Router.go('project.show', { name: this.name });
  }
});