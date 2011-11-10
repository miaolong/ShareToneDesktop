/* ================================ */
/* SKIN && DESKTOP Windows Standard */
/* ================================ */
function skin_WIN(wName) {
  var frame_bgcolor = "#c0c0c0";
  var frame_titleclass = "xDT_wTitle";
  var frame_borderwidth = 2;
  var frame_topheight = 20;
  var frame_bottomheight = 10;
  var frame_contentbgcolor = '#e6e6e6';
  var frame_dummypic = xDT.resPath() + 'images/blank.gif';
  var iconpath = xDT.resPath() + 'skins/WIN';
  var frame_stylecolor = '#c0c0c0';
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
  			     '<td style="background-color: #000482" width="100%" align="left" valign="middle" class="' + frame_titleclass + '">' + 
  			     '<table cellpadding="0" cellspacing="0" border="0"><tr>' +
  			       '<td class=""><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winleft_" + wName + "','" + iconpath + "/winleft_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','I1'" +')" ' +  'onmouseout="' + "SwiImg('winleft_" + wName + "','" + iconpath + "/winleft.gif');" + 'xDT.prop(' + "'" + wName + "','wIcon','I0'" + ')"'+ '><img src="' + frame_dummypic + '" width="3" height="1" border="0"><img name="winleft_' + wName + '" border="0" src="' + iconpath + '/winleft.gif"></a></td>' +
  			       '<td width="100%" align="left" valign="middle" class="' + frame_titleclass + '">&nbsp;' + xDT.prop(wName,"wTitle") + '</td>' +
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winmin_" + wName + "','" + iconpath + "/winmin_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','M1'" +')" ' +  'onmouseout="' + "SwiImg('winmin_" + wName + "','" + iconpath + "/winmin.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','M0'" + ')"'+ '><img name="winmin_' + wName + '" border="0" src="' + iconpath + '/winmin.gif"></a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="2" border="0"></td>' + 
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winmax_" + wName + "','" + iconpath + "/winmax_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','X1'" +')" ' +  'onmouseout="' + "SwiImg('winmax_" + wName + "','" + iconpath + "/winmax.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','X0'" + ')"'+ '><img name="winmax_' + wName + '" border="0" src="' + iconpath + '/winmax.gif"></a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="2" border="0"></td>' + 
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winclose_" + wName + "','" + iconpath + "/winclose_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','C1'" +')" ' +  'onmouseout="' + "SwiImg('winclose_" + wName + "','" + iconpath + "/winclose.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','C0'" + ')"'+ '><img name="winclose_' + wName + '" border="0" src="' + iconpath + '/winclose.gif"></a></td>' +
  			     '</tr></table>' +
  			     '</td>' + 
  			     '<td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_topheight + ' border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td><td align="left" valign="top" width="100%" height="100%" style="background: ' + frame_contentbgcolor +'; " id="' + wName + 'iTD' + '"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td><td width="100%" background="' + iconpath + '/winbottombgr.gif" align="right"><img src="' + iconpath + '/winthreestripes.gif" border="0"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td></tr></table>' +
  			'</td></tr></table>'
         );
}
function desktop_WIN() {
 xDT.addSkin('WIN',0,0);
 xDT.taskbarColor("#c0c0c0","#000000","#000000");
 xDT.cbe("dDesktop").resizeTo(document.cbe.width(),document.cbe.height());
 xDT.cbe("dDesktop").innerHtml('<table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%">' +
                               '<tr><td height="100%"></td></tr>' +
                               '</table>');	
 xDT.cbe("dDesktop").background('#396DA5','');	
 xDT.cbe("dDesktop").zIndex(0);
 xDT.show("dDesktop");
}
