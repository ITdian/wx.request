# wx.request
封装微信小程序的请求方式

以下是在index.js页面调用方法

const $ajax = require("../../utils/$ajax.js");
 // url :域名下的具体请求  =='/project/list';data:传值  == { page: 1 } 默认:{}; method:请求方式 :'GET' 默认:'GET',
 //header:请求头  默认{ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
示例:$ajax.getData(url, data, method,header)  
            .then(function (res) {
                console.log(res); //返回的数据
     });
//具体传参改值
$ajax.getData('/project/list', { page: 1 }, 'GET')  
  .then(function (res) {
    console.log(res);
    this.setData({   //直接保存值进行相对应的设置
      pData:res
    })
  });
