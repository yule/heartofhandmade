/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.


		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);


const tab = document.querySelector('.tabs');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
	//Hide All Tabpane
	tabPanels.forEach(panel => {
		panel.hidden = 'true';
	});
	
	//Deselect Tab Button
	tabButtons.forEach( button => {
		button.setAttribute('aria-selected', 'false');
	});
	
	//Mark New Tab
	e.currentTarget.setAttribute('aria-selected', 'true');
	
	//Show New Tab
	const { id } = e.currentTarget;
	
	const currentTab = tabPanels.find(
		panel => panel.getAttribute('aria-labelledby') === id
	);
	
	currentTab.hidden = false;
}

tabButtons.forEach(button => {
	button.addEventListener('click', tabClickHandler);
})
