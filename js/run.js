// get  https://www.googleapis.com/youtube/v3/search
//jenna marbles videos

$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm =$('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	var params = {
		r: 'json',
		part: 'snippet',
		key: ('AIzaSyAPfYRKlZabDWLVyu3zlBL4HSlcIlk0g9w'),
		q:searchTerm,
		maxResults: 25
	};

	url= 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
}

function showResults(results){
	var html ="";
	$.each(results, function(index, value){
		html += '<p>' + value.snippet.title + '</p>';
		html += '<a href ="https://www.youtube.com/watch?v='+ value.id.videoId + '"><img src="' + value.snippet.thumbnails.default.url + '" /></a>'
	});
	$('#search-results').html(html);
}