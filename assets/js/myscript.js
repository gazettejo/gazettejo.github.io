function changeImage(clicked_id) {
	var MAX_NUM_IMG_PER_PORTION = 3;
	
	var portion_index = 3;
	if(clicked_id == "top_img"){
		portion_index = 1;
	} else if (clicked_id == "mid_img"){
		portion_index = 2;
	} 
	
	var arr = document.getElementById(clicked_id).src.split("/");
	var img_file_name = arr[arr.length - 1];
	var img_index = parseInt(img_file_name.charAt(img_file_name.length - 5));
	
	document.getElementById(clicked_id).src = ("images/switch/").concat(portion_index, ".", img_index == MAX_NUM_IMG_PER_PORTION ? 1 : img_index + 1, ".jpg");
}

function changeImageEN(clicked_id) {
	var MAX_NUM_IMG_PER_PORTION = 3;
	
	var portion_index = 3;
	if(clicked_id == "top_img_en"){
		portion_index = 1;
	} else if (clicked_id == "mid_img_en"){
		portion_index = 2;
	} 
	
	var arr = document.getElementById(clicked_id).src.split("/");
	var img_file_name = arr[arr.length - 1];
	var img_index = parseInt(img_file_name.charAt(img_file_name.length - 5));
	
	document.getElementById(clicked_id).src = ("images/switch/").concat(portion_index == 3 ? "en" : "", portion_index, ".", img_index == MAX_NUM_IMG_PER_PORTION ? 1 : img_index + 1, ".jpg");
}

// prevent right-clicking on images
$(document).ready(function(){
	$('img').bind('contextmenu', function(e) {
	    return false;
	}); 
});