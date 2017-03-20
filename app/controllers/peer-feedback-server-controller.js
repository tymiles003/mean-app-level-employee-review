/*
 * file: peer-feedback-server-controller.js
 */

(function(require, exports) {

    'use strict';

    // mongoose, model dependencies
    var mongoose = require('mongoose');
    var PeerFeedback = mongoose.model('PeerFeedback');

    // Post to DB
    exports.postFeedbackData = function(req, res, next) {

        var feedback = new PeerFeedback(req.body);

        // save this object to the mongo db
        feedback.save(function(err, feedback) {
            if (err) {
                return console.error('theres an error', err);
            }
            console.log('feedback data has been SAVED! and here is the feedback which is the req.body', feedback);

            // Send feedback data object back to the client as response (res)
            res.send(feedback);
        });
    };

})(require, exports);
