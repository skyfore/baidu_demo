// //search.js

// 'use strict';

// import Utils from '../utils/utils.js';
// // import Handle from '../event/event.js';


// function Search(container) {

//   var ns = 'search';

//   var form = Utils.node('<form></form>');
//   form.addClass(ns);
//   // form.addClass(ns +'-focus');

//   var span = Utils.node('<span></span>');
//   span.addClass(ns + '-span');
//   span.addClass(ns + '-focus');

//   var input = Utils.node('<input autofocus="autofocus"></input>');
//   input.addClass(ns + '-input');

//   var soutu = Utils.node('<span></span>');
//   soutu.addClass(ns + '-soutu');

//   var btn = Utils.node('<button>百度一下</button>');
//   btn.addClass(ns + '-btn');



//   soutu.on('click', soutuClick);
//   input.on('click', inputClick);
//   input.on('blur', inputBlur);
//   // span.on( 'mouseenter', spanEnter);
//   // span.on( 'mouseout', spanOut);
//   var self = this;
//   btn.on('click', function () {
//     return btnClick(self, input);
//   });

//   span.append(input);
//   span.append(soutu);

//   form.append(span);
//   form.append(btn);

//   container.append(form);

//   // soutu = null;
//   // input = null;
//   // span = null;
//   // btn = null;
//   // form = null;

//   Object.defineProperties(this, {
//     ns: {
//       value: ns
//     },
//     form: {
//       value: form
//     }
//   })
// }

// function btnClick(t, input) {

//   console.log('btn is click!');

//   t.dispatchEvent({

//     type: 'search',
//     keyword: input.val()
//   });

//   return false;
// }

// function inputClick() {

//   console.log('input is click!');
//   // var parent = this.parentNode.parentNode;
//   var parent = Utils.node(this.parentNode);
//   var reparent = parent.parent();

//   // parent[0].style.borderColor = '#4791ff transparent #4791ff #4791ff';

//   // parent.removeEventListener('mouseenter', spanEnter, false);
//   // parent.removeEventListener('mouseout', spanOut, false);


//   parent.unbind('mouseenter');
//   parent.unbind('mouseleave');
//   parent.addClass('search-focus');

//   parent.removeEventListener('click',)
// }

// function inputBlur() {

//   console.log('input is blur!');

//   var parent = Utils.node(this.parentNode);
//   var reparent = parent.parent();

//   // parent.addEventListener('mouseenter', spanEnter, false);
//   // parent.addEventListener('mouseout', spanOut, false);
//   parent.on('mouseenter', spanEnter);
//   parent.on('mouseleave', spanOut);
//   parent.removeClass('search-focus');
// }

// function spanEnter() {

//   console.log('mouse is enter!');
//   // var parent = Utils.node(this.parentNode);
//   var parent = Utils.node(this);

//   // parent.style.borderColor = '#7b7b7b #b6b6b6 #b6b6b6 #7b7b7b ';
//   parent.addClass('search-hover');
// }

// function spanOut() {

//   console.log('mouse is out!');
//   // var parent = Utils.node(this.parentNode);
//   var parent = Utils.node(this);

//   // parent.style.borderColor = '#999 transparent #b3b3b3 #999';\
//   parent.removeClass('search-hover');
// }

// function soutuClick() {

//   console.log('soutu is click!');
// }



// export default Search;


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
  })
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