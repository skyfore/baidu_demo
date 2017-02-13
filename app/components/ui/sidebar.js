'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';
import SideBarItem from './sidebar-item.js';

function SideBar(container) {

  Base.call(this);

  var self = this;

  var ns = 'sidebar';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '_frame');

  var entry = Utils.node('<div>更多产品</div>');
  entry.addClass(ns + '_entry');

  frame.append(entry);
  container.append(frame);

  entry.on('mouseenter', function () {
    self.dispatchEvent({
      type: 'mouseenter'
    })
  });
  
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

    // if (Array.isArray(datas)) {

      datas.forEach(function(data){

        let sidebarItem = new SideBarItem(self.frame);
        sidebarItem.setItem(data);

        self.items.push(sidebarItem);
      });
    // }
  },

  setupSidebar() {

    function mouseEnter() {

      if (this.items) {

        this.items.forEach(function(item) {

          item.show();
          item.enable();
        });
        this.entry.addClass(this.ns + '_entry-hover');
        this.frame.addClass(this.ns + '_hover');
      }

      var height = document.body.clientHeight;

      this.frame.css('height', height - 1 + 'px');
    }

    function mouseLeave() {

      if (this.items) {

        this.items.forEach(function (item) {
          
          item.hide();
          item.disable();
        });

        this.entry.removeClass(this.ns + '_entry-hover');
        this.frame.removeClass(this.ns + '_hover');
      }
    }

    this.addEventListener('mouseenter', mouseEnter);
    this.addEventListener('mouseleave', mouseLeave);
  }
})

export default SideBar;