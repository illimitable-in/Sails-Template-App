/**
 * NavigationController
 *
 * @description :: Server-side logic for managing navigations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    landingPage: function (req, res) {
        var data = {layout: null, title: sails.config.appDisplayName + ' | Login'};
        if (req.session.errMsg) {
            data["err"] = req.session.errMsg;
            req.session.errMsg = null;
        }
        res.view('landingPage', data);
    },
    home: function (req, res) {
        res.view('dashboard', {
            title: sails.config.appDisplayName + ' | Dashboard',
            userPrivilege: [],
            userId: -1,
            userProfile: {},
            lastLoginTime: "",
            remember_me: null,
            pageView: 'dashboard',
            users: [],
            lastLocations: []
        });
    },
    sales: function (req, res) {
        res.view('sales', {
            title: sails.config.appDisplayName + ' | Sales',
            userPrivilege: [],
            userId: -1,
            userProfile: {},
            lastLoginTime: "",
            remember_me: null,
            pageView: 'sales',
            users: [],
            lastLocations: []
        });
    },
    products: function (req, res) {
        res.view('products', {
            title: sails.config.appDisplayName + ' | Products',
            userPrivilege: [],
            userId: -1,
            userProfile: {},
            lastLoginTime: "",
            remember_me: null,
            pageView: 'products',
            users: [],
            lastLocations: []
        });
    },
    customers: function (req, res) {
        res.view('customers', {
            title: sails.config.appDisplayName + ' | Customers',
            userPrivilege: [],
            userId: -1,
            userProfile: {},
            lastLoginTime: "",
            remember_me: null,
            pageView: 'customers',
            users: [],
            lastLocations: []
        });
    },
    employees: function (req, res) {
        res.view('employees', {
            title: sails.config.appDisplayName + ' | Employees',
            userPrivilege: [],
            userId: -1,
            userProfile: {},
            lastLoginTime: "",
            remember_me: null,
            pageView: 'employees',
            users: [],
            lastLocations: []
        });
    },
    gallery: function (req, res) {
        res.view('gallery', {
            title: sails.config.appDisplayName + ' | Gallery',
            userPrivilege: [],
            userId: -1,
            userProfile: {},
            lastLoginTime: "",
            remember_me: null,
            pageView: 'gallery',
            users: [],
            lastLocations: []
        });
    }
};

