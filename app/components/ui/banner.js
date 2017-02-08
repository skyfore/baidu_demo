// banner.js
'use strict';

import Utils from '../utils/utils.js';

function Banner(container) {
	
	var sn = 'banner';

	var div = Utils.node('<div></div>');
	var banner = Utils.node('<img></img>');

	div.addClass(sn);
	banner.addClass( sn + '-img');

	banner.attr( 'src', 'https://www.baidu.com/img/bd_logo1.png');

	div.append(banner);
	container.append(div);

	banner = null;
	div = null;

	Object.defineProperties(this, {
		sn: {
			value: sn
		},
		div: {
			value: div
		}
	})
}

export default Banner;