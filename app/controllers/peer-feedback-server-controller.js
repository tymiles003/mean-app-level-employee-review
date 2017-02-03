/*
 * file: peer-feedback-server-controller.js
 */
(function(require, exports) {

    'use strict';

    // require mongoose and the associated model
    var mongoose = require('mongoose');
    var PeerFeedback = mongoose.model('PeerFeedback');

    // post feedback data to the db using the PeerFeedback model
    exports.postFeedbackData = function(req, res, next) {

        var feedback = new PeerFeedback(req.body); // create a new instance of your model based on the request data
        console.log('new feedback object instance from feedback view page comin at ya', feedback);

        // save this object to the mongo db
        feedback.save(function(err, feedback) {
            if (err) {
                return console.error('theres an error', err);
            }

            console.log('feedback data has been SAVED! and here is the feedback which is the req.body', feedback);
            // send the feedback object back to the client as the response -- next stop: client-side peer feedback controller
            res.send(feedback); // sends the data back to the client as the response (res)
        });
    };

})(require, exports);
