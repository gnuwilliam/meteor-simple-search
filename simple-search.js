Colors = new Meteor.Collection('colors');
Colors.initEasySearch('name');

if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
