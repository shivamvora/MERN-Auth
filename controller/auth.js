
const User = require( '../models/Users' );

/**
 * for register
 */
exports.register = async ( req, res, next ) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create( {
            username, email, password
        } );

        res.status( 201 ).json( {
            success: true,
            user
        } )
    } catch ( error ) {
        rest.status( 500 ).json( {
            success: false,
            error: error.message
        } )
    }

}
/**
 * for login
 */
exports.login = ( req, res, next ) => {
    res.send( "Login Route" )
}
/**
 * for forgot password
 */
exports.forgotpassword = ( req, res, next ) => {
    res.send( "Forgot Password Route" )
}

/**
 * for reset password
 */

exports.resetpassword = ( req, res, next ) => {
    res.send( "Reset Password Route" )
}