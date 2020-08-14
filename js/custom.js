$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#fbbd41"});
    $('#bar2').barfiller({barColor: "#fbbd41"});
    $('#bar3').barfiller({barColor: "#fbbd41"});
    $('#bar4').barfiller({barColor: "#fbbd41"});
    $('#bar5').barfiller({barColor: "#fbbd41"});
    $('#bar6').barfiller({barColor: "#fbbd41"});
});

// portfolio isotope



$(".portfolio_menu ul li").click(function(){
	var selector = $(this).attr("data-filter");
	$(".portfolio_isotope").isotope({
		filter: selector,
	});
	
});




$(".portfolio_isotope").isotope();


// testimonial carousel 



var owl = $("#t_active");
owl.owlCarousel({
    items:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// scroll to top

$(window).scroll(function(){

	if($(window).scrollTop() > 500)
	{
		$(".scroll_to_top").fadeIn();
	}
	else
	{
		$(".scroll_to_top").fadeOut();
	}

});


$(".scroll_to_top").click(function(){
	$("html").animate({
		scrollTop:0,
	},2000);
});


// scroll section

var scrollLink = $(".scroll");


scrollLink.click(function(e){
	e.preventDefault();
	$("body,html").animate({
		scrollTop: $(this.hash).offset().top
	},2000);
})

//active link switching


$(window).scroll(function(){
	var scrollbarLocation = $(this).scrollTop();
	//varaible on the top
	scrollLink.each(function(){
		var sectionOffset = $(this.hash).offset().top -10;
		if( sectionOffset <= scrollbarLocation){
			$(this).parent().addClass("m_active");
			$(this).parent().siblings().removeClass("m_active");
		}
	})
});





// sticky menu

window.addEventListener("scroll",function(){
	var header = document.querySelector(".header_section");
	header.classList.toggle("sticky",window.scrollY > 0)
})


//Heading typing js

var typed = new Typed('.typing', {
  strings: ["Web Designer", "and Developer!"],
  typeSpeed: 100,
  loop:true,
  backSpeed:40,
  backDelay:1000,
});


// hambarger menu

const bar_menu = document.querySelector(".bar_menu");
const ul = document.querySelector(".main_menu ul");
const links = document.querySelector(".main_menu ul li");



bar_menu.addEventListener("click", () =>{
	ul.classList.toggle("open");
})