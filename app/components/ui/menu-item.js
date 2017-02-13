'use strict';

import Utils from '../utils/utils.js';
import Base from './base.js';

function MenuItem(container) {

  Base.call(this);

  var self = this;

  var ns = 'menu-item';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '_frame');

  var item = Utils.node('<a></a>');
  item.addClass(ns + '_a');

  // var down = Utils.node('<div></div>');
  // down.addClass(ns + '_down');

  // var nuarrow = Utils.node('<div><em></em><i></i></div>');
  // nuarrow.addClass('nuarrow');

  // down.append(nuarrow);

  frame.append(item);

  container.append(frame);

  frame.on('mouseenter', function() {
    if (self.down) {
      self.down.fadeIn(300);
      // console.log(self.down);
    }
    self.dispatchEvent({
      type: 'mouseenter'
    });
  });

  frame.on('mouseleave', function() {
    if (self.down) {
      self.down.fadeOut(300);
    }
    self.dispatchEvent({
      type: 'mouseleave'
    });
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
    }
    // down: {
    //   value: down
    // }
  });

  this.hide();
  this.disable();
}

Object.assign(MenuItem.prototype, Base.prototype, {

  setItem(data) {

    // if (data instanceof Object) {

    this.item.html(data.text);
    this.item.attr('href', data.src);

    // this.show();
    // this.enable();
    // }
  },

  setDown(datas) {

    var self = this;

    if (!self.down) {

      var down = Utils.node('<div></div>');
      down.addClass(self.ns + '_down');

      down.hide() //调用jQuery的原生函数

      self.frame.append(down);

      self.down = down;
    }


    var nuarrow = Utils.node('<div><em></em><i></i></div>');
    nuarrow.addClass('nuarrow');

    self.down.append(nuarrow);

    if (Array.isArray(datas)) {

      datas.forEach(function(data) {

        let a = Utils.node('<a></a>');
        a.addClass(self.ns + '_down-item');

        a.html(data.text);
        a.attr('href', data.src);

        self.down.append(a);

        self.show();
        self.enable();
      });
    }
  },

  downShow() {

    // this.down.show();
  },

  downHide() {

    // this.down.hide();
  }
})

export default MenuItem;
