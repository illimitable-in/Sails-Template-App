/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {
    sails.moment = require('moment');
    if(process.versions.node > '5'){
        sails.ObjectId = require('mongodb').ObjectID;
    }else{
        sails.ObjectId = require('sails-mongo/node_modules/mongodb').ObjectID;
    }
    sails.uuidV1 = require('uuid/v1');
    sails.passwords = require('machinepack-passwords');
    sails.geocoder = require('node-geocoder');
    sails.path = require('path');
    sails.fs = require('fs');
    sails.ncp = require('ncp').ncp;
    sails.ncp.limit = 16;
    sails.xlsx = require('xlsx-style');
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};
