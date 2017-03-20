/*
 * file: peer-feedback-server-controller.js
 */

(function(require, exports) {

    'use strict';

    // Mongoose, model dependencies
    var mongoose = require('mongoose');
    var PeerFeedback = mongoose.model('PeerFeedback');

    // GET Feedbacks from DB
    exports.getFeedbackData = function(req, res, next) {

        // query the db with a model and process results
        PeerFeedback.find({peerFirstName: 'Megan'}).limit(1).exec(function(error, results) {
            console.log('Megan FEEDBACK results here!: ', results);
            if (error) return next(error);
            // Respond with valid data
            res.json(results);
        });
    };

    // POST Feedback to DB
    exports.postFeedbackData = function(req, res, next) {

        var feedback = new PeerFeedback(req.body);

        // save this object to the mongo db
        feedback.save(function(err, feedback) {
            if (err) return console.error('theres an error', err);
            // Send Feedback data object back to the client as response (res)
            res.send(feedback);
        });
    };

})(require, exports);
