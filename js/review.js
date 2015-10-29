// Initialize Parse app
Parse.initialize('7g0IcFNZgrVGfIw87hhtuk0SVrPHjbkko0Ig14ab', '453hAL0MbEkghrmwYwvaU13T1CU5LKQm8dkDGqzb');

var Review = Parse.Object.extend('Review');



//var review = new Review();

$('form').submit(function() {
	var review = new Review();
	var title = $('#title').val();
	var description = $('#description').val();
	var rating = $('stars').raty();

	review.set('title', title);
	review.set('description', description);
	reviewItem.set('rating', parseInt(rating));

	review.save(null, {
		success:getData
	});

	$('#title').val(' ')
	$('#description').val(' ')

	return false
})

// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class
	var query = new Parse.Query(Review)

	// Set a parameter for your query -- where the website property isn't missing
//	query.notEqualTo('website', '')

	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
	query.find({
		success:function(results) {
			buildList(results)
		} 
	})
}

var buildList = function(data) {
	// Empty out your ordered list
	$('ol').empty()

	// Loop through your data, and pass each element to the addItem function
	data.forEach(function(d){
		addItem(d);
	})
}

var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
	var title = item.get('title')
	var description = item.get('description')
	
	// Append li that includes text from the data item
	var head = $("<h4 class='rev'>" + title + "</h4>")
	var text = $("<p class='rev'>" + description + '</p>')

	$('ol').append(head)
	$(head).after(text)

	

}

// Call your getData function when the page loads
getData()






