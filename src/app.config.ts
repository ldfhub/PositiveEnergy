/*
 * @Author: your name
 * @Date: 2021-12-19 22:54:47
 * @LastEditTime: 2021-12-20 23:01:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /PositiveEnergy/src/app.config.ts
 */
export default {
  pages: [
    'pages/Home/index'
  ],
  tabBar: {
    list: [
      {
        'iconPath': '',
        'selectedIconPath': '',
        pagePath: 'pages/Home/index',
        text: '首页'
      },
      {
        'iconPath': '',
        'selectedIconPath': '',
        pagePath: 'pages/Upload/index',
        text: '上传'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
