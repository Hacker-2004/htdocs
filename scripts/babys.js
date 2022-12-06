$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url:  '../subpages/babys.html',
		dataType: 'html',
		success: function(result){
			$('#info_tab').prepend(result);
		}
	});//end ajax
});