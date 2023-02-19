const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 6,
	speed: 500,
	scale: 1.03,
	glare: true,
	reset: true,
	perspective: 1000,
	transition: true,
	"max-glare": 0.45,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});




$('.slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});






$('.slider2').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
});






const form = document.querySelector('#my-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('Your Message is submitted to the owner.')
	window.location.reload()
});
const form2 = document.querySelector('#form2');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('Your Email is saved for future updates.')
	window.location.reload()
});