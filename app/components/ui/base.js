'use strict';

import EventDispatcher from '../utils/event-dispatcher.js';

function Base() {

  this.enabled = false;
  this.visible = false;
}

Object.assign(Base.prototype, EventDispatcher.prototype, {

  fadeIn() {

    if (this.frame) {
      this.frame.fadeIn.apply(this.frame, arguments);
      this.visible = true;
    }
  },

  fadeOut() {

    if (this.frame) {
      this.frame.fadeOut.apply(this.frame, arguments);
      this.visible = false;
    }
  },

  show() {

    if (this.frame) {
      this.frame.show();
      this.visible = true;
    }
  },

  hide() {

    if (this.frame) {
      this.frame.hide();
      this.visible = false;
    }
  },

  enable() {

    this.enabled = true;
  },

  disable() {

    this.enabled = false;
  }
})

export default Base;
