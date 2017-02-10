'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';
import QRcodeItem from './qrcode-item.js';

function QRcode(container) {

  Base.call(this);

  var ns = 'qrcode';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  container.append(frame);

  // console.log(this);

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

Object.assign(QRcode.prototype, Base.prototype, {

  setupQRcode(datas) {

    var self = this;

    if (!self.items) self.items = [];

    if (Array.isArray(datas)) {

      datas.forEach(function (data) {
        
        let qrcodeItem = new QRcodeItem(self.frame);

        qrcodeItem.setQRcodeItem(data);

        self.items.push(qrcodeItem);
      })
    }
  }
})

export default QRcode;