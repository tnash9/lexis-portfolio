import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const RecentSongs = new Mongo.Collection('recentSongs');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('recentSongs', function recentSongsPublication() {
        return RecentSongs.find();
    });
}

Meteor.methods ({
  'recentSongs.api'() {
    // console.log("here");
    // HTTP.call(
    //   'GET',
    //   'https://accounts.spotify.com/authorize',
    //   { headers: {
    //     'Access-Control-Allow-Origin': '*' 
    //     },
    //     data: {
    //       client_id: 'e126c5aaa0164b77b7a637c13145029e',
    //     response_type: 'code',
    //     redirect_uri: 'home.html',
    //     scope: 'user-read-recently-played'
    //     }
    //   },
    //   function(error, result) {
    //     if (result) {
    //       console.log("there");
    //       return result;
    //     } else {
    //       throw error;
    //     }
    //   }
    // );

    // HTTP.call(
    //   'GET',
    //   'https://api.spotify.com/v1/me/player/recently-played?limit=4',
    //   { headers: { Accept: 'application/json',
    //   Authorization: 'Bearer BQA56X7DSrAN2nsPUL5YMdEMBayrPvLVQZPBZY06YJzKRZP1kW8es-_iDwneqw0e1HeFXUjit8petV8v4m8E7M4aOvUJNszIpzKM1nUOa9rKhXHMU1xHIyfmBiY818NrzFforapLoTgyx6Nx_IdJ5KrG9CMHJRpH' 
    //   }},
    //   function(error, result) {
    //     if (result) {
    //       // remove current songs
    //       songs = RecentSongs.find();
    //       for (const song of songs) {
    //         RecentSongs.remove(song._id);
    //       }

    //       // loop through current songs and add
    //       const items = result.data.items;
    //       for (const item of items) {
    //         let title = item.track.name;
    //         title = title.includes('feat') ? title.slice(0, title.indexOf('(')) : title;
    //         const image = item.track.album.images[1].url;
    //         let album = item.track.album.name;
    //         album = album.includes('feat') ? album.slice(0, album.indexOf('(')) : album;
    //         const artist = item.track.artists[0].name;
    //         const link = item.track.external_urls.spotify;

    //         RecentSongs.insert({
    //           title,
    //           album,
    //           artist,
    //           image,
    //           link
    //         });
    //       }
    //     } else {
    //       throw error;
    //     }
    //   }
    // );
  }
})