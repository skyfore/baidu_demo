'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function SideBarItem(container) {
  
  Base.call(this);

  var ns = 'sidebar-item';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  var a = Utils.node('<a></a>');
  a.addClass(ns + '-a');

  var imgspan = Utils.node('<span></span>');
  imgspan.addClass(ns + '-img');

  a.append(imgspan);
  frame.append(a);
  container.append(frame);

  Object.defineProperties(this, {
    frame: {
      value: frame,
      enumerable: true
    },
    ns: {
      value: ns
    },
    a: {
      value: a
    },
    imgspan: {
      value: imgspan
    }
  });

  this.disable();
  this.hide();
}

Object.assign(SideBarItem.prototype, Base.prototype, {

  setItem(data) {
    
    if (data instanceof Object) {

      var text = document.createTextNode(data.text);
      text = Utils.node(text);

      this.a.attr('href', data.src);

      text.insertAfter(this.imgspan);

      this.imgspan.css('background', data.imgsrc);

    }
  }
})


export default SideBarItem;