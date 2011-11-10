//Browsercheck object
function browser_check() {
    this.ver = navigator.appVersion;
    this.agent = navigator.userAgent.toLowerCase();
    this.dom = document.getElementById ? 1 : 0;
    this.op5 = this.agent.indexOf("opera 5") > -1 && window.opera;
    this.op6 = this.agent.indexOf("opera 6") > -1 && window.opera;
    this.ie5 = (this.agent.indexOf("msie 5") > -1 && !this.op5 && !this.op6);
    this.ie55 = (this.ie5 && this.agent.indexOf("msie 5.5") > -1);
    this.ie6 = (this.agent.indexOf("msie 6") > -1 && !this.op5 && !this.op6);
    this.ie4 = (this.agent.indexOf("msie") > -1 && document.all && !this.op5 && !this.op6 && !this.ie5 && !this.ie6);
    this.ie = (this.ie4 || this.ie5 || this.ie6);
    this.mac = (this.agent.indexOf("mac") > -1);
    this.ns6 = (this.agent.indexOf("gecko") > -1 || window.sidebar);
    this.ns4 = (!this.dom && document.layers) ? 1 : 0;
    this.bw = (this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.op5 || this.op6);
    this.usedom = this.ns6;//Use dom creation
    this.reuse = this.ie || this.usedom; //Reuse layers
    this.px = this.dom && !this.op5 ? "px" : "";
    return this;
}
var bw = new browser_check();
// -------------------------------------------------
// Ajax Support
//load JavaScript into head dynamically
function loadJavaScript(doc, jscript_id, jsfile_url) {
    var head_element = doc.getElementsByTagName("head").item(0);
    var script_element = doc.getElementById(jscript_id);
    if (script_element) {
        head_element.removeChild(script_element);
    }
    script_element = doc.createElement("script");
    script_element.src = file;
    script_element.type = "text/javascript";
    script_element.id = jscript_id;
    head_element.appendChild(script_element);
}
//load css into head dynamically
function loadCSS(doc, css_id, cssfile_url) {
    var head_element = doc.getElementsByTagName("head").item(0);
    var css_element = doc.getElementById(css_id);
    if (script_element) {
        head_element.removeChild(script_element);
    }
	css_element = doc.createElement("link") 
	css_element.href = "mypath/mycss.css"; 
	css_element.rel = "stylesheet"; 
	css_element.type = "text/css"; 
	document.body.appendChild(css_element); 
}
function insertShareToneAjaxSupportApplet(){
	var html_src = '';
	html_src = '<applet id = "shareToneAjaxSupportApplet" code = "ShareToneAjaxSupport.class" archive = "lib/commons-httpclient-3.0.jar,lib/commons-logging-1.0.4.jar,lib/commons-codec-1.3.jar,lib/htmlparser-1.6.jar,lib/ShareToneAjaxSupport-0.2.jar" width = "1" height = "1" alt = "" mayscript = "true" scriptable = "true"></APPLET>';
    document.write(html_src);
    return;
	if (bw.ie) 
	    html_src = ''+    
	            '<object'+
	            '    classid = "clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"'+
	            '    codebase = "http://java.sun.com/update/1.5.0/jinstall-1_5-windows-i586.cab#Version=5,0,0,5"'+
	            '    width = "1" height = "1" alt = "" id = "shareToneAjaxSupportApplet">'+
	            '    <param name = CODE value = "ShareToneAjaxSupport.class" >'+
	            '    <param name = ARCHIVE value = "lib/commons-httpclient-3.0.jar,lib/commons-logging-1.0.4.jar,lib/commons-codec-1.3.jar,lib/htmlparser-1.6.jar,lib/ShareToneAjaxSupport-0.2.jar" >'+
	            '    <param name = "type" value = "application/x-java-applet;version=1.5">'+
	            '    <param name = "mayscript" value = "true">'+
	            '    <param name = "scriptable" value = "true">'+
	            '    <comment></comment>'+
	            '</object>'
	else
	    html_src = ''+    
	                '<embed'+
	                '    type = "application/x-java-applet;version=1.5"'+
	                '    code = "ShareToneAjaxSupport.class"'+
	                '    archive = "lib/commons-httpclient-3.0.jar,lib/commons-logging-1.0.4.jar,lib/commons-codec-1.3.jar,lib/htmlparser-1.6.jar,lib/ShareToneAjaxSupport-0.2.jar"'+
	                '    width = "1" height = "1" alt = "" mayscript = "true"'+
	                '    scriptable = "true"'+
	                '    id = "shareToneAjaxSupportApplet"'+
	                '    pluginspage = "http://java.sun.com/products/plugin/index.html#download">'+
	                '    <noembed></noembed>'+
	                '</embed>'
}

