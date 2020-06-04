/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionsHTML = document.getElementsByTagName('section');
//turn HTMLCollection into an array
var sections = [].slice.call(sectionsHTML);

const headerInfo = document.getElementsByClassName('landing__container');
let navbarList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// determine if an element is in the visible viewport
const inViewport = (elem) => {
	const bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach((section) => {
	// creating <li> and <a> elements
	let liElement = document.createElement('li');
	let aTag = document.createElement('a');
	// add properties to <a> elements
	aTag.href = `#${section.id}`;
	aTag.innerText = section.dataset.nav;
	aTag.classList.add('menu__link');
	aTag.onclick = () => {
		const activeElements = document.querySelectorAll('.your-active-class');
		activeElements.forEach((el) => elem.classList.remove('your-active-class'));
		aTag.classList.add('your-active-class');
	};
	// build the menu 
	navbarList.appendChild(liElement);
	liElement.appendChild(aTag);

});

// scroll to anchor ID using scrollTO event
(function () {
	"use strict";
	let target = document.querySelectorAll('a[href^="#"]');
	let i = 0;
	for (i=0; i<target.length; i++) {
		// scroll to section on link click		
		target[i].onclick = function (e) {
			let hash = this.getAttribute("href");
			let elem = document.getElementById(hash.replace("#",""));
			elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
			e.preventDefault();
		}
	}
})();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// add class 'active' to section by scrolling, when near top of viewport
window.addEventListener('scroll', function scrolling() {
	sections.forEach((section) => {
		if (inViewport(section)) {
			// set sections as active
			section.classList.add('your-active-class');
		} else {
			// remove active class
			section.classList.remove('your-active-class');
		}
	});
});