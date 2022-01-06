export default {
  pages: [
    'pages/Home/index',
    'pages/Upload/index',
    'pages/List/index',
    'pages/Profile/index'
  ],
  tabBar: {
    list: [
      {
        'iconPath': './assets/home.png',
        'selectedIconPath': './assets/home-active.png',
        pagePath: 'pages/Home/index',
        text: '首页'
      },
      {
        'iconPath': './assets/upload.png',
        'selectedIconPath': './assets/upload-active.png',
        pagePath: 'pages/Upload/index',
        text: '上传'
      },
      {
        'iconPath': './assets/list.png',
        'selectedIconPath': './assets/list-active.png',
        pagePath: 'pages/List/index',
        text: '列表'
      },
      {
        'iconPath': './assets/profile.png',
        'selectedIconPath': './assets/profile-active.png',
        pagePath: 'pages/Profile/index',
        text: '我的'
      }
    ],
    color: '#333333',
    selectedColor: '#d81e06',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
