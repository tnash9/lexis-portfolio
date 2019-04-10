import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './contact.html';
import '../comments-template/comments.js';

Template.contact.events({
  'submit .new-comment'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const name = target.name.value;
      const email = target.email.value;
      const comment = target.comment.value;

      Meteor.call('comments.insert', name, email, comment);

      // Clear form
      target.name.value = '';
      target.email.value = '';
      target.comment.value = '';
  },
});

