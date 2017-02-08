// 
'use strict';

import Utils from '../utils/utils.js';

function SideBar(container) {
	
	var sn = 'menu-sidebar-';

	var div = Utils.node('<div></div>');
	div.addClass(sn + 'container');

	var more = Utils.node('<a href="#" id="more">更多产品</a>');

	var music = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>音乐</a>');

	var pic = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>图片</a>');

	var zhidao = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>知道</a>');

	var wenku = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>文库</a>');

	var list = Utils.node('<a href="#"><span class="menu-sidebar-item"></span>风云榜</a>');

	div.append(more);
	div.append(music);
	div.append(pic);
	div.append(zhidao);
	div.append(wenku);
	div.append(list);

	container.append(div);

	div.on('mouseleave', sidebarOut);

	more = null;
	music = null;
	pic = null;
	zhidao = null;
	wenku = null;
	list = null;
	div = null;

	Object.defineProperties(this, {
		sn: {
			value: sn
		}
	})
}

function sidebarOut(){

	Utils.node(this).hide();
}

export default SideBar;