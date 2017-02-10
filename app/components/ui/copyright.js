'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function Copyright(container ) {
  
  Base.call(this);

  var ns = 'copyright';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  frame.html('©2017&nbsp;Baidu&nbsp;<a href="http://www.baidu.com/duty/">使用百度前必读</a>&nbsp;<a href="http://jianyi.baidu.com/" class="cp-feedback">意见反馈</a>&nbsp;京ICP证030173号&nbsp;<i class="c-icon-icrlogo"></i>&nbsp;<a class="jgwab" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001">京公网安备11000002000001号</a>&nbsp;<i class="c-icon-jgwablogo"></i>')

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

  this.disable();
  this.hide();
}

Object.assign(Copyright.prototype, Base.prototype, {

  setupCopyright() {

    this.enable();
    this.show();
  }
})

export default Copyright;