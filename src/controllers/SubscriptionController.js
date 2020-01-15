'use strict';

const mongoose = require('mongoose');
const Subscription = mongoose.model('Subscription');

exports.create_subscription = (req, res) => {
    var subscription = new Subscription(req.body);
    subscription.save((err, model) => {
        if (err)
            res.send(err);

        res.json({
            result: "succes create subscription",
            data: model
        });
    });
};