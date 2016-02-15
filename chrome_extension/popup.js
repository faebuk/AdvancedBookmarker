document.addEventListener('DOMContentLoaded', function() {	
	$( "#form" ).submit(function( event ) {
		event.preventDefault();
	  	
	  	var url = $("#url").val();
		var title = $("#title").val();
		var icon = $("#icon").val();
		var description = $("#description").val();
		var tags = $("#myTags").tagit("assignedTags");

		var requestBody = {
			url: url,
			title: title,
			icon: icon,
			description: description,
			tags: tags
		};

		console.log(requestBody);

		$.ajax({
            type : 'POST',
            url : 'http://localhost:3000/api/bookmarks',
            data : JSON.stringify(requestBody)
        }).done(function() {
        	window.close();
        	console.log("success")
        })
        .fail(function(error) {
        	console.log(error)
        }); 
	});
	$("#myTags").tagit({
		availableTags: ["javascript", "programming", "sapui5", "angularjs", "meteor", "python", "tutorial"],
		autocomplete: {
			autoFocus: true
		},
		showAutocompleteOnFocus: true,
		placeholderText: "Tag your link ..."
	});

	chrome.tabs.getSelected(null, function(tab) {
		$("#url").val(tab.url);
		$("#title").val(tab.title);
		$("#icon").val(tab.favIconUrl);
	});
});