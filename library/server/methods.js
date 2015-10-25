Meteor.methods({
	addBook: function(name, author, year, tags, link){
		Books.insert({
			name: name, author: author, year: year, tags: tags, link: link
		});
	}

});