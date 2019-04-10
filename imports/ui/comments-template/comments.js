import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Comments } from '../../api/comments.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import './comments.html';
import '../cards/comment-card/comment-card.js';

Template.comments.onCreated(function commentsOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('comments');
});

Template.comments.helpers({
  comments() {
      // Most recent comments at top
      return Comments.find({}, { sort: { createdAt: -1 } });
  },
});