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

  this.setupSearch(search);

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
  });

  this.hide();
  this.disable();
}

Object.assign(Main.prototype, Base.prototype, {

  setupSearch(search) {

    function clickInclude() {
      
      this.active();
      this.removeEventListener('mouseenter', mouseEnterInclude);
      this.removeEventListener('mouseleave', mouseLeaveInclude);
    }

    function mouseEnterInclude() {
      
      this.mouseenter();
    }

    function mouseLeaveInclude() {
      
      this.mouseleave();
    }

    function blurInclude() {
      
      this.inactive();

      this.addEventListener('mouseenter', mouseEnterInclude);
      this.addEventListener('mouseleave', mouseLeaveInclude);
    }

    search.addEventListener('click', clickInclude);
    search.addEventListener('blur', blurInclude);
  }
})

export default Main;