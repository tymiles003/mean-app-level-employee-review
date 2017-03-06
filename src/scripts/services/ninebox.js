// ninebox javascript
// Add active class to parent .rating when input is checked

var els = document.querySelectorAll(".rating-label");

els.forEach(function(item){
	item.addEventListener("click", checkedBox, false);
});

function checkedBox(e) {

	for (var i = 0; i < els.length; i++ ) {
		console.log(els[i].classList);

		if (els[i].classList.contains("checked")) {
			els[i].classList.remove("checked");
		}
	}

	e.currentTarget.classList.add("checked");

}