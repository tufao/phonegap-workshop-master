window.onload = function() {
	document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
	$(".messages").html("device ready!");
}