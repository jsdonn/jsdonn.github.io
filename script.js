
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const name = document.querySelector('#myname');
  if(this.scrollY <= window.innerHeight - 35) {
  	nav.className = '';
  	name.className = '';
  } else {
  	nav.className = 'scroll';
  	name.className='scroll';
  }
};

function goToSection(str) {
	document.getElementById(str).scrollIntoView(true);
}

(function($) {
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
})(jQuery);