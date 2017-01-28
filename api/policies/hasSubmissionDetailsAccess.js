module.exports = function (req, res, next) {

    // User is allowed to proceed to the next policy, 
    // or if this is the last policy, the controller
    try {
        if (req.session.userPrivilege.reports.childNodes.performance_report.access || req.session.userPrivilege.reports.childNodes.survey_submission_report) {
            return next();
        }
    } catch (err) {
    }


    if (req.wantsJSON) {

        // User is not allowed
        return res.forbidden('You are not permitted to perform this action.');
    }

    return res.redirect(sails.config.basePath);
};