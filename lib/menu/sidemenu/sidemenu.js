// Global variables
var master = new Object("element");
master.curLeft = -120;
master.curTop = 10;
master.gapLeft = 0;
master.gapTop = 0;
master.timer = null;
var expandState = 0;
var sidemenu = null;
var sidemenu_path = '';
var ie = document.all ? 1 : 0;
var ns = document.layers ? 1 : 0;
var sidemenu_expand_actions = new Object();

/*
install sidemenu_path that is used for accessing image and css files
*/
function install_sidemenu(menu_path){
    if(menu_path)
        sidemenu_path = menu_path;
}
/*
add menu expand actions
*/
function add_sidemenu_expandaction(action_name, action_fun){
    try{
        sidemenu_expand_actions[action_name] = action_fun;
    }catch(exception){}
}
/*
menu_action_html    a block of html string eg.
    <a href="http://A" class="NavJump"><b>A</b></a><br/>
    <a href="http://B" class="NavJump"><b>B</b></a><br/>
    <a href="http://C" class="NavJump"><b>C</b></a><br/>
*/
function create_sidemenu(menu_action_html){
    var menu_images_path = sidemenu_path + 'images/';
	document.write(
		'<link rel="STYLESHEET" type="text/css" href="' + sidemenu_path + 'sidemenu.css">' +
        '<br/><br/><br/>' +
		'<div id="master">' +
		'    <div id="menu">' +
		'        <table border="0" width="18" cellspacing="0" cellpadding="0">' +
		'            <tr>' +
		'                <td width="100%">' +
		'                    <a href="javascript:expand();" onfocus="javascript:this.blur();" onmouseout="javascript:expand();" onblur="javascript:expand();">' +
		'                        <img id="menutop" border="0" src="' + menu_images_path + 'menu.png"></a>' +
		'                </td>' +
		'            </tr>' +
		'        </table>' +
		'    </div>' +
		'    <div id="top">' +
		'        <table border="0" width="380" cellspacing="0" cellpadding="0">' +
		'            <tr>' +
		'                <td valign="top" style="background:url(' + menu_images_path + 'top.png) 0 0 repeat-x; width: 100%; height: 100%;">' +
		'                </td>' +
		'            </tr>' +
		'        </table>' +
		'    </div>' +
		'    <div id="screen">' +
		'        <table border="0" width="380" cellspacing="0" cellpadding="5">' +
		'            <tr>' +
		'                <td width="100%" height="100%" bgcolor="#91CA8C">' +
		'                    <table border="0" width="100%" height="100%" bgcolor="#91CA8C" cellspacing="0" cellpadding="0">' +
		'                        <tr>' +
		'                            <td width="100%" height="100%">' +
		'                                <table border="0" width="100%" height="100%" cellspacing="1" cellpadding="5">' +
		'                                    <tr>' +
		'                                        <td id="menu_contents_screen" width="100%" height="265" bgcolor="#FFFFFF">' +
		'                                            <font class="NavJump"><br> </font>' +
		'                                        </td>' +
		'                                    </tr>' +
		'                                </table>' +
		'                            </td>' +
		'                        </tr>' +
		'                    </table>' +
		'                </td>' +
		'            </tr>' +
		'        </table>' +
		'    </div>' +
		'    <div id="screenlinks">' +
		'        <table border="0" width="380" cellspacing="0" cellpadding="5">' +
		'            <tr>' +
		'                <td width="100%">' +
		'                    <table border="0" width="100%" bgcolor="#91CA8C" cellspacing="0" cellpadding="0">' +
		'                        <tr>' +
		'                            <td width="100%">' +
		'                                <table border="0" width="100%" cellspacing="1" cellpadding="5">' +
		'                                    <tr>' +
		'                                        <td id="menu_contents" width="100%" bgcolor="#91CA8C">' +
		'                                        ' + menu_action_html + '' +
		'                                        </td>' +
		'                                    </tr>' +
		'                                </table>' +
		'                            </td>' +
		'                        </tr>' +
		'                    </table>' +
		'                </td>' +
		'            </tr>' +
		'        </table>' +
		'    </div>' +
		'</div>');
    document.write("<style type=\"text/css\">");
    document.write("#screen\t{filter:Alpha(Opacity=15); -moz-opacity:0.15;}");
    document.write("</style>");
    sidemenu = document.all.master;
	setInterval("FixY()", 100);
    adjustMenuScreen();
}

function moveAlong(layerName, paceLeft, paceTop, fromLeft, fromTop) {
    clearTimeout(eval(layerName).timer);
    if (eval(layerName).curLeft != fromLeft) {
        if ((Math.max(eval(layerName).curLeft, fromLeft) - Math.min(eval(layerName).curLeft, fromLeft)) < paceLeft) {
            eval(layerName).curLeft = fromLeft;
        } else {
            if (eval(layerName).curLeft < fromLeft) {
                eval(layerName).curLeft = eval(layerName).curLeft + paceLeft;
            } else {
                if (eval(layerName).curLeft > fromLeft) {
                    eval(layerName).curLeft = eval(layerName).curLeft - paceLeft;
                }
            }
        }
        if (typeof(document.all[layerName]) != 'undefined') {
            document.all[layerName].style.left = eval(layerName).curLeft;
        }else {
            document[layerName].left = eval(layerName).curLeft;
        }
    }
    if (eval(layerName).curTop != fromTop) {
        if ((Math.max(eval(layerName).curTop, fromTop) - Math.min(eval(layerName).curTop, fromTop)) < paceTop) {
            eval(layerName).curTop = fromTop;
        } else {
            if (eval(layerName).curTop < fromTop) {
                eval(layerName).curTop = eval(layerName).curTop + paceTop;
            } else {
                if (eval(layerName).curTop > fromTop) {
                    eval(layerName).curTop = eval(layerName).curTop - paceTop;
                }
            }
        }
        if (typeof(document.all[layerName]) != 'undefined') {
            document.all[layerName].style.top = eval(layerName).curTop;
        }else{
            document[layerName].top = eval(layerName).curTop;
        }
    }
    eval(layerName).timer = setTimeout("moveAlong(\"" + layerName + "\"," + paceLeft + "," + paceTop + "," + fromLeft + "," + fromTop + ")", 30);
}
function setPace(layerName, fromLeft, fromTop, motionSpeed) {
    eval(layerName).gapLeft = (Math.max(eval(layerName).curLeft, fromLeft) - Math.min(eval(layerName).curLeft, fromLeft)) / motionSpeed;
    eval(layerName).gapTop = (Math.max(eval(layerName).curTop, fromTop) - Math.min(eval(layerName).curTop, fromTop)) / motionSpeed;
    moveAlong(layerName, eval(layerName).gapLeft, eval(layerName).gapTop, fromLeft, fromTop);
}
function expand() {
    var menu_images_path = sidemenu_path + 'images/';
    if (expandState == 0) {
        setPace("master", 0, 10, 10);
        document.getElementById('menutop').src = menu_images_path + "menub.png";
        expandState = 1;
        for(action_name in sidemenu_expand_actions){
            sidemenu_expand_actions[action_name]();
        }
    } else {
        setPace("master", -380, 10, 10);
        document.getElementById('menutop').src = menu_images_path + "menu.png";
        expandState = 0;
    }
}
function FixY() {
    if (ie) {
        sidemenu.style.top = document.body.scrollTop + 22;
    }
    if (ns) {
        sidemenu.top = window.pageYOffset + 22;
    }
}
function adjustMenuScreen(){
    try{
        document.getElementById("menu_contents_screen").height = document.getElementById("menu_contents").offsetHeight + 5;
    }catch(exception){}
}

