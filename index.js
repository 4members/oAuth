var hapi = require('hapi');
var server = new hapi.Server();
var jwt = require('jsonwebtoken');
var privateKey = 'shahy'
var accounts = {
  123:{
    id: 123,
    user:'shahy',
    name:'shahy',

  }
}

server.connection({
    port: 8080
});


var token = jwt.sign({ accountsId: 123 }, privateKey, { algorithm: 'HS256'} );
console.log(token);


var validate = function (request, decodedToken, callback) {
    var error,
        credentials = accounts[decodedToken.accountId] || {};
    if (!credentials) {

        return callback(error, false, credentials);
    }
    return callback(error, true, credentials)
};

// Bcrypt.compare(password, user.password, (err, isValid) => {
// callback(err, isValid, {
// id: account.id,
// name: account.name
// });
// });


server.register(require('hapi-auth-jwt'), (err)=>{
if (err) {
  throw err;
}
server.auth.strategy('token','jwt',{
  key: privateKey,
  validateFunc: validate,
  verifyOptions: {algorthims:['HS256']}
})

server.route({
  method:'GET',
  path: '/restricted',
config:{auth: 'token'},
  handler: function (req,reply) {

    reply({
text: 'I am a JSON response, and you needed a token to get me.',
credentials: req.auth.credentials
});

  }
});
});

server.start(function() {
    console.log('listion to 8080', server.info.uri);
});
