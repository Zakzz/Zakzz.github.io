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
  			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
  		},
  		success: function(data) {
  			$contactForm.find('.alert--loading').hide();
  			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
  		},
  		error: function(err) {
  			$contactForm.find('.alert--loading').hide();
  			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
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
