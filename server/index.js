var request = require('request')

const JIANSHU_SERVER = 'http://www.jianshu.com'
// loggeredCoodie 的值是简书登录后，页面输入 document.cookie 的值。
const loggeredCoodie = 'xxx=xx;ddd=fdfd;'
  // 获取消息通知
var fetchNotifications = (loginedCookieValue) => {
  var url = `${JIANSHU_SERVER}/notifications?type=follows&page=1`
  var j = request.jar();
  loginedCookieValue.split(';').forEach(item => {
    var cookie = request.cookie(item)
    j.setCookie(cookie, url)
  })
  request({
    url: url,
    jar: j,
    headers: {
      'Accept': 'application/json'
    }
  }, function (error, response, body) {
    console.log(body)
    // console.log('---------------')
    // console.log(response)

  })

}

// function 

fetchNotifications(loggeredCoodie)
