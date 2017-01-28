/**
 * AuthenticationController
 *
 * @description :: Server-side logic for managing authentications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    portalLogin: function (req, res) {
        var params = req.params.all();
        var user_id = params.login_id;
        var password = params.password;
        var remember = params.remember_me;
        res.redirect(sails.config.basePath + 'home.html');
    },
    portalLogout: function (req, res) {        
        req.session.userId = null;
        req.session.userProfile = null;
        req.session.userPrivilege = null;
        res.redirect(sails.config.basePath);
    },
    mobileLogin: function (req, res) {
        var param = req.params.all();
        var login_id = param.login_id;
        var password = param.password;
        return res.json({status: 1, msg: "Not Emplemented Yet."});
    },
    mobileLogout: function (req, res) {
        var param = req.params.all();
        try {
            var logoutTime = new Date();
            if (param.logout_time) {
                logoutTime = new Date(param.logout_time);
            }
            if (param.userId) {                
                return res.json({status: 0, msg: "success"});
            } else {
                return res.json({status: 1, msg: "parameter missing."});
            }
        } catch (er) {
            return res.json({status: 1, msg: "parameter missing."});
        }
    },
    mobileisUniqueLoginId: function (req, res) {
        var data = req.params.all();
        var newLoginId = data.newLoginId;
        User.getCountForLoginId(newLoginId, function (count) {
            if (count > 0) {
                return res.json({status: 1, msg: "This login id is already taken."});
            } else {
                return res.json({status: 0, msg: "success"});
            }
        }, function (err) {
            return res.json({
                status: 1, msg: "we have encounterd an unexpected error, plesae try after some time."
            });
        });
    },
    mobileisUniqueMailId: function (req, res) {
        var data = req.params.all();
        var newEmailId = data.newEmailId;
        User.getCountForMailId(newEmailId, function (count) {
            if (count > 0) {
                return res.json({status: 1, msg: "This email id is already registered."});
            } else {
                return res.json({status: 0, msg: "success"});
            }
        }, function (err) {
            return res.json({
                status: 1, msg: "we have encounterd an unexpected error, plesae try after some time."
            });
        });
    }
};

