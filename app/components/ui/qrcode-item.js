// QRcodeItem.js
'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function QRcodeItem(container) {
  
  Base.call(this);

  var ns = 'qrcode-item';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  var img = Utils.node('<img></img>');
  img.addClass(ns + '-img');

  var textdiv = Utils.node('<div></div>');
  textdiv.addClass(ns + '-text');

  var textp = Utils.node('<p></p>');

  var text = Utils.node('<b></b>');

  textp.append(text);
  textdiv.append(textp);
  frame.append(img, textdiv);
  container.append(frame);

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
    },
    text: {
      value: text
    }
  });

  this.disable();
  this.hide();
}

Object.assign(QRcodeItem.prototype, Base.prototype, {

  setQRcodeItem(data){

    if (data instanceof Object) {

      this.img.attr('src' ,data.src);
      this.text.html(data.text);
      
      this.enable();
      this.show();
    }
  }
})

export default QRcodeItem;