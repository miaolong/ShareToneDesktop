//-------------------------------------------------------
// create desktop
var xDT = new xDesktop(desktop_path, active_skin_name);
function start() {
    window.moveTo(0,0);
    window.resizeTo(screen.width, screen.height);
    xDT.desktop.init();
    //open '/front-page' on startup
    //OpenUrl(active_site_root + 'front-page', 'FrontPage', 640, 480);
    load_default_profile_from_server();
    //
    window.setTimeout( "var u = document.location.href.split('?open=');"+
                       "u = u[u.length-1];"+
                       "if(u != document.location.href){"+
				       "    var t = u.split('/');"+
				       "    t = t[t.length-1];"+
				       "    OpenUrl(u, t, 640, 480);}",
				       1000);
}
document.write('<link rel="stylesheet" type="text/css" href="' + xDT.resPath() + 'skins/' + xDT.dSkin() + '/' + xDT.dSkin() + '.css' + '">');

function getWinElement(obj){
    var elem=null;
    if (bw.ie){
        elem = obj.document.parentWindow.frameElement;
        while(elem && !elem.id.match(/^xDT/))
            elem = elem.parentElement;
    }else{
        elem = obj.ownerDocument.defaultView.frameElement;
        while(elem && !elem.id.match(/^xDT/))
            elem = elem.parentNode;
    }
    return elem;
}

function getIFrameElement(obj){
    var elem=null;
    if (bw.ie){
        elem = obj.document.parentWindow.frameElement;
    }else{
        elem = obj.ownerDocument.defaultView.frameElement;
    }
    return elem;
}
//-------------------------------------------------------
//create window
var default_win_init_width = 180;
var default_win_init_height = 200;
var default_win_init_pos = 'center'; //'ControlPanel:R:10';
function OpenUrl(url, title, win_init_width, win_init_height, win_init_left, win_init_top) {
    if(typeof(title)=='undefined' || title=='')
        title = url;
    //if (url == "http://" || url == "") {alert("invalid URL"); return false; }
    if (url == "") {alert("invalid URL"); return false; }
    
    if (typeof(win_init_width)=='undefined' || win_init_width=='')
        win_init_width = default_win_init_width;
    if (typeof(win_init_height)=='undefined' || win_init_height=='')
        win_init_height = default_win_init_height;

    var pos = '';
    if (typeof(win_init_left)=='undefined' || win_init_left=='' || typeof(win_init_left)=='undefined' || win_init_left=='')
        pos = default_win_init_pos;
    else
        pos = win_init_left + "," + win_init_top;
    
    if(title.length > 64)
        title = title.substring(0,64) + "..."
    
    var wName = xDT.addWindow("",title,default_win_init_width,default_win_init_height,pos,xDT.dSkin());
    if (wName.match(/^w/)) {
        //setTimeout("xDT.url('" + wName + "','" + url + "')",250);
        xDT.url(wName,url);
        xDT.resizeWindow(wName,win_init_width,win_init_height,pos);
        xDT.show(wName);
        return wName;
    }else
        alert("Unknow window: " + wName);
        
    return false;
}
function WriteHTML(hcode) {
    var win = xDT.addWindow("",'HTML Code Window',default_win_init_width,default_win_init_height,default_win_init_pos,xDT.dSkin());
    if (win.match(/^w/)) {
		xDT.html(win,hcode);
		xDT.show(win);
    } else
        alert("Unknow window: " + win);
}