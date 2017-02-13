'use strict';

import '../css/main.css';

import $ from 'jquery';
import UI from './components/ui-manager.js';

$(document).ready(function() {

  var body = $('body');

  function initUI() {

    window.menu = initMenu(body);
    window.main = initMain(body);
    window.sidebar = initSidebar(body);
    window.foot = initFoot(body);
  }
  initUI();

  function initMenu(container) {

    var menu = new UI.Menu(container);
    menu.show();
    menu.enable();

    menu.setupItems([{
      text: '糯米',
      src: '#'
    },
    {
      text: '新闻',
      src: '#'
    },
    {
      text: 'hao123',
      src: '#'
    },
    {
      text: '地图',
      src: '#'
    },
    {
      text: '视频',
      src: '#'
    },
    {
      text: '贴吧',
      src: '#'
    },
    {
      text: '登录',
      src: '#'
    },
    {
      text: '设置',
      src: '#',
      down: [{
        text: '搜索设置',
        src: '#'
      },
      {
        text: '高级搜索',
        src: '#'
      },
      {
        text: '关闭预测',
        src: '#'
      },
      {
        text: '搜索历史',
        src: '#'
      }]
    },
    {
      text: '更多产品',
      src: '#'
    }]);

    return menu;
  }

  function initSidebar(container) {

    var src = 'url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/logos/bdbri_icons_0a62ce1.png) no-repeat';

    var sidebar = new UI.SideBar(container);
    sidebar.show();
    sidebar.enable();

    sidebar.setupItems([{
      text: '音乐',
      src: '#',
      imgsrc: src
    },
    {
      text: '图片',
      src: '#',
      imgsrc: src
    },
    {
      text: '知道',
      src: '#',
      imgsrc: src
    },
    {
      text: '文库',
      src: '#',
      imgsrc: src
    },
    {
      text: '风云榜',
      src: '#',
      imgsrc: src
    },
    {
      text: '全部产品>>',
      src: '#',
      imgsrc: 'none'
    }]);

    return sidebar;
    // sidebar.setupSidebar();
  }

  function initMain(container) {

    var main = new UI.Main(container);
    main.show();
    main.enable();

    return main;
  }

  function initFoot(container) {

    var foot = new UI.Foot(container);

    foot.setupQRcode([{
      text: '手机百度',
      src: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_efde696.png'
    }]);

    foot.setupLink([{
      text: '把百度设为首页',
      src: 'https://www.baidu.com/cache/sethelp/help.html'
    },
    {
      text: '关于百度',
      src: 'https://home.baidu.com'
    },
    {
      text: 'About Baidu',
      src: 'https://home.baidu.com'
    },
    {
      text: '百度推广',
      src: 'http://e.baidu.com/?refer=888'
    }])

    foot.show();
    foot.enable();

    return foot;
  }
});
