$(function() {

// Close Button
	$("#close").click(function(){
		$(".modal-container").fadeOut(500);
	});

	$("#close").mouseenter(function() {
		$("img").attr("src", "images/delete-hover.png")
	});

	$("#close").mouseleave(function(){
		$("img").attr("src", "images/delete.png")
	});



// FAQ Buttons
	// toggle hidden class 1
	$("#expand-1").click(function() {

		$("#expanded-1").toggleClass("hidden");
		$(".pointer-1").toggleClass("pointer-click");
		// reset other hidden section
		$("#expanded-2").addClass("hidden");
		$("#expanded-3").addClass("hidden");
		// reset pointers
		$(".pointer-2").attr("class", "pointer-2");
		$(".pointer-3").attr("class", "pointer-3");
	});

	// toggle hidden class 1
	$("#expand-2").click(function () {
		$("#expanded-2").toggleClass("hidden");
		$(".pointer-2").toggleClass("pointer-click");
		// reset other hidden section
		$("#expanded-1").addClass("hidden");
		$("#expanded-3").addClass("hidden");
		// reset pointers
		$(".pointer-1").attr("class", "pointer-1");
		$(".pointer-3").attr("class", "pointer-3");
	});

	// toggle hidden class 1
	$("#expand-3").click(function () {
		$("#expanded-3").toggleClass("hidden");
		$(".pointer-3").toggleClass("pointer-click");
		// reset other hidden section
		$("#expanded-1").addClass("hidden");
		$("#expanded-2").addClass("hidden");
		// reset pointers
		$(".pointer-1").attr("class", "pointer-1");
		$(".pointer-2").attr("class", "pointer-2");
	});

});