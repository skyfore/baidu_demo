// // menu-item.js

// 'use strict';

// import Utils from '../utils/utils.js';

// function MenuItem(container) {

//   var ns = 'menu-item-';

//   var ul = Utils.node('<div></div>');
//   ul.addClass(ns + 'ul');

//   var nm = Utils.node('<a href="#">糯米</a>');

//   var news = Utils.node('<a href="#">新闻</a>');

//   var hao123 = Utils.node('<a href="#">hao123</a>');

//   var map = Utils.node('<a href="#">地图</a>');

//   var video = Utils.node('<a href="#">视频</a>');

//   var tieba = Utils.node('<a href="#">贴吧</a>');

//   var login = Utils.node('<a href="#">登录</a>');

//   var set = Utils.node('<a href="#">设置</a>');

//   var more = Utils.node('<a href="#">更多产品</a>');

//   ul.append(nm);
//   ul.append(news);
//   ul.append(hao123);
//   ul.append(map);
//   ul.append(video);
//   ul.append(tieba);
//   ul.append(login);
//   ul.append(set);
//   ul.append(more);

//   container.append(ul);

//   more.on('mouseenter', moreEnter);

//   ul = null;
//   nm = null;
//   news = null;
//   hao123 = null;
//   map = null;
//   video = null;
//   tieba = null;
//   login = null;
//   set = null;
//   more = null;

//   Object.defineProperties(this, {
//     ns: {
//       value: ns
//     }
//   })
// }

// function moreEnter() {

//   var sidebar = Utils.node('.menu-sidebar-container');

//   var height = document.body.clientHeight;

//   sidebar.css('height', height - 1 + 'px');

//   sidebar.show();
// }

// function sidebarOut() {

//   Utils.node(this).hide();
// }


// export default MenuItem;


'use strict';

import Utils from '../utils/utils.js';
import Base from './base.js';

function MenuItem(container) {
  

  Base.call(this);

  var self = this;

  var ns = 'menu-item';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  var item = Utils.node('<a></a>');
  item.addClass(ns + '-a');

  var down = Utils.node('<div></div>');
  down.addClass(ns + '-down');

  var nuarrow = Utils.node('<div><em></em><i></i></div>');
  nuarrow.addClass('nuarrow');
  // var nuarrow = Utils.node('<div></div>');
  // nuarrow.addClass('nuarrow');

  // var em = Utils.node('<em></em>');
  // em.addClass('nuarrow-i');

  down.append(nuarrow);

  down.hide()//调用jQuery的原生函数

  frame.append(item, down);

  container.append(frame);

  frame.on('mouseenter', function () {
    self.dispatchEvent({
      type: 'mouseenter'
    })  
  });

  frame.on('mouseleave', function(){
    self.dispatchEvent({
      type: 'mouseleave'
    })
  });

  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns: {
      value: ns
    },
    item: {
      value: item
    },
    down: {
      value: down
    }
  });

  this.hide();
  this.disable();
}

Object.assign(MenuItem.prototype, Base.prototype, {

  setItem(data) {

    if (data instanceof Object) {

      this.item.html(data.text);
      this.item.attr('href', data.src);

      this.show();
      this.enable();
    }
  },

  setDown(datas) {

    var self = this;

    if (Array.isArray(datas)) {

      datas.forEach(function (data) {
        
        let a = Utils.node('<a></a>');
        a.addClass(self.ns + '-down-item');

        a.html(data.text);
        a.attr('href', data.src);

        self.down.append(a);
        
        self.show();
        self.enable();
      })
    }
  },

  downShow() {

    this.down.show();
  },

  downHide() {

    this.down.hide();
  }
})

export default MenuItem;