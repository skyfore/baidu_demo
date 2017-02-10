'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function Link(container) {
  
  Base.call(this);

  var ns = 'link';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

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

  this.hide();
  this.disable();
}

Object.assign(Link.prototype, Base.prototype, {

  setupLink(datas) {

    var self = this;
    if (!self.items) self.items = [];

    if (Array.isArray(datas)) {

      datas.forEach(function(data) {

        if (data instanceof Object) {

          let item = Utils.node('<a></a>');
          item.addClass(self.ns + '-text');

          item.html(data.text);
          item.attr('href', data.src);

          self.frame.append(item);
          
          self.items.push(item);
        }

      });
    }
  }
})

export default Link;