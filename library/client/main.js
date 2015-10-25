Meteor.subscribe('books');

listBooks = function () {
	return Books.find();
}