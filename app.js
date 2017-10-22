$("#add").click(function() {
	$("#nextEntry").slideToggle("200");
});

$("#nextEntry").keypress(function(event) {
	if(event.which === 13) {
		var todo = $("#nextEntry").val();
		$("#todos").append("<li> <i class='del material-icons'>delete</i>" + todo + '</li>');
		$("#nextEntry").val("");
	}
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$(document).on('click', ".del", function(){
    $(this).parent().remove();
});