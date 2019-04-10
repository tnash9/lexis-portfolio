import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('comments', function commentsPublication() {
        return Comments.find();
    });
}

Meteor.methods({
    'comments.insert'(name, email, comment) {
        check(name, String);
        check(email, String);
        check(comment, String);

        Comments.insert({
            name,
            email,
            comment,
            createdAt: new Date(),
        });
    },
});