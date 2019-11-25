//practice promise

userSchema.statics.findByCredentials = function(email, password) 
{
  return new Promise( function(resolve, reject) {
    User.findOne({ email }).then(function(user) {
      if (!user) {
        return reject('User does not exist')
      }
      bcryptjs.compare(password, user.password).then(function (match) {
        if( match ) {
          resolve(user)
        }
        reject('Wrong user or password')
      }).catch( function(error) {
        reject('Wrong user or password')
      })
    })
  })
}