Template.navigation.helpers({
  currentPage: function(){
    //return Session.get('currentPage');
    return "Home";
  }
});

// If navigation template is rendered
Template.navigation.onRendered(function () {
  // Initialise sidenav
  $('.button-collapse').sideNav({
    closeOnClick: true
  });
});

// Events for the navigation template
Template.navigation.events({

});
