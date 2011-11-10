/* ================================ */
/* SKIN && DESKTOP Apple OsX	    */
/* ================================ */
function skin_OSX(wName) {
  var frame_bgcolor = "#C0C0C0";
  var frame_titleclass = "xDT_wTitleB";
  var frame_borderwidth = 2;
  var frame_topheight = 13;
  var frame_bottomheight = 10;
  var frame_contentbgcolor = '#E6E6E6';
  var frame_dummypic = xDT.resPath() + 'images/blank.gif';
  var iconpath = xDT.resPath() + 'skins/OSX';
  var frame_stylecolor = '#000000';
  var frame_border = 1;
  var frame_bordertype = "outset"; // solid, outset, inset
  var frame_style = 	'border-top: ' + frame_border + 'px ' + frame_stylecolor + ' ' + frame_bordertype + '; ' +
  			'border-bottom: ' + frame_border + 'px ' + frame_stylecolor + ' ' + frame_bordertype + '; ' +
  			'border-left: ' + frame_border + 'px ' + frame_stylecolor + ' ' + frame_bordertype + '; ' +
  			'border-right: ' + frame_border + 'px ' + frame_stylecolor + ' ' + frame_bordertype + '; ';
  return (
  			'<table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%"><tr>' +
  			'<td align="left" valign="top" height="100%" width="100%" style="' + frame_style + '">' +
  			'<table cellpadding="0" cellspacing="0" border="0" height="100% width="100%" bgcolor="' + frame_bgcolor + '">' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_topheight + '" border="0"></td>' + 
  			     '<td width="100%" align="left" valign="middle" class="' + frame_titleclass + '">' + 
  			     '<table cellpadding="0" cellspacing="0" border="0" background="' + iconpath + '/wintitlebgr.gif"><tr>' +
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winclose_" + wName + "','" + iconpath + "/winclose_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','C1'" +')" ' +  'onmouseout="' + "SwiImg('winclose_" + wName + "','" + iconpath + "/winclose.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','C0'" + ')"'+ '><img name="winclose_' + wName + '" border="0" src="' + iconpath + '/winclose.gif"></a></td>' +
  			       '<td>&nbsp;</td><td width="100%" align="left" valign="middle"><table class="' + frame_titleclass + '" cellpadding="0" cellspacing="0" border="0" background="' + iconpath + '/wintextbgr.gif"><tr><td>' + xDT.prop(wName,"wTitle") + '</td></tr></table></td>' +
  			       '<td class=""><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winleft_" + wName + "','" + iconpath + "/winleft_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','I1'" +')" ' +  'onmouseout="' + "SwiImg('winleft_" + wName + "','" + iconpath + "/winleft.gif');" + 'xDT.prop(' + "'" + wName + "','wIcon','I0'" + ')"'+ '><img name="winleft_' + wName + '" border="0" src="' + iconpath + '/winleft.gif"></a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="5" border="0"></td>' + 
			       '<td class="' + frame_titleclass + '""><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winmin_" + wName + "','" + iconpath + "/winmin_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','M1'" +')" ' +  'onmouseout="' + "SwiImg('winmin_" + wName + "','" + iconpath + "/winmin.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','M0'" + ')"'+ '><img name="winmin_' + wName + '" border="0" src="' + iconpath + '/winmin.gif"></a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="5" border="0"></td>' + 
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winmax_" + wName + "','" + iconpath + "/winmax_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','X1'" +')" ' +  'onmouseout="' + "SwiImg('winmax_" + wName + "','" + iconpath + "/winmax.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','X0'" + ')"'+ '><img name="winmax_' + wName + '" border="0" src="' + iconpath + '/winmax.gif"></a></td>' +
  			     '</tr></table>' +
  			     '</td>' + 
  			     '<td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_topheight + ' border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td><td align="left" valign="top" width="100%" height="100%" style="background: ' + frame_contentbgcolor +'; " id="' + wName + 'iTD' + '"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td><td width="100%" background="' + iconpath + '/wintitlebgr.gif"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td></tr></table>' +
  			'</td></tr></table>'
         );
}
function desktop_OSX() {
 xDT.addSkin('OSX',25,0);
 xDT.taskbarColor("#ffffff","#000000","#000000");	 	
 xDT.cbe("dDesktop").resizeTo(document.cbe.width(),document.cbe.height());
 xDT.cbe("dDesktop").innerHtml('<table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%">' +
                                '<tr><td height="18" align="left" valign="top" background="' + xDT.resPath() + 'skins/OSX/osx_top_bgr.gif' + '">' + 
                                      '<table cellpadding="0" cellspacing="0" width="100%" border="0"><tr>' + 
		                        '<td align="left" valign="top" width="10"><img src="' + xDT.resPath() + 'skins/OSX/osx_top_left.gif"></td>' + 
		                        '<td align="left" valign="top" width="5"><img src="' + xDT.resPath() + 'skins/OSX/osx_top_apple.gif"></td>' +		                        
		                        '<td class="xDT_f11" align="left" valign="middle" width="100%">&nbsp;</td>' + 
		                        '<td align="right" valign="top" width="20"><img src="' + xDT.resPath() + 'skins/OSX/osx_top_right.gif"></td>' + 		                        
		                        '</tr></table>' +
                                    '</td></tr>' +
                                '<tr><td height="100%"><img src="' + xDT.resPath() + '/skins/OSX/wallpaper_osx.jpg" border="0" height="100%" width="100%"></tr>' +
                               '</table>');	
 xDT.cbe("dDesktop").background('#FFFFFF',xDT.resPath() + 'skins/OSX/wallpaper_osx.jpg');	
 xDT.cbe("dDesktop").zIndex(0);
 xDT.show("dDesktop");
}
