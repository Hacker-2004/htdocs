$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url:  '../subpages/abouts.html',
		dataType: 'html',
		success: function(result){
			$('#info_tab').prepend(result);
		}
	});//end ajax
});