// // main.js

// 'use strict';

// import Utils from '../utils/utils.js';
// import Banner from './banner.js';
// import Search from './search.js';

// function Main(container) {

//   var ns = 'main-';

//   var div = Utils.node('<div></div>');
//   div.addClass(ns + 'container');

//   //初始化 Search 和 Banner

//   var banner = new Banner(div);
//   var search = new Search(div);

//   container.append(div);
//   // div.append(search.form);
//   // div.append(banner.div);

//   Object.defineProperties(this, {
//     ns: {
//       value: ns
//     },
//     div: {
//       value: div
//     }
//   })

// }

// export default Main;
// 
'use strict';

import Utils from '../utils/utils.js';
import Base from './base.js';
import Banner from './banner.js';
import Search from './search.js';

function Main(container) {
  
  Base.call(this);

  var self = this;
  var ns = 'main';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  container.append(frame);

  var banner = new Banner(frame);
  var search = new Search(frame);

  this.setupBanner(banner);
  this.setupSearch(search);
  

  // console.log(frame);

  search.enable();
  search.show();

  banner.setImg('https://www.baidu.com/img/bd_logo1.png');
  banner.enable();
  banner.show();

  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns: {
      value: ns
    },
    search: {
      value: search
    },
    banner: {
      value: banner
    }
  })

  this.hide();
  this.disable();
}

Object.assign(Main.prototype, Base.prototype, {

  setupSearch: function (search) {

    function clickInclude() {
      
      // click(this);
      this.active();
      this.removeEventListener('mouseenter', mouseEnterInclude);
      this.removeEventListener('mouseleave', mouseLeaveInclude);
    }

    function mouseEnterInclude() {
      
      this.mouseenter();
      // mouseEnter(this);
    }

    function mouseLeaveInclude() {
      
      this.mouseleave();
      // mouseLeave(this);
    }

    function blurInclude() {
      
      this.inactive();
      // blur(this);
      this.addEventListener('mouseenter', mouseEnterInclude);
      this.addEventListener('mouseleave', mouseLeaveInclude);
    }

    search.addEventListener('click', clickInclude);
    search.addEventListener('blur', blurInclude);
  },

  setupBanner: function (banner) {

  }
})



// function click(ele) {

//   ele.active();
// }

// function mouseEnter(ele){

//   ele.mouseenter();
// }

// function mouseLeave(ele){
  
//   ele.mouseleave();  
// }

// function blur(ele) {
  
//   ele.inactive();
// }

export default Main;