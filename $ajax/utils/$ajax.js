module.exports.getData = function (url) {   //封装的请求方式   
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  return new Promise(function (resolve, reject) {
    const dev = "https://database.issp.bjike.com";  //设置域名
    wx.request({
      url: dev + url,
      data: data,
      method: method,
      header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}
/*
const $ajax = require("../../utils/$ajax.js");
 // url :域名下的具体请求  =='/project/list';data:传值  == { page: 1 } 默认:{}; method:请求方式 :'GET' 默认:'GET',
 //header:请求头  默认{ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        /***$ajax.getData(url, data, method,header)  
            .then(function (res) {
                console.log(res); //返回的数据
              });
        *****
$ajax.getData('/project/list', { page: 1 }, 'GET')  
  .then(function (res) {
    console.log(res);
  });
 */