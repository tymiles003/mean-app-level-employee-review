(function(document, window, angular) {
    'use strict';

    var UserStorageService = function() {

        // currentUser is set by the LoginController and then used thru the App
        return {
            currentUser: ''
        };
    };

    module.exports = UserStorageService;

})(document, window, angular);
