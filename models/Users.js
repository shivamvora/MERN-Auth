/**
 * this modal mainly used in controller
 */

const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );
/**
 * define here json shema
 */
const UserSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: [true, "Please Provide a username"]
    },
    email: {
        type: String,
        required: [true, "Please Provide a email"],
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
} );


UserSchema.pre( "save", async function ( next ) {
    if ( !this.isModified( "password" ) ) {
        next();
    }
    const salt = await bcrypt.genSalt( 10 );
} )
const bcrypt = require( 'bcryptjs' )

const User = mongoose.model( "User", UserSchema );

module.exports = User;