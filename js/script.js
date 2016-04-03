$(document).ready(function(){
	// if(window.innerWidth<950){
	// $(".navbar-toggle, .navbar-header").on("click",function(){		
	// 	$(".navbar-collapse").slideToggle(500);
	// })}else{


	// $(".navbar-header").on("click",function(){
	// 	$(".navbar-collapse").slideToggle(500);
	// })}


	$(".navbar-header").on("click",function(){		
		$(".navbar-collapse").slideToggle(500);
	});
// **********************************************
	// $(document).mouseup(function (e) //click anywhere to close navbar-collapse
	// {
	//     var container = $(".navbar-collapse");

	//     if (!container.is(e.target) // if the target of the click isn't the container...
	//         && container.has(e.target).length === 0) // ... nor a descendant of the container
	//     {
	//         container.slideUp();
	//     }
	// });

//***********************************************
	$("#social-media").on("click",function(){
		$(".social-logo").slideToggle(500);
	})
	// $("#thank-you").on("click",function(){
	// 	$(".slide").slideToggle(500);
	// })
// **********************************************
	function autohide(){
		var documentElem=$(document); 
		var nav=$("#navbar .container");
		var soc=$("#social").outerHeight();
		var lastScrollTop=0;
		documentElem.on("scroll",function(a){
			var currentScrollTop=$(this).scrollTop();
			
			//scroll down
			if(currentScrollTop>lastScrollTop&&currentScrollTop>soc) {
				nav.slideUp(); $(".navbar-collapse").slideUp();
			}
			//scroll up
			else {nav.slideDown();}
			lastScrollTop=currentScrollTop;
		});
	};
		// autohide();

	// if(window.innerWidth<950){
	// 	autohide();
	// }

	// var eventFired=0;
	// if($(window).width()<950){
	// 	autohide();
	// }else{
	// 	eventFired=1;
	// }

	// $(window).on("resize",function(){
	// 	if(!eventFired){
	// 		if($(window).width<950){
	// 			autohide();
	// 		}
	// 	}
	// })



	



	// if(window.width<950){ //not working
	// autohide();
	// console.log(window.width);
	// }else{
	// 	console.log("funguje");
	// }




// ***********************************************
	// $("#thank-you").on("click",function(){
	// 	$("nav").addClass("hidden");
	// })
// ***********************************************
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  3000);
// ***********************************************
	function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(50.0833,14.4167),
	    zoom:13,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);


// ************************************************
// click on navbar will animate to chose menu section
  $("a").on("click", function(e) {
    var msg = $(this).attr("href");
    var menu = $("nav");
    // *********************************************************add 472px = height of navbar
    $("html, body").stop().animate({ scrollTop: $(msg).offset().top+472 - menu.height() }, 500); 
    e.preventDefault();
  });
// ************************************************
// if email adress is wrong
  if(document.addEventListener){
    document.addEventListener('invalid', function(e){
      e.target.className += ' invalid';
    }, true);
  }
// ************************************************
// ************************************************
})

