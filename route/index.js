var amfi = require('amfinav');
var admin = require("firebase-admin");
var serviceAccount = require("auth/serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://flutterdemo1-2480a.firebaseio.com"
});


var amfiNavs = new amfi();
amfiNavs.on('dataready', function (res) {
    console.log(res);
});
