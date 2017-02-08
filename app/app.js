// search.js

'use strict';

import '../css/main.css';

import $ from 'jquery';
import UI from './components/ui-manager.js';


$(document).ready(function () {

	// 初始化所有UI模块
	var body = $('body');
	// var height = window.innerHeight;

	function initUI() {
		
		// UI.Menu(body);
		// UI.Banner(body);
		// UI.Search(body);
		// 
		var menu = new UI.Menu(body);
		var main = new UI.Main(body);
	}
	initUI();

	// 调整高度
	// $('.banner').css('padding-top', height / 2 - '300' + 'px');
	
});
