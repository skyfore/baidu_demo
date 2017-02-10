'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';

function Search(container) {

  Base.call(this);

  var self = this;
  var ns = 'search';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  var form = Utils.node('<div></div>');
  form.addClass(ns + '-form');

  var span = Utils.node('<div></div>');
  span.addClass(ns + '-span');
  span.addClass(ns + '-focus');

  var input = Utils.node('<input autofocus="autofocus"></input>');
  input.addClass(ns + '-input');

  var soutu = Utils.node('<span></span>');
  soutu.addClass(ns + '-soutu');

  var btn = Utils.node('<button>百度一下</button>');
  btn.addClass(ns + '-btn');

  span.append(input, soutu);

  form.append(span, btn);

  frame.append(form); 

  this.hide();
  this.disable();

  container.append(frame);

  input.on('mouseenter', function(){

    self.dispatchEvent({
      type: 'mouseenter'
    })
  });

  input.on('mouseleave', function () {
    
    self.dispatchEvent({
      type: 'mouseleave'
    })
  });

  input.on('click', function () {
    
    self.dispatchEvent({
      type: 'click'
    })
  });

  input.on('blur', function () {
    
    self.dispatchEvent({
      type: 'blur'
    })
  });

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

  mouseenter() {

    this.span.addClass(this.ns + '-hover');
  },

  mouseleave() {

    this.span.removeClass(this.ns + '-hover');
  },

  active() {

    this.span.addClass(this.ns + '-focus');
  },

  inactive() {

    this.span.removeClass(this.ns + '-focus')
  }

})

export default Search;