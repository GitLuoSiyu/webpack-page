//  issus 补充，目前无法 外部引入js，只是一个个导入jsEntry里，无法保障前后引入的顺序，目前在three.js和jquery之前有矛盾，此外
//  cdn 自动部署缺乏支持
module.exports = [
  {
    name: 'index',
    html: 'home/index.html',
    jsEntry: 'home/index.js'
  },
  {
    name: 'about',
    html: 'about/about.html',
    jsEntry: 'about/about.js'
  },
  {
    name: 'contact',
    html: 'contact/contact.html',
    jsEntry: 'contact/contact.js'
  },
  {
    name: 'scene',
    html: 'scene/scene.html',
    jsEntry: 'scene/scene.js'
  }
]