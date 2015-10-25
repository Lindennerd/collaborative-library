Template.home.helpers({
	books: function () {
		return listBooks();
	}
});

Template.newBook.events({
	'submit #newBook': function (event) {
		event.preventDefault();
		Meteor.call('addBook', 
			$('#bookName').val(),
			$('#bookAuthor').val(),
			$('#publishYear').val(),
			$('#tags').val(),
			$('#link').val()
			, function (error, result) {
				if (error) {
					alert(error);
				};
				$('#newBook :input[type="text"]').val('');
			});
	}
});