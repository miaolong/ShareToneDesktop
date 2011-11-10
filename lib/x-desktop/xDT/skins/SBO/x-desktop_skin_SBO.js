/* ================================ */
/* SKIN && DESKTOP SAP Business One */
/* ================================ */
function skin_SBO(wName) {
  var frame_bgcolor = "#DEDECE";
  var frame_titleclass = "xDT_wTitle";
  var frame_borderwidth = 1;
  var frame_topheight = 21;
  var frame_bottomheight = 10;
  var frame_contentbgcolor = '#DEDECE';
  var frame_dummypic = xDT.resPath() + 'images/blank.gif';
  var iconpath = xDT.resPath() + 'skins/SBO';
  var frame_stylecolor = '#9CBDCE';
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
  			     '<table height="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FF0000" background="' + iconpath + '/wintitlebgr.gif"><tr>' +
  			       '<td><img src="' + frame_dummypic + '" width="5" border="0"></td>' + 
  			       '<td class=""><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winleft_" + wName + "','" + iconpath + "/winleft_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','I1'" +')" ' +  'onmouseout="' + "SwiImg('winleft_" + wName + "','" + iconpath + "/winleft.gif');" + 'xDT.prop(' + "'" + wName + "','wIcon','I0'" + ')"'+ '><img name="winleft_' + wName + '" border="0" src="' + iconpath + '/winleft.gif"></a></td>' +
  			       '<td width="100%" align="left" valign="middle" class="' + frame_titleclass + '">&nbsp;' + xDT.prop(wName,"wTitle") + '</td>' +
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winmin_" + wName + "','" + iconpath + "/winmin_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','M1'" +')" ' +  'onmouseout="' + "SwiImg('winmin_" + wName + "','" + iconpath + "/winmin.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','M0'" + ')"'+ '><img name="winmin_' + wName + '" border="0" src="' + iconpath + '/winmin.gif"></a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="5" border="0"></td>' +   			       
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winmax_" + wName + "','" + iconpath + "/winmax_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','X1'" +')" ' +  'onmouseout="' + "SwiImg('winmax_" + wName + "','" + iconpath + "/winmax.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','X0'" + ')"'+ '><img name="winmax_' + wName + '" border="0" src="' + iconpath + '/winmax.gif"></a></td>' +
  			       '<td><img src="' + frame_dummypic + '" width="5" border="0"></td>' +   			       
  			       '<td class="' + frame_titleclass + '"><a class="" href="javascript: void(0)" onmouseover="' + "SwiImg('winclose_" + wName + "','" + iconpath + "/winclose_over.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','C1'" +')" ' +  'onmouseout="' + "SwiImg('winclose_" + wName + "','" + iconpath + "/winclose.gif'); " + 'xDT.prop(' + "'" + wName + "','wIcon','C0'" + ')"'+ '><img name="winclose_' + wName + '" border="0" src="' + iconpath + '/winclose.gif"></a></td>' +
  			       '<td><img src="' + iconpath +'/winrightbgr.gif" border="0"></td>' +
  			     '</tr></table>' +
  			     '</td>' + 
  			     '<td style="background-color: ' + frame_stylecolor + '"><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_topheight + ' border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td><td align="left" valign="top" width="100%" height="100%" style="background: ' + frame_contentbgcolor +'; " id="' + wName + 'iTD' + '"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" border="0"></td></tr>' +
  			'<tr><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td><td width="100%"></td><td><img src="' + frame_dummypic + '" width="' + frame_borderwidth + '" height="' + frame_bottomheight + '" border="0"></td></tr></table>' +
  			'</td></tr></table>'
         );

}
function desktop_SBO() {
 var iconpath = xDT.resPath() + 'skins/SBO';
 xDT.addSkin('SBO',70,40);	
 xDT.taskbarColor("#DEDECE","#000000","#000000");	 
 xDT.cbe("dDesktop").resizeTo(document.cbe.width(),document.cbe.height());
 xDT.cbe("dDesktop").innerHtml('<table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%">' +
                                '<tr><td height="67" align="left" valign="top" >' + 
		   				'<TABLE CELLPADDING="0" CELLSPACING="0" WIDTH="100%" BACKGROUND="' + iconpath + '/bgr_top.gif"><TR VALIGN="TOP"><TD VALIGN="TOP" ALIGN="LEFT">' + 
						"<TABLE CELLPADDING=\"5\" CELLSPACING=\"0\"><TR><TD><A HREF=\"javascript: void(0)\" onclick=\"xDT.arrangeAllWindows()\" onmouseover=\"SwiImg('winleft_SBO','" + iconpath + "/ic_left_mo.gif')\" onmouseout=\"SwiImg('winleft_SBO','" + iconpath + "/ic_left.gif')\"><IMG SRC=\"" + iconpath + "/ic_left.gif\" WIDTH=\"16\" HEIGHT=\"11\" BORDER=\"0\" name=\"winleft_SBO\"></A></TD></TR></TABLE></TD>" + 
						'<TD VALIGN="TOP" ALIGN="RIGHT" WIDTH="1%"><TABLE CELLPADDING="5" CELLSPACING="0" BORDER="0"><TR>' + 
						"<TD><A HREF=\"javascript: void(0)\" onclick=\"xDT.minimizeAllWindows()\" onmouseover=\"SwiImg('winmin_SBO','" + iconpath + "/ic_min_mo.gif')\" onmouseout=\"SwiImg('winmin_SBO','" + iconpath + "/ic_min.gif')\"><IMG SRC=\"" + iconpath + "/ic_min.gif\" WIDTH=\"12\" HEIGHT=\"12\" BORDER=\"0\" NAME=\"winmin_SBO\"></A></TD>" + 
						"<TD><A HREF=\"javascript: void(0)\" onclick=\"xDT.restoreAllWindows()\" onmouseover=\"SwiImg('winmax_SBO','" + iconpath + "/ic_max_mo.gif')\" onmouseout=\"SwiImg('winmax_SBO','" + iconpath + "/ic_max.gif')\"><IMG SRC=\"" + iconpath + "/ic_max.gif\" WIDTH=\"12\" HEIGHT=\"12\" BORDER=\"0\" NAME=\"winmax_SBO\"></A></TD>" + 
						"<TD><A HREF=\"javascript: void(0)\" onclick=\"top.close()\" onmouseover=\"SwiImg('winclose_SBO','" + iconpath + "/ic_close_mo.gif')\" onmouseout=\"SwiImg('winclose_SBO','" + iconpath + "/ic_close.gif')\"><IMG SRC=\"" + iconpath + "/ic_close.gif\" WIDTH=\"12\" HEIGHT=\"12\" BORDER=\"0\" NAME=\"winclose_SBO\"></A></TD>" +
						'</TR></TABLE></TD><TD ROWSPAN="2" VALIGN="TOP" ALIGN="RIGHT" WIDTH="1%"><IMG SRC="' + iconpath + '/logo_sap.gif" BORDER="0" WIDTH="126" HEIGHT="67"></TD></TR>' + 
						'<TR><TD>&nbsp;</TD><TD VALIGN="TOP" ALIGN="RIGHT" WIDTH="1%"></TD></TR></TABLE>' +  
				     '</td></tr>' +
                                '<tr><td height="100%" VALIGN="TOP" ALIGN="LEFT"></td></tr>' +
                                '<tr><td height="40" VALIGN="TOP" ALIGN="LEFT">' + 
                                  '<FORM class="posabs" name="bLeft"><TABLE BGCOLOR="#DEDECE" CELLPADDING="2" CELLSPACING="0" WIDTH="100%">' +
						'<TR><TD><INPUT TYPE="TEXT" NAME="Text1" CLASS="xDT_sbo_bottom" STYLE="width: 100%"></td><td style="width: 100px" class="xDT_f10" align="center">12:10:24</td><TD><INPUT TYPE="TEXT" NAME="Text3" CLASS="xDT_sbo_bottom" STYLE="width: 100%"></TD></TR>' +
						'<TR><TD><INPUT TYPE="TEXT" NAME="Text2" CLASS="xDT_sbo_bottom" STYLE="width: 100%"></TD><td style="width: 100px" class="xDT_f10" align="center">&nbsp;</td><TD><INPUT TYPE="TEXT" NAME="Text4" CLASS="xDT_sbo_bottom" STYLE="width: 100%"></TD></TR>' +
						'</TABLE></FORM>' +
                                '</td></tr>' +
                               '</table>');	
 xDT.cbe("dDesktop").background('#9CBDCE','');	
 xDT.cbe("dDesktop").zIndex(0);
 xDT.show("dDesktop");
}