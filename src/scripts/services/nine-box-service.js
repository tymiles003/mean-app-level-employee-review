// ninebox javascript
// Add active class to parent .rating when input is checked

(function(document, window, angular) {
	'use strict';

	var NineBoxService = function() {
		var rating = document.querySelectorAll(".rating-label");

		rating.forEach(function(item){
			item.addEventListener("click", checkedBox, false);
		});

		function checkedBox(e) {

			for (var i = 0; i < rating.length; i++ ) {
				console.log(rating[i].classList);

				if (rating[i].classList.contains("checked")) {
					rating[i].classList.remove("checked");
				}
			}

			e.currentTarget.classList.add("checked");

		}
	}

	module.exports = NineBoxService;

})(document, window, angular);