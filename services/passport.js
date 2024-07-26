const passport = require('passport')
const GoogleStrategy =require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
 done(null,user.id)
})
passport.deserializeUser((id,done)=>{
 User.findById(id)
 .then(user=>{
  done(null,user)
 })
})

//Google Auth
passport.use(
 new GoogleStrategy({
clientID:keys.googleClientID,
clientSecret:keys.googleClientSecret,
callbackURL:'/auth/google/callback',
proxy:true
},

//Google Strategy find or create new user
async(accessToken,refreshToken,profile,done)=>{
 const existingUser = await User.findOne({googleId:profile.id})
  if(existingUser){
   done(null,existingUser)
  }else{
  const user = await new User({ googleId: profile.id,name:profile.displayName }).save()
   done(null,user)
  }

// console.log('access Token',accessToken)
// console.log('refresh Token',refreshToken)
// console.log('profile',profile.id)
})
)