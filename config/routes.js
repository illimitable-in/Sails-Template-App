/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {
    /*************************************************************
     * Server Rendered HTML Page Endpoints                       *
     *************************************************************/
    '/': 'NavigationController.landingPage',
    '/portal-login.html': 'AuthenticationController.portalLogin',
    '/portal-logout.html': 'AuthenticationController.portalLogout',
    '/home.html': 'NavigationController.home',
    '/sales.html': 'NavigationController.sales',
    '/products.html': 'NavigationController.products',
    '/customers.html': 'NavigationController.customers',
    '/employees.html': 'NavigationController.employees',
    '/gallery.html': 'NavigationController.gallery',
    /*************************************************************
     * JSON API ENDPOINTS                                        *
     *************************************************************/
    
    /*************************************************************
     * OTHER ENDPOINTS                                           *
     *************************************************************/
    
};
