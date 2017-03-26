(function(document, window, angular) {
    'use strict';

    var UserStorageService = function() {

        // currentUser is set by the LoginController and then used thru the App
        // Note: this is temporary and only retains the user thru the current scope (refresh will erase it)
        // Other more robust measure would be to use localStorage to store the user for the length of the session
        return {
            currentUser: ''
        };
    };

    module.exports = UserStorageService;

})(document, window, angular);
