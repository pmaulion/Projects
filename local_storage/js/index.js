$(function () {



	$('#box-1').click (function() {
		localStorage.setItem("key", "1");
	});

	$('#box-2').click (function() {
		localStorage.setItem("key", "2");
	});
	
	$('#box-3').click (function() {
		localStorage.setItem("key", "3");
	});

	$('#next').click (function(){
		window.open("next.html", "_self");
	})

	$('#box-4').ready (function() {
		var score = localStorage.getItem("key");
		$('#box-4').text("You're score is " + score + " out of 3")
	});

	$('#box-5').click (function() {
		window.open("index.html", "_self");
		localStorage.setItem("key", "0");
	});

});