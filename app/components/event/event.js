// event.js
'use strict';

export default {

	 btnClick() {

	 	console.log('btn is click!');
	 	return false;
	 },

	 inputClick() {

	 	console.log('input is click!');
	 	var parent = this.parentNode.parentNode;

	 	parent.style.borderColor = '#4791ff transparent #4791ff #4791ff';


	 	//因为作用域的问题，这里会报错。

	 	parent.removeEventListener('mouseenter', spanEnter, false);
	 	parent.removeEventListener('mouseout', spanOut, false);

	 },

	 inputBlur() {

	 	console.log('input is blur!');

	 	var parent = this.parentNode.parentNode;


	 	parent.addEventListener('mouseenter', spanEnter, false);
	 	parent.addEventListener('mouseout', spanOut, false);
	 },

	 spanEnter() {

	 	console.log('mouse is enter!');
	 	var parent = this.parentNode;

	 	parent.style.borderColor = '#7b7b7b #b6b6b6 #b6b6b6 #7b7b7b ';
	 },

	 spanOut() {

	 	console.log('mouse is out!');
	 	var parent = this.parentNode;

	 	parent.style.borderColor = '#999 transparent #b3b3b3 #999';
	 },

	 soutuClick() {

	 	console.log('soutu is click!');
	 }
}