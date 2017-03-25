(function(document, window, angular) {
    'use strict';

    var nineBoxDirective = function() {
        return {
            restrict: 'E',
            link: link,
            templateUrl: '/views/shared/nine-box-diagram.html'
        };
        function link(scope, element){

            var rating = document.querySelectorAll(".rating-label");

            function checkedBox(e) {
                for (var i = 0; i < rating.length; i++ ) {
                    console.log(rating[i].classList);
                    if (rating[i].classList.contains("checked")) {
                        rating[i].classList.remove("checked");
                    }
                }
                e.currentTarget.classList.add("checked");
                console.log('clicked')
            }

            rating.forEach(function(item){

                item.addEventListener("click", checkedBox);
            });
        }
    };

    module.exports = nineBoxDirective;

})(document, window, angular);
