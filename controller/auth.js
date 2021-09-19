
/**
 * for register
 */
exports.register = ( res, req, next ) => {
    res.send( "Register Route" )
}
/**
 * for login
 */
exports.login = ( res, req, next ) => {
    res.send( "Login Route" )
}
/**
 * for forgot password
 */
exports.forgotpassword = ( res, req, next ) => {
    res.send( "Forgot Password Route" )
}

/**
 * for reset password
 */

exports.resetpassword = ( res, req, next ) => {
    res.send( "Reset Password Route" )
}