'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function Banner(container) {

  var ns = 'banner';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '_frame');

  var img = Utils.node('<img></img>');
  img.addClass(ns + '_img');

  frame.append(img);

  container.append(frame);

  this.hide();
  this.disable();

  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns: {
      value: ns
    },
    img: {
      value: img
    }
  });
}

Object.assign(Banner.prototype, Base.prototype, {

  setImg(src) {

    this.img.attr('src', src);
  }
})

export default Banner;