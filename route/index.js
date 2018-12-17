var amfi = require('amfinav');

var amfiNavs = new amfi();
amfiNavs.on('dataready', function (res) {
    console.log(res);
});
