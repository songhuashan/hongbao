        


const app = getApp();

var that;
Page({
  data: {
    nbTitle: "开始猜谜",
    title:"",
  },
  // 事件处理函数
  onLoad() {
      that = this;
      var title = title;
      wx.request({
        url: 'http://192.168.199.205/index.php/login/question', //仅为示例，并非真实的接口地址
        data: {
        
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          //res=JSON.stringify(res)
          that.setData({
            title:JSON.stringify(res.data.data[0]['question'])
          })
            console.log(that.data.title);
        }
      })
      
      
  }
  
    
 
})
