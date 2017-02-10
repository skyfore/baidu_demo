// menu.js

// 'use strict';

// import MenuItem from './menu-item.js';
// import SideBar from './sidebar.js';
// import Utils from '../utils/utils.js';

// function Menu(container) {

//   var ns = 'menu-';

//   var div = Utils.node('<div></div>');
//   div.addClass(ns + 'container');

//   var menuItem = new MenuItem(div);
//   var sideBar = new SideBar(container);

//   container.append(div);




// }

// export default Menu;


'use strict';

import Base from './base.js';
import Utils from '../utils/utils.js';
import MenuItem from './menu-item.js';

function Menu(container) {
  
  Base.call(this);

  var ns = 'menu';

  var frame = Utils.node('<div></div>');
  frame.addClass(ns + '-frame');

  container.append(frame);
  // this.setupItems();

  // console.log(this);

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

Object.assign(Menu.prototype, Base.prototype, {

  setupItems: function (datas) {

    function mouseEnter() {
      this.downShow();
    }

    function mouseLeave() {
      this.downHide();
    }

    var self = this;

    if (!self.items) self.items = [];

    if (Array.isArray(datas)) {

      datas.forEach(function(data) {

        let menuItem = new MenuItem(self.frame);
        menuItem.setItem(data);

        self.items.push(menuItem);

        if (data.down) {

          menuItem.setDown(data.down);
          menuItem.addEventListener('mouseenter', mouseEnter);
          menuItem.addEventListener('mouseleave', mouseLeave);
        }
      })
    }
  }
});


// function TestClass (){}

// TestClass.prototype.test1 = 'test1';



export default Menu;