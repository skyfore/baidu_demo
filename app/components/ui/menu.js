// menu.js

'use strict';

import MenuItem from './menu-item.js';
import SideBar from './sidebar.js';
import Utils from '../utils/utils.js';

function Menu(container) {
	
	var sn = 'menu-';

	var div = Utils.node('<div></div>');
	div.addClass(sn + 'container');

	var menuItem = new MenuItem(div);
	var sideBar = new SideBar(container);

	container.append(div);

	
	

}

export default Menu;