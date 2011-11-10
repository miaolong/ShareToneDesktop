//Create default icon links on startup
/*
 * E.g: 'here/portlet_login/macros/portlet'  ==>
 *      '/pt_macros_render?macropath=here%2Fportlet_login%2Fmacros%2Fportlet'
 */
function _get_portlet_url(portlet_short_url) {
    return active_site_root + "pt_macros_render?macropath=" + portlet_short_url.split("/").join("%2F");
}
function create_desktop_default_icons() {
    var icon_pos_init = 80;
    var icon_pos_left = icon_pos_init;
    var icon_pos_top = icon_pos_init;
    var icon_pos_offset = 55;
    var icon_url = links_path + "images/logo.gif";
    var default_portlet_width = 180;
    var default_portlet_height = 240;
    var default_win_width = 640;
    var default_win_height = 480;
    //----
    //Home
    addIcon(" ", active_site_root + "front-page", icon_url, 8, 8, default_win_width, default_win_height);
    //----
    icon_pos_top += icon_pos_offset; 
    //Package Center
    icon_pos_left = icon_pos_init;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/package.png";
    addIcon("Package Center", active_site_root + "PackageCenter", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
    //Hosting Service
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/application_home.png";
    addIcon("Hosting Service", active_site_root + "HostingService", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
    //SVN Repository
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/brick.png";
    addIcon("SVN Repository", active_site_root + "SVNRepository", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);    
    //----
    icon_pos_top += icon_pos_offset;    
    //Clock
    icon_pos_left = icon_pos_init;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/clock.png";
    addIcon("Clock", active_site_root + "lib/clocks/FlashClock1/testClock", icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);
    //Calendar
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/calendar.png";
    addIcon("Calendar", _get_portlet_url("here/portlet_calendar/macros/portlet"), icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);    
    //News
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/newspaper.png";
    addIcon("News", _get_portlet_url("here/portlet_news/macros/portlet"), icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);      
    //Events
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/group_link.png";
    addIcon("Events", _get_portlet_url("here/portlet_events/macros/portlet"), icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);
    //----
    icon_pos_top += icon_pos_offset;
    //Wiki
    icon_pos_left = icon_pos_init;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/page_world.png";
    addIcon("Wiki", active_site_root + "Wiki", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
    //Forums
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/folder_page.png";
    addIcon("Forums", active_site_root + "Forums", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
    //Sitemap
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/zoom.png";
    addIcon("Sitemap", active_site_root + "sitemap", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);      
    //Search
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/find.png";
    addIcon("Search", active_site_root + "search_form", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);      
    //Wiki
    //Blog
    //---    
    icon_pos_top += icon_pos_offset;
    //Login/Join
    icon_pos_left = icon_pos_init;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/application_key.png";
    addIcon("Login/Join", _get_portlet_url("here/portlet_login/macros/portlet")/*"/login_form"*/, icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);
    //Recent Changes
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/browser_galeon.png";
    addIcon("Recent Changes", _get_portlet_url("here/portlet_recent/macros/portlet"), icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);
    //Review
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/note_edit.png";
    addIcon("Review", _get_portlet_url("here/portlet_review/macros/portlet"), icon_url, icon_pos_left, icon_pos_top, default_portlet_width, default_portlet_height);       
    //Folder
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/folder_edit.png";
    addIcon("Folder", active_site_root + "folder_contents", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
    //----
    icon_pos_top += icon_pos_offset;
    //Zope Manage Interface
    icon_pos_left = icon_pos_init;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/plugin.png";
    addIcon("Zope Manage Interface", active_site_root + "manage", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
    //Quick Installer Tool
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/cog.png";
    addIcon("Quick Installer Tool", active_site_root + "portal_quickinstaller/manage", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);        
    //Site Error Log
    icon_pos_left += icon_pos_offset;
    icon_url = links_path + "images/famfamfam_silk_icons-1.2/server_error.png";
    addIcon(" Site Error Log", active_site_root + "error_log/manage", icon_url, icon_pos_left, icon_pos_top, default_win_width, default_win_height);
}
document.write("<div id=icons></div>");
//create_desktop_default_icons();

