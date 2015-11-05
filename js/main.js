// Closes the Responsive Menu on Menu Item Click

$(document).ready(function() {
	$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
	});
});

$(document).ready(function(){
   $("btn-block").click(function() {
      menu.html = $(this).attr("menu.html");
      window.open(menu.html , 'menu.html');
      return false;
   });
});

