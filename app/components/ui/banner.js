// // banner.js
// 'use strict';

// import Utils from '../utils/utils.js';

// function Banner(container) {

//   var ns = 'banner';

//   var div = Utils.node('<div></div>');
//   var banner = Utils.node('<img></img>');

//   div.addClass(ns);
//   banner.addClass(ns + '-img');

//   banner.attr('src', 'https://www.baidu.com/img/bd_logo1.png');

//   div.append(banner);
//   container.append(div);

//   banner = null;
//   div = null;

//   Object.defineProperties(this, {
//     ns: {
//       value: ns
//     },
//     div: {
//       value: div
//     }
//   })
// }

// export default Banner;

'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function Banner(container) {
  
  var ns = 'banner';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  var img = Utils.node('<img></img>');
  img.addClass(ns + '-img');

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
  })
}

Object.assign(Banner.prototype, Base.prototype, {

  setImg(src){

    this.img.attr('src', src);
  }
})

export default Banner;