function setShare (data = {}) {
  var url = 'http://community.xiaojukeji.com/market/jiaohuan2018/'
  var shareData = {
    url: url + 'index.html',
    title: '',
    content: '',
    sina_weibo: true,
    qq_appmsg: true,
    qzone: true,
    alipay_appmsg: true,
    ailpay_timeline: true,
    ding_talk: true,
    icon: url + 'share.jpg',
    success: function() {
      Omega.trackEvent('success', 'share-success')
    }
  }
  Object.assign(shareData, data)
  window.D.setShare(shareData)
}

export default { setShare }
