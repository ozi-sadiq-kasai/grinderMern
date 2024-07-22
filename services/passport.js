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
callbackURL:'/auth/google/callback'
},
(accessToken,refreshToken,profile,done)=>{


 User.findOne({googleId:profile.id})
 .then((existingUser)=>{
  if(existingUser){
done(null,existingUser)
  }else{
   new User({ googleId: profile.id,name:profile.displayName })
   .save()
   .then(user=>done(null,user))
  }
 })

// console.log('access Token',accessToken)
// console.log('refresh Token',refreshToken)
// console.log('profile',profile.id)
})
)