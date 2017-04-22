$(function(){

	// Header top form Toggle
	$("#header-top-form_toggle_trigger").click(function(event) {
		event.preventDefault();
		$(".header-top #form-search-store").toggleClass('hide');
		$(".header-top #form-search").toggleClass('show');
	});
	////////////////////////////////////////////////////////////

});