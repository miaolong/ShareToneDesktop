install_sidemenu(menu_path);
var menu_images_path = menu_path + 'images/';
function toggle(button)  {
    button.ownerDocument.getElementById("desktop_skin_label").innerHTML = button.title;
    xDT.desktop.setSkin(button.title)
}
function set_login_user_name_label(name)  {
    if(typeof(name)=='undefined'){
        name = getCookie('__ac_name') || decode64(getCookie('__ac')||'').split(':')[0] || '';
    }
    document.getElementById("login_user_name_label").innerHTML = name;
}
add_sidemenu_expandaction('update_username', set_login_user_name_label);
create_sidemenu(
	'<table border="0" cellpadding="0" cellspacing="0">'+
    '    <tr>'+
    '        <td class="xF_Select">'+
    '            <b>Profiles</b><br/>'+
    '            <table><tr><td></td><td><form><table>' + 
    '                <tr><td>ID</td><td align="center">0</td><td align="center">1</td><td align="center">2</td><td align="center">3</td><td align="center">4</td><td align="center">5</td><td rowspan="3" width="25"></td><td rowspan="3" valign="middle">login name: <label id="login_user_name_label">Anonymous</label></td></tr>' + 
    '                <tr><td>Save</td><td><img src="' + menu_images_path + 'store.gif" onmousedown="this.src=\'' + menu_images_path + 'store_pressed.gif\'" onmouseup="store_profile_to_server(0); this.src=\'' + menu_images_path + 'store.gif\'" alt="Save profile 0 to server" /></td>'+
    '                                 <td><img src="' + menu_images_path + 'store.gif" onmousedown="this.src=\'' + menu_images_path + 'store_pressed.gif\'" onmouseup="store_profile_to_server(1); this.src=\'' + menu_images_path + 'store.gif\'" alt="Save profile 1 to server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'store.gif" onmousedown="this.src=\'' + menu_images_path + 'store_pressed.gif\'" onmouseup="store_profile_to_server(2); this.src=\'' + menu_images_path + 'store.gif\'" alt="Save profile 2 to server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'store.gif" onmousedown="this.src=\'' + menu_images_path + 'store_pressed.gif\'" onmouseup="store_profile_to_server(3); this.src=\'' + menu_images_path + 'store.gif\'" alt="Save profile 3 to server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'store.gif" onmousedown="this.src=\'' + menu_images_path + 'store_pressed.gif\'" onmouseup="store_profile_to_server(4); this.src=\'' + menu_images_path + 'store.gif\'" alt="Save profile 4 to server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'store.gif" onmousedown="this.src=\'' + menu_images_path + 'store_pressed.gif\'" onmouseup="store_profile_to_server(5); this.src=\'' + menu_images_path + 'store.gif\'" alt="Save profile 5 to server" /></td></tr>' +
    '                <tr><td>Load</td><td><img src="' + menu_images_path + 'load.gif" onmousedown="this.src=\'' + menu_images_path + 'load_pressed.gif\'" onmouseup="load_profile_from_server(0); this.src=\'' + menu_images_path + 'load.gif\'" alt="Load profile 0 from server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'load.gif" onmousedown="this.src=\'' + menu_images_path + 'load_pressed.gif\'" onmouseup="load_profile_from_server(1); this.src=\'' + menu_images_path + 'load.gif\'" alt="Load profile 1 from server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'load.gif" onmousedown="this.src=\'' + menu_images_path + 'load_pressed.gif\'" onmouseup="load_profile_from_server(2); this.src=\'' + menu_images_path + 'load.gif\'" alt="Load profile 2 from server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'load.gif" onmousedown="this.src=\'' + menu_images_path + 'load_pressed.gif\'" onmouseup="load_profile_from_server(3); this.src=\'' + menu_images_path + 'load.gif\'" alt="Load profile 3 from server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'load.gif" onmousedown="this.src=\'' + menu_images_path + 'load_pressed.gif\'" onmouseup="load_profile_from_server(4); this.src=\'' + menu_images_path + 'load.gif\'" alt="Load profile 4 from server" /></td>' +
    '                                 <td><img src="' + menu_images_path + 'load.gif" onmousedown="this.src=\'' + menu_images_path + 'load_pressed.gif\'" onmouseup="load_profile_from_server(5); this.src=\'' + menu_images_path + 'load.gif\'" alt="Load profile 5 from server" /></td></tr>' +
    '            </table></form></td></tr></table>'+
    '        </td>'+
    '    </tr>'+    
    /*
    '    <tr>'+
    '        <td class="xF_Select">'+
    '            <b>Skin operations</b> current skin name: <label id="desktop_skin_label">Default</label>'+
    '        </td>'+
    '    </tr>'+
	'    <tr>'+
	'        <td valign="top" align="center">'+
    '            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;SHARETONE&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
    '                onmouseup="toggle(this)" title="SHARETONE" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Default&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)" title="DEFAULT" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Elmo (No Images)&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);"'+
	'                onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'" onmouseup="toggle(this)" title="NONE" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;OSX Server&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);"'+
	'                onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'" onmouseup="toggle(this)" title="OSX" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;OSX Aqua&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)" title="OSXA" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;KDE&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)" title="KDE" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Gnome Simple&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);"'+
	'                onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'" onmouseup="toggle(this)" title="GNOME" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Gnome Aeon&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);"'+
	'                onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'" onmouseup="toggle(this)" title="AEON" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Windows&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)" title="WIN" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Windows XP&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);"'+
	'                onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'" onmouseup="toggle(this)" title="XP" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;SBO&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)" title="SBO" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Redhat&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)" title="REDHAT" />'+
	'            <img src="' + menu_images_path + 'target.gif" onmouseover="parent.hints_show(this, \'Switch desktop skin to: &lt;b&gt;Suse&lt;/b&gt;\')" onmouseout="parent.hints_hide(this);" onmousedown="this.src=\'' + menu_images_path + 'target_pressed.gif\'"'+
	'                onmouseup="toggle(this)"  title="SUSE" />'+
	'        </td>'+
	'    </tr>'+
    */
	'    <tr>'+
	'        <td class="xF_Select">'+
	'            <b>Windows</b>'+
	'            <form name="form_window">'+
    '                <table><tr><td>'+
	'                    <input class="xF_button" type="button" value="minimize" onclick="xDT.minimizeAllWindows(\'test\');" class="xF_button" id=Button1 />'+
	'                    <input class="xF_button" type="button" value="restore" onclick="xDT.restoreAllWindows();" class="xF_button" id=Button2 />'+
    '                    <input class="xF_button" type="button" value="close" onclick="xDT.closeAllWindows();" id=Button3 />'+
	'                    <input class="xF_button" type="button" value="arrange" onclick="xDT.arrangeAllWindows(32,75,32,32,\'test\');" class="xF_button" id=Button4 />'+
    '                </td></tr></table>'+
    '            </form>'+
	'        </td>'+
	'    </tr>'+
	'    <tr>'+
    '        <td class="xF_Select">'+
    '            <b>Icon Links</b>'+
	'            <form name="form_url">'+
    '                <table>'+
    '                    <tr><td colspan=2><input class="xF_button" type="button" value="create" class="xF_submit" onclick="javascript:addIcon(document.form_url.link_name.value, document.form_url.url.value, document.form_url.icon_url.value)" />'+
    '                                      <input class="xF_button" type="button" value="remove" class="xF_submit" onclick="javascript:removeIcon()" />'+
    '                                      <input class="xF_button" type="button" value="open" class="xF_submit" onclick="javascript:OpenUrl(document.form_url.url.value, document.form_url.link_name.value, 640, 480)" /></td></tr>'+
    '                    <tr><td nowrap>link name</td>'+
    '                        <td><input type="TEXT" name="link_name" value="" class="xF_text" style="width: 290px" /></td></tr>'+
    '                    <tr><td nowrap>link url</td>'+
	'                        <td><input type="TEXT" name="url" value="http://www.google.com" class="xF_text" style="width: 290px" /></td></tr>'+
    '                    <tr><td nowrap>icon url</td>'+
    '                        <td><input type="TEXT" name="icon_url" value="" class="xF_text" style="width: 290px" /></td></tr>'+
    '                </table>'+
    '            </form>'+
    '        </td>'+
    '    </tr>'+
	'</table>');
