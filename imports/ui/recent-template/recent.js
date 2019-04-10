import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Projects } from '../../api/projects.js';
import './recent.html';
import '../cards/project-card/project-card.js';

Template.recent.onCreated(function recentOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('projects');
});

Template.recent.helpers({
  recents() {
    return Projects.find({}, { sort: { createdAt: -1 } }, { limit: 4 });
  },
});