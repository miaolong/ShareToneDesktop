//global var
var active_skin_name = 'SHARETONE';
var active_site_root = document.baseURI || './';

var menu_path    = active_site_root + 'lib/menu/sidemenu/';
var links_path   = active_site_root + 'lib/links/';
var desktop_path = active_site_root + 'lib/x-desktop/xDT/';

function load_default_profile_from_server(){
    var profile_str = null;
    function pageListener(pageObject){
        profile_str = unescape(pageObject['responseText']);
	    if(profile_str!=null){
	        var personal_profile = JSON.parse(profile_str);
	        _set_active_profile(personal_profile);
	    }
    }
	loadPage(active_site_root + "lib/scripts/get_default_profile", pageListener, null, null, true);
}
function load_profile_from_server(profile_id){
    var profile_str = null;
    function pageListener(pageObject){
        profile_str = unescape(pageObject['responseText']);
	    if(profile_str!=null){
	        var personal_profile = JSON.parse(profile_str);
	        _set_active_profile(personal_profile);
	    }
    }
    var header = new Object();
    var body = 'DESKTOP_ID=' + profile_id;
	loadPage(active_site_root + "lib/scripts/load_profile", pageListener, body, header, true);
}
function store_profile_to_server(profile_id){
    var personal_profile = _get_active_profile();
    if(typeof(personal_profile)=='undefined' || personal_profile==null || personal_profile=='')
        return;
    profile_str = JSON.stringify(personal_profile);
    function pageListener(pageObject){
        alert(pageObject['responseText']);
    }
    var header = new Object();
    var body = 'PROFILE=' + escape(profile_str);
    body += '&DESKTOP_ID=' + profile_id;
	loadPage(active_site_root + "lib/scripts/store_profile", pageListener, body, header, true);
}
function _get_active_profile(){
    var personal_profile = new Object();
    personal_profile['active_skin_name'] = active_skin_name;
    personal_profile['desktop_links'] = desktop_links;
    var desktop_opened_windows = new Array();
    var wNames = xDTwin.getAllWindows(15).split('/');
    for (var i in wNames){
        var wName = wNames[i];
        var wTitle = xDT.prop(wName,"wTitle");
        var wX = xDT.prop(wName,"wX");
        var wY = xDT.prop(wName,"wY");
        var wWidth = xDT.prop(wName,"wWidth");
        var wHeight = xDT.prop(wName,"wHeight");
        var wPos = xDT.prop(wName,"wPos");
        var wStat = xDT.prop(wName,"wStat");
        var wUrl = xDT.prop(wName,"wUrl");
        // "wIcon" "wHtml"
        desktop_opened_windows.push([wTitle, wX, wY, wWidth, wHeight, wPos, wStat, wUrl])
    }
    personal_profile['desktop_opened_windows'] = desktop_opened_windows;
    return personal_profile;
}

function _set_active_profile(personal_profile){
    if(!personal_profile)
        return;
    active_skin_name = personal_profile['active_skin_name'];
    xDT.closeAllWindows();
    desktop_opened_windows = personal_profile['desktop_opened_windows'];
    for (var i in desktop_opened_windows){
        var w = desktop_opened_windows[i];
        var wTitle = w[0];
        var wX = w[1];
        var wY = w[2];
        var wWidth = w[3];
        var wHeight = w[4];
        var wPos = w[5];
        var wStat = w[6];
        var wUrl = w[7];
        wName = OpenUrl(wUrl, wTitle, wWidth, wHeight, wX, wY);
        if (wStat=="max") xDT.maximizeWindow(wName);
        if (wStat=="min") xDT.minimizeWindow(wName);
    }
    var new_desktop_links = personal_profile['desktop_links'];
    //document.getElementById("icons").innerHTML = desktop_links;
    removeAllIcon();
    for(var link_id in new_desktop_links){
        var link = new_desktop_links[link_id];
        addIcon(link[0], link[1], link[2], link[3], link[4], link[5], link[6], link[7], link[8]);
    }
    correctPNG();
}