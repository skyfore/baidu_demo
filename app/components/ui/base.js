// base.js

'use strict';

import EventDispatcher from '../utils/event-dispatcher.js';

function Base() {
  
  this.enabled = false;
  this.visible = false;
}

Object.assign(Base.prototype, EventDispatcher.prototype, {

  fadeIn: function () {

    if (this.frame) {
      this.frame.fadeIn.apply(this.frame, arguments);
      this.visible = true;
    }
  },

  fadeOut: function () {

    if (this.frame) {
      this.frame.fadeOut.apply(this.frame, arguments);
      this.visible = false;
    }
  },

  show: function () {

    if (this.frame) {
      this.frame.show();
      this.visible = true;
    }
  },

  hide: function () {

    if (this.frame) {
      this.frame.hide();
      this.visible = false;
    }
  },

  enable: function () {

    this.enabled = true;
  },

  disable: function () {

    this.enabled = false;
  }
})


export default Base;