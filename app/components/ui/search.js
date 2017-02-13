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

    this.span.addClass(this.ns + '_hover');
  },

  mouseleave() {

    this.span.removeClass(this.ns + '_hover');
  },

  active() {

    this.span.addClass(this.ns + '_focus');
  },

  inactive() {

    this.span.removeClass(this.ns + '_focus')
  }

})

export default Search;