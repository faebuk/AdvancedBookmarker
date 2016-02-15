FlowRouter.notFound = {
  action: function(params) {
    Session.set('currentPage', 'Page not found');
    BlazeLayout.render("mainLayout", {content: "notFound"});
  }
}

exposed = FlowRouter.group({

});

exposed.route('/', {
  name: 'home',
  action: function(params) {
    Session.set('currentPage', 'Home');
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});