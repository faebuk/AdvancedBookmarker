extractDomain = function(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

Template.home.onCreated(function(){
	var self = this;
	self.bookmarks = new ReactiveVar();

	self.autorun(function(){
		self.bookmarks.set(Bookmarks.find().fetch());
	})
})

Template.home.helpers({
	bookmarks(){
		return Template.instance().bookmarks.get();
	},
	getDomain(url){
		return extractDomain(url);
	},
	tagsAggregated(){
		var tagsAggregated = new Array();

		var tagsArray = Template.instance().bookmarks.get().map(function(bookmark){
			return bookmark.tags;
		});

		tagsArray.forEach(function(tags){
			tags.forEach(function(tag){
				if(tagsAggregated.indexOf(tag) == -1)
					tagsAggregated.push(tag);
			})
		});

		return tagsAggregated;
	}
})