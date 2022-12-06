$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url:  '../pages/home.html',
		dataType: 'html',
		success: function(result){
			$('#info_tab').prepend(result);
		}
	});//end ajax
});