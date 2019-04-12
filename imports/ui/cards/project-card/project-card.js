import './project-card.html';
import { Projects } from '../../../api/projects.js';

Template.projectCard.events({
  'click .project': function() {
    const project = Projects.findOne({_id: this._id});
    console.log(project);
  }
});