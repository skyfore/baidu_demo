//search.js

'use strict';

import Utils from '../utils/utils.js';
// import Handle from '../event/event.js';


function Search(container) {

    var sn = 'search';

    var form = Utils.node('<form></form>');
    form.addClass(sn);
    // form.addClass(sn +'-focus');

    var span = Utils.node('<span></span>');
    span.addClass(sn + '-span');
    span.addClass(sn +'-focus');

    var input = Utils.node('<input autofocus="autofocus"></input>');
    input.addClass(sn + '-input');

    var soutu = Utils.node('<span></span>');
    soutu.addClass(sn + '-soutu');

    var btn = Utils.node('<button>百度一下</button>');
    btn.addClass(sn + '-btn');



    soutu.on( 'click', soutuClick);
    input.on( 'click', inputClick);
    input.on( 'blur', inputBlur);
    // span.on( 'mouseenter', spanEnter);
    // span.on( 'mouseout', spanOut);
    btn.on( 'click', btnClick);

    span.append(input);
    span.append(soutu);

    form.append(span);
    form.append(btn);

    container.append(form);

    // soutu = null;
    // input = null;
    // span = null;
    // btn = null;
    // form = null;

    Object.defineProperties(this, {
        sn: {
            value: sn
        },
        form: {
            value: form
        }
    })
}

function btnClick() {

    console.log('btn is click!');
    return false;
}

function inputClick() {

    console.log('input is click!');
    // var parent = this.parentNode.parentNode;
    var parent = Utils.node(this.parentNode);
    var reparent = parent.parent();

    // parent[0].style.borderColor = '#4791ff transparent #4791ff #4791ff';

    // parent.removeEventListener('mouseenter', spanEnter, false);
    // parent.removeEventListener('mouseout', spanOut, false);
    

    parent.unbind('mouseenter');
    parent.unbind('mouseleave');
    parent.addClass('search-focus');
}

function inputBlur() {

    console.log('input is blur!');

    var parent = Utils.node(this.parentNode);
    var reparent = parent.parent();

    // parent.addEventListener('mouseenter', spanEnter, false);
    // parent.addEventListener('mouseout', spanOut, false);
    parent.on( 'mouseenter', spanEnter);
    parent.on( 'mouseleave', spanOut);
    parent.removeClass('search-focus');
}

function spanEnter() {

    console.log('mouse is enter!');
    // var parent = Utils.node(this.parentNode);
    var parent = Utils.node(this);

    // parent.style.borderColor = '#7b7b7b #b6b6b6 #b6b6b6 #7b7b7b ';
    parent.addClass('search-hover');
}

function spanOut() {

    console.log('mouse is out!');
    // var parent = Utils.node(this.parentNode);
    var parent = Utils.node(this);

    // parent.style.borderColor = '#999 transparent #b3b3b3 #999';\
    parent.removeClass('search-hover');
}

function soutuClick() {

    console.log('soutu is click!');
}



export default Search;
