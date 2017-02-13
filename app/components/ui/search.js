'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function Search(container) {

  Base.call(this);

  var self = this;
  var ns = 'search';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '_frame');

  var form = Utils.node('<div></div>');
  form.addClass(ns + '_form');

  var span = Utils.node('<div></div>');
  span.addClass(ns + '_span');
  span.addClass(ns + '_focus');

  var input = Utils.node('<input autofocus="autofocus"></input>');
  input.addClass(ns + '_input');

  var soutu = Utils.node('<span></span>');
  soutu.addClass(ns + '_soutu');

  var btn = Utils.node('<button>百度一下</button>');
  btn.addClass(ns + '_btn');

  span.append(input, soutu);

  form.append(span, btn);

  frame.append(form);

  this.hide();
  this.disable();

  container.append(frame);

  function mouseenter() {

    self.span.addClass(self.ns + '_hover');
    self.dispatchEvent({
      type: 'mouseenter'
    });
  }

  function mouseleave() {

    self.span.removeClass(self.ns + '_hover');
    self.dispatchEvent({
      type: 'mouseleave'
    });
  }

  function active() {

    self.span.addClass(self.ns + '_focus');
    self.dispatchEvent({
      type: 'click'
    });
    Utils.node(this).off('mouseenter', mouseenter);
    Utils.node(this).off('mouseleave', mouseleave);
  }

  function inactive() {

    self.span.removeClass(self.ns + '_focus');
    self.dispatchEvent({
      type: 'blur'
    });
    Utils.node(this).on('mouseenter', mouseenter);
    Utils.node(this).on('mouseleave', mouseleave);
  }

  input.on('mouseenter', mouseenter);

  input.on('mouseleave', mouseleave);

  input.on('click', active);

  input.on('blur', inactive);

  Object.defineProperties(this, {
    frame: {
      enumerable: true,
      value: frame
    },
    ns :{
      value: ns
    },
    btn: {
      value: btn
    },
    soutu: {
      value: soutu
    },
    input: {
      value:input
    },
    span: {
      value: span
    }
  });
}

Object.assign(Search.prototype, Base.prototype, {

  // mouseenter() {

  //   this.span.addClass(this.ns + '_hover');
  // },

  // mouseleave() {

  //   this.span.removeClass(this.ns + '_hover');
  // },

  // active() {

  //   this.span.addClass(this.ns + '_focus');
  // },

  // inactive() {

  //   this.span.removeClass(this.ns + '_focus')
  // }

})

export default Search;