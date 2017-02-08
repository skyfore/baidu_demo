// main.js

'use strict';

import Utils from '../utils/utils.js';
import Banner from './banner.js';
import Search from './search.js';

function Main(container){

	var sn = 'main-';

	var div = Utils.node('<div></div>');
	div.addClass(sn + 'container');

	//初始化 Search 和 Banner
	
	var banner = new Banner(div);
	var search = new Search(div);

	container.append(div);
	// div.append(search.form);
	// div.append(banner.div);

	Object.defineProperties(this, {
		sn: {
			value: sn
		},
		div:{
			value: div
		}
	})

}

export default Main;