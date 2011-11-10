/* ================================ */
/* SKIN && None, no images */
/* ================================ */
function skin_NONE(wName) {
  var frame_bgcolor = "#5A8EC6";
  var frame_titleclass = "xDT_wTitle";
  var frame_borderwidth = 2;
  var frame_topheight = 18;
  var frame_bottomheight = 10;
  var frame_contentbgcolor = '#EFEFE7';
  var frame_dummypic = xDT.resPath() + 'images/blank.gif';
  var iconpath = xDT.resPath() + 'skins/NONE';
  var frame_stylecolor = '#EFEFE7';
  var frame_border = 2;
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
  			     '<table cellpadding="0" cellspacing="0" border="0" bgcolor="#5A8EC6"><tr>' +
  			       '<td><img src="' + frame_dummypic + '" width="1" border="0"></td>' + 
  			       '<td class="' + frame_titleclass + '"><a class="xDt_a_menu" width="25" href="javascript: void(0)" onmouseover="' + 'xDT.prop(' + "'" + wName + "','wIcon','I1'" +')" ' +  'onmouseout="' + 'xDT.prop(' + "'" + wName + "','wIcon','I0'" + ')"'+ '><b>i</b></a></td>' +
  			       '<td width="100%" align="left" valign="middle" class="' + frame_titleclass + '">&nbsp;' + xDT.prop(wName,"wTitle") + '</td>' +
  			       '<td class="' + frame_titleclass + '"><a class="xDt_a_menu" width="25" href="javascript: void(0)" onmouseover="' + 'xDT.prop(' + "'" + wName + "','wIcon','M1'" +')" ' +  'onmouseout="' + 'xDT.prop(' + "'" + wName + "','wIcon','M0'" + ')"'+ '>_</a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="2" border="0"></td>' + 
  			       '<td class="' + frame_titleclass + '"><a class="xDt_a_menu" width="25" href="javascript: void(0)" onmouseover="' + 'xDT.prop(' + "'" + wName + "','wIcon','X1'" +')" ' +  'onmouseout="' + 'xDT.prop(' + "'" + wName + "','wIcon','X0'" + ')"'+ '>=</a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="2" border="0"></td>' + 
  			       '<td class="' + frame_titleclass + '"><a class="xDt_a_menu" width="25" href="javascript: void(0)" onmouseover="' + 'xDT.prop(' + "'" + wName + "','wIcon','C1'" +')" ' +  'onmouseout="' + 'xDT.prop(' + "'" + wName + "','wIcon','C0'" + ')"'+ '>X</a></td>' +
  			     '</tr></table>' +
  			     '</td>' + 
  			     '<td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_topheight + ' border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td><td align="left" valign="top" width="100%" height="100%" style="background: ' + frame_contentbgcolor +'; " id="' + wName + 'iTD' + '"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td><td width="100%"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td></tr></table>' +
  			'</td></tr></table>'
         );
}
function desktop_NONE() {
 xDT.addSkin('NONE',0,0);
 xDT.taskbarColor("#5A8EC6","#FFFFFF",'#FFFFFF');
 xDT.cbe("dDesktop").resizeTo(document.cbe.width(),document.cbe.height());
 xDT.cbe("dDesktop").innerHtml('');
/*
 xDT.cbe("dDesktop").innerHtml('<table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%">' +
                               '<tr><td height="100%"></td></tr>' +
                               '</table>');	
*/                               
 xDT.cbe("dDesktop").background('#FEE1B8','');	
 xDT.cbe("dDesktop").zIndex(0);
 xDT.show("dDesktop");
}
