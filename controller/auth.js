
/**
 * for register
 */
exports.register = ( req, res, next ) => {
    res.send( "Register Route" )
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