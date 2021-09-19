/**
 * Routing here to a controller over here
 */

const express = require( "express" );
const router = express.Router();

const { register, login, forgotpassword, resetpassword } = require( "../controller/auth" );

/**
 * here create differnet routes to route to that different controller
 */

router.route( "/register" ).post( register );

router.route( "/login" ).post( login );

router.route( "/forgotpassword" ).post( forgotpassword );

router.route( "/resetpassword/:resetToken" ).post( resetpassword );


module.exports = router;
