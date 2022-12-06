$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url:  '../pages/nav.html',
		dataType: 'html',
		success: function(result){
			$('#tags').prepend(result);
		}
	});//end ajax
});