// default synchronously retrieve document from given url
function loadPage(url, pageListener, body, headers, async) {
    var requestObject = false;
    processReqChange = function () {
        // only if requestObject shows "loaded"
        if (requestObject.readyState == 4) {
            // only if "OK"
            switch(requestObject.status){
				// Server timeout
				case 12002:
				// 12029 to 12031 correspond to dropped connections.
				case 12029:
				case 12030:
				case 12031:
				// Connection closed by server.
				case 12152:
				// See above comments for variable status.
				case 13030:
				    alert("There was a problem retrieving the response data:\n" + requestObject.statusText);
				    break;
				default:
					if (pageListener) {
					    var pageObject = {"title":requestObject.getResponseHeader("Title"), "contentType":requestObject.getResponseHeader("Content-Type"), "last-modified":requestObject.getResponseHeader("Last-Modified"), "responseText":requestObject.responseText, "status":requestObject.status};
					    pageListener(pageObject);
					}
			}
        }
    };
    requestObject = _createXMLHttpObject();
    if (requestObject) {
        try {
            requestObject.onreadystatechange = processReqChange;
            //requestObject.open("GET", url, !!async);
            //requestObject.setRequestHeader("Content-Type", "text/xml");
            requestObject.open("POST", url, !!async);
            requestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            requestObject.setRequestHeader("Accept", "*/*");
            if (typeof(headers)!='undefined')
                for(key in headers)
                    requestObject.setRequestHeader(key, headers[key])
            if (typeof(body)=="undefined")
                body = null;
            requestObject.send(body);
        }
        catch (e) {
	        //document.write(e);
            alert(e);
        }
    }
}
//helper function for creating XMLHttpObject
function _createXMLHttpObject() {
    // branch for native XMLHttpRequest object
    if (window.XMLHttpRequest) {
        try{
        	netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        }catch(e){}
        return new XMLHttpRequest();
    // branch for IE/Windows ActiveX version
    } else {
        if (window.ActiveXObject) {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e1) {
                }
            }
        }
    }
    return false;
}
// -------------------------------------------------
//LIFO stack
function stack(name, size) {              // Constructor
    this.qname = name;                    // Properties
    this.qsize = size;                    // Last index = qsize-1
    this.qarray = new Array();
    this.qarray[this.qsize - 1] = 0;      // fixing the array size
    //this.qtop = 0;                      // points to the first free slot
    this.qlength = 0;                     // actual queue length = qtop
    this.maxqlength = 0;                  // maximum queue length
}
function senqueue(x) {
    with (this) {
        if (qlength == qsize) {           // full
            return false;
        } else {
            qarray[qlength++] = x;        // push x
            if (qlength > maxqlength) {
                maxqlength = qlength;
            }
            return true;
        }
    }
}
stack.prototype.push = senqueue;
function sremovefirst() {
    with (this) {
        if (qlength == 0) {                    // empty
            return null;
        } else {
            return qarray[--qlength];          // top item
        }
    }
}
stack.prototype.pop = sremovefirst;
function selementAt(i) {
    with (this) {
        return qarray[i];
    }
}
stack.prototype.elementAt = selementAt;
function slength(i) {
    with (this) {
        return qlength;
    }
}
stack.prototype.length = slength;
// -------------------------------------------------
//JSon
var JSON = function () {
    var m = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        s = {
            'boolean': function (x) {
                return String(x);
            },
            number: function (x) {
                return isFinite(x) ? String(x) : 'null';
            },
            string: function (x) {
                if (/["\\\x00-\x1f]/.test(x)) {
                    x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' +
                            Math.floor(c / 16).toString(16) +
                            (c % 16).toString(16);
                    });
                }
                return '"' + x + '"';
            },
            object: function (x) {
                if (x) {
                    var a = [], b, f, i, l, v;
                    if (x instanceof Array) {
                        a[0] = '[';
                        l = x.length;
                        for (i = 0; i < l; i += 1) {
                            v = x[i];
                            f = s[typeof v];
                            if (f) {
                                v = f(v);
                                if (typeof v == 'string') {
                                    if (b) {
                                        a[a.length] = ',';
                                    }
                                    a[a.length] = v;
                                    b = true;
                                }
                            }
                        }
                        a[a.length] = ']';
                    } else if (x instanceof Object) {
                        a[0] = '{';
                        for (i in x) {
                            v = x[i];
                            f = s[typeof v];
                            if (f) {
                                v = f(v);
                                if (typeof v == 'string') {
                                    if (b) {
                                        a[a.length] = ',';
                                    }
                                    a.push(s.string(i), ':', v);
                                    b = true;
                                }
                            }
                        }
                        a[a.length] = '}';
                    } else {
                        return;
                    }
                    return a.join('');
                }
                return 'null';
            }
        };
    return {
        copyright: '(c)2005 JSON.org',
        license: 'http://www.crockford.com/JSON/license.html',
		/*
		    Stringify a JavaScript value, producing a JSON text.
		*/
        stringify: function (v) {
            var f = s[typeof v];
            if (f) {
                v = f(v);
                if (typeof v == 'string') {
                    return v;
                }
            }
            return null;
        },
		/*
		    Parse a JSON text, producing a JavaScript value.
		    It returns false if there is a syntax error.
		*/
        parse: function (text) {
            try {
                return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
                        text.replace(/"(\\.|[^"\\])*"/g, ''))) &&
                    eval('(' + text + ')');
            } catch (e) {
                return false;
            }
        }
    };
}();
// -------------------------------------------------
//Cookie functions
/*
   name - name of the cookie
   value - value of the cookie
   [expires] - expiration date of the cookie
     (defaults to end of current session)
   [path] - path for which the cookie is valid
     (defaults to path of calling document)
   [domain] - domain for which the cookie is valid
     (defaults to domain of calling document)
   [secure] - Boolean value indicating if the cookie transmission requires
     a secure transmission
   * an argument defaults when it is assigned null as a placeholder
   * a null placeholder is not required for trailing omitted arguments
*/
function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}
/*
  name - name of the desired cookie
  return string containing value of specified cookie or null
  if cookie does not exist
*/
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}
/*
   name - name of the cookie
   [path] - path of the cookie (must be same as path used to create cookie)
   [domain] - domain of the cookie (must be same as domain used to
     create cookie)
   path and domain default if assigned null or omitted if no explicit
     argument proceeds
*/
function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
// date - any instance of the Date object
// * hand all instances of the Date object to this function for "repairs"
function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0)
    date.setTime(date.getTime() - skew);
}
// -------------------------------------------------
// Base64 code from Tyler Akins -- http://rumkin.com
// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode64(input) {
   var output = "";
   var chr1, chr2, chr3;
   var enc1, enc2, enc3, enc4;
   var i = 0;

   do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
         enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
         enc4 = 64;
      }

      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + 
         keyStr.charAt(enc3) + keyStr.charAt(enc4);
   } while (i < input.length);
   
   return output;
}

function decode64(input) {
   var output = "";
   var chr1, chr2, chr3;
   var enc1, enc2, enc3, enc4;
   var i = 0;

   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

   do {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
         output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
         output = output + String.fromCharCode(chr3);
      }
   } while (i < input.length);

   return output;
}
