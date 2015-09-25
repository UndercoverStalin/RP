function check_login() {
	window.location = 'main.html';
}
function load_page(page) {
	sessionStorage.setItem('rp_current_view', page);
	$("#center-column" ).load( page+".html", function() {});
}

function roleplay_initiate_content() {
	if(sessionStorage.getItem('rp_current_view')){
		$("#center-column" ).load( sessionStorage.getItem('rp_current_view')+".html", function() {});
	}else {
		load_page('posts');
	}
}