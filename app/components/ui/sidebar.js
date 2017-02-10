// // 
// 'use strict';

// import Utils from '../utils/utils.js';

// function SideBar(container) {

//   var ns = 'menu-sidebar-';

//   var div = Utils.node('<div></div>');
//   div.addClass(ns + 'container');

//   var more = Utils.node('<a href="#" id="more">更多产品</a>');

//   var music = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>音乐</a>');

//   var pic = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>图片</a>');

//   var zhidao = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>知道</a>');

//   var wenku = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>文库</a>');

//   var list = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>风云榜</a>');

//   div.append(more);
//   div.append(music);
//   div.append(pic);
//   div.append(zhidao);
//   div.append(wenku);
//   div.append(list);

//   container.append(div);

//   div.on('mouseleave', sidebarOut);

//   more = null;
//   music = null;
//   pic = null;
//   zhidao = null;
//   wenku = null;
//   list = null;
//   div = null;

//   Object.defineProperties(this, {
//     ns: {
//       value: ns
//     }
//   })
// }

// function sidebarOut() {

//   Utils.node(this).hide();
// }

// export default SideBar;

'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';
import SideBarItem from './sidebar-item.js';

function SideBar(container) {
  
  Base.call(this);

  var self = this;

  var ns = 'sidebar';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  var entry = Utils.node('<div>更多产品</div>');
  entry.addClass(ns + '-entry');

  frame.append(entry);
  container.append(frame);

  entry.on('mouseenter', function () {
    self.dispatchEvent({
      type: 'mouseenter'
    })
  });

  // entry.on('mouseleave', function () {
  //   self.dispatchEvent({
  //     type: 'mouseleave'
  //   })
  // })
  
  frame.on('mouseleave', function () {
    self.dispatchEvent({
      type: 'mouseleave'
    })
  })



  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns: {
      value: ns
    },
    entry: {
      value: entry
    }
  })

  this.disable();
  this.hide();
}

Object.assign(SideBar.prototype, Base.prototype, {

  setupItems(datas) {

    var self = this;

    if (!self.items) self.items = [];

    if (Array.isArray(datas)) {

      datas.forEach(function(data){

        let sidebarItem = new SideBarItem(self.frame);
        sidebarItem.setItem(data);

        self.items.push(sidebarItem);
      })
    }
  },

  setupSidebar() {

    function mouseEnter() {

      if (this.items) {

        this.items.forEach(function(item) {

          item.show();
          item.enable();
        })
        this.entry.addClass(this.ns + '-entry-hover');
        this.frame.addClass(this.ns + '-hover');
      }

      var height = document.body.clientHeight;

      this.frame.css('height', height - 1 + 'px');
    }

    function mouseLeave() {

      if (this.items) {

        this.items.forEach(function (item) {
          
          item.hide();
          item.disable();
        })

        this.entry.removeClass(this.ns + '-entry-hover');
        this.frame.removeClass(this.ns + '-hover');
      }
    }

    this.addEventListener('mouseenter', mouseEnter);
    this.addEventListener('mouseleave', mouseLeave);
  }
})

export default SideBar;