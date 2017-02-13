'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';
import MenuItem from './menu-item.js';

function Menu(container) {

  Base.call(this);

  var ns = 'menu';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '_frame');

  container.append(frame);

  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns: {
      value: ns
    }
  });

  this.disable();
  this.hide();
}

Object.assign(Menu.prototype, Base.prototype, {

  setupItems(datas) {

    function mouseEnter() {
      this.downShow();
    }

    function mouseLeave() {
      this.downHide();
    }

    var self = this;

    if (!self.items) self.items = [];

    // if (Array.isArray(datas)) {

      datas.forEach(function(data) {

        let menuItem = new MenuItem(self.frame);
        menuItem.setItem(data);

        menuItem.show();
        menuItem.enable();


        self.items.push(menuItem);

        if (data.down) {

          menuItem.setDown(data.down);
          // menuItem.addEventListener('mouseenter', mouseEnter);
          // menuItem.addEventListener('mouseleave', mouseLeave);
        }
      });
    // }
  }
});

export default Menu;