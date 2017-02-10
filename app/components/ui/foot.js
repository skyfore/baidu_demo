'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';
import QRcode from './qrcode.js';
import Copyright from './copyright.js';
import Link from './link.js';

function Foot(container) {
  
  Base.call(this);

  var ns = 'foot';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  // console.log(this);
  var qrcode = new QRcode(frame);//Error !!!
  var link = new Link(frame);
  var copyright = new Copyright(frame);

  container.append(frame);

  allStatusChange(qrcode, link, copyright);

  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns: {
      value: ns
    },
    QRcode: {
      value: qrcode
    },
    Link: {
      value: link
    }
  });

  this.disable();
  this.hide();
}

Object.assign(Foot.prototype, Base.prototype, {

  setupQRcode(datas) {

    this.QRcode.setupQRcode(datas);
  },

  setupLink(datas) {
    // console.log(2333);
    this.Link.setupLink(datas);
  }
})

function allStatusChange() {
  
  // target.enable();
  // target.show();
  // console.log(arguments);
  var list = Array.prototype.slice.call(arguments);
  // console.log(list);
  list.forEach(function (i) {
    // console.log(i);
    i.enable();
    i.show();
  })
}

export default Foot;