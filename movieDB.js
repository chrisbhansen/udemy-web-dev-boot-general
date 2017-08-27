var movies = {};
movies.data = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 3.5,
		hasWatched: false
	},
	{
		title: "Truman",
		rating: 3,
		hasWatched: true
	}
]

movies.print = function(){
	this.data.forEach(function(movie){
		var result = "You have ";
		if(movie.hasWatched){
			result += "watched ";
		} else {
			result += "not seen ";
		}
		result += "\"" + movie.title + "\"";
		result += " - " + movie.rating + " stars";
		console.log(result);
	});
}


// movies.forEach(function(movie){
// 	var result = "You have ";
// 	if(movie.hasWatched){
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.title + "\"";
// 	result += " - " + movie.rating + " stars";
// 	console.log(result);
// })