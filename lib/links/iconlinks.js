//--------------------------------------------
//Global variables
var selected_link_id; //store the selected link id globally
var desktop_links = new Object();
var default_icon_init_left = 480;
var default_icon_init_top = 360;
var default_link_url = active_site_root + "lib/links/images/famfamfam_silk_icons-1.2/link_go.png";
var browser = new Browser();
var o = new Object();
o.zIndex = 0; //set element's initial zIndex
//--------------------------------------------
//Actions
function addIcon(link_name, link_url, icon_url, icon_pos_left, icon_pos_top, win_width, win_height, win_left, win_top) {
    if (!link_name || link_name == "") {
        alert("Link name can not be empty! Please input a link name...");
        return;
    }
    var link_id = "link:" + link_name;
    var link_label_id = "label" + link_id;
     
    if (document.getElementById(link_id)) {
        //alert("Link name: \"" + link_name + " \"has been used! Please use another one...");
        //return;
        removeIcon(link_id);
    }
    if (typeof (icon_url) == "undefined" || icon_url == "") {
        icon_url = default_link_url;
    }
    if (typeof (icon_pos_left) == "undefined" || icon_pos_left == "") {
        icon_pos_left = default_icon_init_left;
    }
    if (typeof (icon_pos_top) == "undefined" || icon_pos_top == "") {
        icon_pos_top = default_icon_init_top;
    }
    desktop_links[link_id] = [link_name, link_url, icon_url, icon_pos_left, icon_pos_top, win_width, win_height, win_left, win_top];
    var iconAction = "openLink('" + link_url + "','" + link_name + "'," + win_width + "," + win_height + "," + win_left + "," + win_top + ");";
    var icon_link_html = "<div id=\"" + link_id + "\" class=\"icon\" style=\"position:absolute;left:" + icon_pos_left + "px;top:" + icon_pos_top + "px;\" onmousedown=\"dragStart(event, '" + link_id + "')\"  ondblclick=\"linkFocusOff('" + link_label_id + "'); " + iconAction + "\"><acronym title=\"" + link_name + "\"><img src=\"" + icon_url + "\" alt=\"\" /><span id=\"" + link_label_id + "\" class=\"label\">" + link_name + "</span></acronym></div>";
    document.getElementById("icons").innerHTML += icon_link_html;
    default_icon_init_left = icon_pos_left + 32;
    default_icon_init_top = icon_pos_top + 32;
}
function removeIcon(link_id) {
    var perform_remove = false;
    if(link_id){
        perform_remove = true;
	}else{
		link_id = selected_link_id;
	    if (link_id) {
	        if (confirm("Are you sure you want to delete '" + link_id + "'?")) {
	            perform_remove = true;
	        }
	    }
	}
	if(perform_remove){
	    var elem = document.getElementById(link_id);
	    if (elem) {
	        desktop_links[link_id] = null;
	        elem.parentNode.removeChild(elem);
	    }
    }
}
function removeAllIcon(){
    desktop_links = new Object();
    document.getElementById("icons").innerHTML = "";
}
function hideIcon() {
    if (selected_link_id) {
        document.getElementById(selected_link_id).style.display = "none";
    }
}
function showIcon(link_id) {
    var linkElem = document.getElementById(link_id);
    if(!linkElem ) return;
    linkElem.style.display = "none";
}
function linkFocusOff(label_link_id) {
    var linkElem = document.getElementById(label_link_id);
    if(!linkElem ) return;
    linkElem.style.backgroundColor = "";
    if (linkElem.style.borderColor.indexOf("rgb") != -1) {
        linkElem.style.borderColor = "#B36F01";
    }
}
function linkReset(label_link_id) {
    var linkElem = document.getElementById(label_link_id);
    if(!linkElem ) return;
    linkElem.style.border = "";
    linkElem.style.backgroundColor = "";
}
function resetAll() {
    var allLabels = getElementsByClassName("label");
    if(!allLabels) return;
    for (var i = 0; i < allLabels; i++) {
        allLabels[i].style.border = "";
        allLabels[i].style.backgroundColor = "";
    }
}
//--------------------------------------------
//Drag
function Browser() {
    var ua;
    this.isIE = false;
    this.isNS = false;
    ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("msie") >= 0) {
        this.isIE = true;
        return;
    }
    s = "netscape6/";
    if (ua.indexOf(s) >= 0) {
        this.isNS = true;
        return;
    }
    s = "gecko";
    if (ua.indexOf(s) >= 0) {
        this.isNS = true;
        return;
    }
}
function dragStart(event, link_id) {
    var el;
    var x, y;
    o.elementId = document.getElementById(link_id);
    if (selected_link_id)
        linkReset('label' + selected_link_id);
    
    var elChild = o.elementId.getElementsByTagName("span");
    if (elChild[0].className == "label") {
        elChild[0].style.border = "1px dotted #CCA157";
        elChild[0].style.backgroundColor = "#8AA9DB";
    } else {
        if (elChild[1].className == "label") { //this is for IE after png hack
            elChild[1].style.border = "1px dotted #CCA157";
            elChild[1].style.backgroundColor = "#8AA9DB";
        }
    }
    selected_link_id = link_id; //set the link_id globally
    if (browser.isIE) {
        x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    if (browser.isNS) {
        x = event.clientX + window.scrollX;
        y = event.clientY + window.scrollY;
    }
    o.cursorStartX = x;
    o.cursorStartY = y;
    o.elStartLeft = parseInt(o.elementId.style.left, 10);
    o.elStartTop = parseInt(o.elementId.style.top, 10);
    if (isNaN(o.elStartLeft)) {
        o.elStartLeft = 0;
    }
    if (isNaN(o.elStartTop)) {
        o.elStartTop = 0;
    }
    o.elementId.style.zIndex = ++o.zIndex;
    if (browser.isIE) {
        document.attachEvent("onmousemove", dragGo);
        document.attachEvent("onmouseup", dragStop);
        //document.attachEvent("onmousedown", focusOff);
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    }
    if (browser.isNS) {
        document.addEventListener("mousemove", dragGo, true);
        document.addEventListener("mouseup", dragStop, true);
        event.preventDefault();
    }
    if (!event) {
        var event = window.event;
    }
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
}
function dragGo(event) {
    var x, y;
    if (browser.isIE) {
        x = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        y = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    if (browser.isNS) {
        x = event.clientX + window.scrollX;
        y = event.clientY + window.scrollY;
    }
    o.elementId.style.left = (o.elStartLeft + x - o.cursorStartX) + "px";
    o.elementId.style.top = (o.elStartTop + y - o.cursorStartY) + "px";
    
    desktop_links[selected_link_id][3] = parseInt(o.elementId.style.left, 10);
    desktop_links[selected_link_id][4] = parseInt(o.elementId.style.top, 10);
    
    if (browser.isIE) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    }
    if (browser.isNS) {
        event.preventDefault();
    }
    //setOpacity(document.getElementById(selected_link_id), 50); //set opacity to 50% while dragging
}
function dragStop(event) {
    if (browser.isIE) {
        document.detachEvent("onmousemove", dragGo);
        document.detachEvent("onmouseup", dragStop);
    }
    if (browser.isNS) {
        document.removeEventListener("mousemove", dragGo, true);
        document.removeEventListener("mouseup", dragStop, true);
    }
    //setOpacity(document.getElementById(selected_link_id), 100); //set opacity to 100% after dragging
}

//--------------------------------------------
// lib
function getFocusBG() {
    if (typeof (hints_path) == "undefined") {
        var hints_path = "/";
    }
    return "url('" + hints_path + "images/focus_bg.gif')";
}
function getElementsByClassName(className) {
    var children = document.getElementsByTagName("*") || document.all;
    var elements = new Array();
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var classNames = child.className.split(" ");
        for (var j = 0; j < classNames.length; j++) {
            if (classNames[j] == className) {
                elements.push(child);
                break;
            }
        }
    }
    return elements;
}
function openLink(url, title, win_width, win_height, win_left, win_top) {
    //use window in x-desktop
    OpenUrl(url, title, win_width, win_height, win_left, win_top);
}
function go(url, title) {
    location.href = url;
}
function setOpacity(obj, opacity) {
    opacity = (opacity == 100) ? 99.999 : opacity;
    // IE/Win
    obj.style.filter = "alpha(opacity:" + opacity + ")";
    // Safari<1.2, Konqueror
    obj.style.KHTMLOpacity = opacity / 100;
    // Older Mozilla and Firefox
    obj.style.MozOpacity = opacity / 100;
    // Safari 1.2, newer Firefox and Mozilla, CSS3
    obj.style.opacity = opacity / 100;
}
