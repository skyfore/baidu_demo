// menu-item.js

'use strict';

import Utils from '../utils/utils.js';

function MenuItem(container) {
	
	var sn = 'menu-item-';

	var ul = Utils.node('<div></div>');
	ul.addClass(sn + 'ul');

	var nm = Utils.node('<a href="#">糯米</a>');

	var news = Utils.node('<a href="#">新闻</a>');

	var hao123 = Utils.node('<a href="#">hao123</a>');

	var map = Utils.node('<a href="#">地图</a>');

	var video = Utils.node('<a href="#">视频</a>');

	var tieba = Utils.node('<a href="#">贴吧</a>');

	var login = Utils.node('<a href="#">登录</a>');

	var set = Utils.node('<a href="#">设置</a>');

	var more = Utils.node('<a href="#">更多产品</a>');

	ul.append(nm);
	ul.append(news);
	ul.append(hao123);
	ul.append(map);
	ul.append(video);
	ul.append(tieba);
	ul.append(login);
	ul.append(set);
	ul.append(more);

	container.append(ul);

	more.on('mouseenter', moreEnter);

	ul = null;
	nm = null;
	news = null;
	hao123 = null;
	map = null;
	video = null;
	tieba = null;
	login = null;
	set = null;
	more = null;

	Object.defineProperties(this, {
		sn: {
			value: sn
		}
	})
}

function moreEnter(){

	var sidebar = Utils.node('.menu-sidebar-container');

	var height = document.body.clientHeight;

	sidebar.css('height', height - 1 + 'px');

	sidebar.show();
}

function sidebarOut(){

	Utils.node(this).hide();
}


export default MenuItem;