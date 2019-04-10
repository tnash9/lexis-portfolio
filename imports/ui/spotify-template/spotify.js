import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { RecentSongs } from '../../api/spotify.js';
import './spotify.html';
import '../cards/spotify-card/spotify-card.js';

Template.spotify.onCreated(function spotifyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('recentSongs');
});

Template.spotify.helpers({
  recentSongs() {
    Meteor.call('recentSongs.api');
    return RecentSongs.find();
  },
});