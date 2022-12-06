$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url:  '../pages/footer.html',
		dataType: 'html',
		success: function(result){
			$('#end').prepend(result);
		}
	});//end ajax
});