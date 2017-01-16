$(document).ready(function(){

var $contactForm = $('form');

$contactForm.submit(function(e) {
  	e.preventDefault();
  	$.ajax({
  		url: '//formspree.io/stukan.lukasz@gmail.com',
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json',
  		beforeSend: function() {
  			$contactForm.append('');
        $('<span class="glyphicon glyphicon-send" aria-hidden="true"></span>').appendTo($contactForm);
  		},
  		success: function(data) {
  			$contactForm.find('.alert--loading').hide();
        $('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>').appendTo($contactForm);
  		},
  		error: function(err) {
  			$contactForm.find('.alert--loading').hide();
        $('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>').appendTo($contactForm);
  		}
  	});
  });

  $("#navbar ul li a[href^='#']").on('click', function(e) {
     // prevent default anchor click behavior
     e.preventDefault();

     // store hash
     var hash = this.hash;

     // animate
     $('html, body').animate({
         scrollTop: $(hash).offset().top - 50
       }, 300, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
       });

  });

});
