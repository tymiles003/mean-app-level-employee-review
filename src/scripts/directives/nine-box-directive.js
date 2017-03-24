(function(document, window, angular) {
    'use strict';

    var nineBoxDirective = function() {
        return {
            restrict: 'E',
            link: link
        };
        function link(scope, element){

            function checkedBox(e) {
                for (var i = 0; i < rating.length; i++ ) {
                    console.log(rating[i].classList);
                    if (rating[i].classList.contains("checked")) {
                        rating[i].classList.remove("checked");
                    }
                }
                e.currentTarget.classList.add("checked");
            }

            rating.forEach(function(item){

                item.addEventListener("click", checkedBox);
            });
        }
    };

    module.exports = nineBoxDirective;

})(document, window, angular);
