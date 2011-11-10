
/* ==========================================================================
 * Transio Create Div
 * Creates a div (using DOM) with the parameters specified
 * ==========================================================================
 */
function createDiv(id, abs, left, top, width, height, bgColor) {
    var div = document.createElement("div");
    div.setAttribute("id", id);
    div.style.position = (abs) ? "absolute" : "relative";
    div.style.left = left;
    div.style.top = top;
    div.style.width = width;
    div.style.height = height;
    div.style.overflow = "hidden";
    div.style.backgroundColor = bgColor;
    return div;
}
/*  ============================================================================
 *  Transio Number Class
 *  Nifty little class that allows easy translation of numbers from hex to 
 *  decimal and from decimal to hex. Includes the following:
 *  
 *  * hexCodes Array
 *  * indexOf Method
 *  * getDecimalValue Method
 *  * getHexValue Method
 *  ============================================================================
 */
function Number() {
    this.codes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    this.hexValue = null;
    this.decimalValue = null;
    this.setHexValue = function (hexValue) {
        this.hexValue = hexValue;
    };
    this.getHexValue = function (decimalValue) {
        var hexValue = "";
        decimalValue = Math.floor(decimalValue);
        while (decimalValue > 0) {
            hexValue = hexCodes[decimalValue % 16] + hexValue;
            decimalValue = Math.floor(decimalValue / 16);
        }
        return hexValue;
    };
    this.setDecimalValue = function (decimalValue) {
        this.decimalValue = decimalValue;
    };
    this.getDecimalValue = function (hexValue) {
        var decimalValue = 0;
        for (var i = 0; i < hexValue.length; i++) {
            decimalValue = decimalValue * 16;
            decimalValue += indexOf(hexCodes, hexValue.substr(i, 1));
        }
        return decimalValue;
    };
    this.pad = function (num, size) {
        num = "" + num;
        while (num.length < size) {
            num = "0" + num;
        }
        return num;
    };
    function indexOf(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        }
    }
}
var hexCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
/* ==========================================================================
 * Index Of - Returns the index of an array item
 * ==========================================================================
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
}
/* ==========================================================================
 * Get Decimal Value -  Returns the decimal value for a given hex code value
 * ==========================================================================
 */
function getDecimalValue(hexValue) {
    var decimalValue = 0;
    for (var i = 0; i < hexValue.length; i++) {
        decimalValue = decimalValue * 16;
        decimalValue += indexOf(hexCodes, hexValue.substr(i, 1));
    }
    return decimalValue;
}
/* ==========================================================================
 * Get Hex Value - Returns the hex code value for a given decimal value
 * ==========================================================================
 */
function getHexValue(decimalValue) {
    var hexValue = "";
    decimalValue = Math.floor(decimalValue);
    while (decimalValue > 0) {
        hexValue = hexCodes[decimalValue % 16] + hexValue;
        decimalValue = Math.floor(decimalValue / 16);
    }
    return hexValue;
}
/* ==========================================================================
 * Pad Hex - Pads the given hexValue to the specified size
 * ==========================================================================
 */
function pad(num, size) {
    num = "" + num;
    while (num.length < size) {
        num = "0" + num;
    }
    return num;
}
/* ==========================================================================
 * Transio Color Scaler
 * Inputs two color hex codes (i.e. '#FFFFFF' and '#000000') and a percentage
 * (0.0 - 1.0) and returns a hex code value at the percentage value between
 * the two colors specified.
 * ==========================================================================
 */
function colorScale(color1, color2, scale) {
    if (color1.length != 7 || color2.length != 7 || scale > 1 || scale < 0) {
        return "#000000";
    }
    var color = "#";
    for (var i = 0; i < 3; i++) {
        clr1 = color1.substr(i * 2 + 1, 2);
        clr2 = color2.substr(i * 2 + 1, 2);
        decimalValue = (1 - scale) * getDecimalValue(clr1) + scale * getDecimalValue(clr2);
        hexValue = getHexValue(decimalValue);
        color += pad(hexValue, 2);
    }
    return color;
}
/* ==========================================================================
 * Transio Gradient Circle
 * Fills a circle with a gradient
 * ==========================================================================
 */
function gradientCircle(new_id, abs, cx, cy, r, colorArray) {
   //Create other variables to be used
    var x, y, w, h = r * 2;
    var color, scale;
    var gradient = createDiv(new_id, abs, cx - r + "px", cy - r + "px", r * 2 + "px", r * 2 + "px", "");
   
   //Loop through all of the height increments
    for (y = -r + 1; y <= r; y++) {
        w = 2 * (Math.sqrt(Math.pow(r, 2) - Math.pow(y, 2)));
        w = isNaN(w) ? 0 : w;
        x = r - w / 2;
        for (var i = 0; i < colorArray.length - 1; i++) {
            if ((y + r) / h > colorArray[i][1] && (y + r) / h <= colorArray[i + 1][1]) {
      //The value of "scale" tells us where in the color array we are located
                scale = ((y + r) / h - colorArray[i][1]) / (colorArray[i + 1][1] - colorArray[i][1]);
                color = colorScale(colorArray[i][0], colorArray[i + 1][0], scale);
            }
        }
        div = createDiv(null, 1, Math.floor(x) + "px", y + r + "px", Math.floor(w) + "px", "1px", color);
        gradient.appendChild(div);
    }
    return gradient;
}
/*
  DEPRECATED line circle function
  function drawCircle(parent, cx, cy, r, color) {
   var x = r;
   var y = 0;
   var dx = 1 - (r << 1);
   var dy = 1;
   var err = 0;
   while (x >= y) {
    //Plot a pixel in each octet
    parent.appendChild(createDiv(null, 1, cx+x, cy+y, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx+x, cy-y, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx-x, cy+y, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx-x, cy-y, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx+y, cy+x, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx+y, cy-x, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx-y, cy+x, 1, 1, color));
    parent.appendChild(createDiv(null, 1, cx-y, cy-x, 1, 1, color));
    y += 1;
    err += dy;
    dy += 2;
    if ((err << 1) + dx > 0) {
     x -= 1;
     err += dx;
     dx += 2;
    }
   }
  }
  */
  
//TO BE DEPRECATED
function drawLine(parent, cx, cy, r, a, s, new_id) {
    var i = 0;
    var pix = null;
    var x = 0;
    var y = 0;
    var dx = Math.sin(this.rad(a));
    var dy = Math.cos(this.rad(a + 180));
    var line = Array();
    while (Math.abs(x) < Math.abs(dx * r) || Math.abs(y) < Math.abs(dy * r)) {
        pix = createDiv(new_id, 1, Math.round(cx + x - s / 2), Math.round(cy + y - s / 2), s, s, "");
        line[i] = pix;
        parent.appendChild(pix);
        x += dx;
        y += dy;
        i += 1;
    }
    return line;
}
  
//TO BE DEPRECATED
function eraseLine(parent, line) {
    for (var id in line) {
        parent.removeChild(line[id]);
        line[id] = null;
    }
    line = null;
}
function line(cx, cy, r, a, s, color) {
    var pix = null;
    var x = 0;
    var y = 0;
    var dx = Math.sin(rad(a));
    var dy = Math.cos(rad(a + 180));
    var line = createDiv(null, 1, cx - r, cy - r, "", "", "");
    while (Math.abs(x) < Math.abs(dx * r) || Math.abs(y) < Math.abs(dy * r)) {
        pix = createDiv(null, 1, Math.round(cx + x - s / 2), Math.round(cy + y - s / 2), s, s, color);
        pix.style.zIndex = 2;
        line.appendChild(pix);
        x += dx;
        y += dy;
    }
    return line;
}
function erase(parent, el) {
    parent.removeChild(el);
    el = null;
}
function rad(deg) {
    return deg * Math.PI / 180;
}
/* ==========================================================================
 * Transio Clock Class
 * Creates a dynamic, functional clock that displays current time and date
 * Using JavaScript and DOM
 * ==========================================================================
 */
function Clock(parentId, radius, color) {
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.parent.style.width = 2 * radius;
    this.radius = radius;
    this.cx = radius;
    this.cy = radius;
    this.color = color;
    this.time = new Date();
    this.hour = null;
    this.minute = null;
    this.second = null;
    this.hourHand = null;
    this.minuteHand = null;
    this.secondHand = null;
    this.outerCircle = null;
    this.innerCircle = null;
    this.text = null;
    this.draw = function () {
       //Draw the circles
        if (!this.outerCircle) {
            this.outerCircle = gradientCircle("outer", 0, this.cx, this.cy, this.radius, [["#0000FF", 0], ["#00FF00", 0.33], ["#FF0000", 0.67], ["#0000FF", 1]]);
        }
       //this.outerCircle = gradientCircle('outer',0,this.cx, this.cy, this.radius,[['#BBCCDD',0.0],['#CCDDEE',0.1],['#3366AA',0.5],['#000044',0.6],['#0000CC',1.5]]);
        this.outerCircle.innerHTML += "<table width=100% height=100%><tr><td align=center></td></tr></table>";
        this.parent.appendChild(this.outerCircle);
        if (!this.innerCircle) {
            this.innerCircle = gradientCircle("inner", 1, this.cx, this.cy, this.radius / 20, [["#DDEEFF", 0], ["#8899AA", 0.4], ["#000033", 0.45], ["#224499", 1]]);
        }
        this.outerCircle.getElementsByTagName("TABLE").item(0).childNodes[0].childNodes[0].childNodes[0].appendChild(this.innerCircle);
        this.innerCircle.style.zIndex = 10;
    
      //Draw the hour and minute markers
        var x, y, txt;
        for (var i = 1; i <= 60; i++) {
            x = Math.sin(rad(i * 6)) * this.radius * 0.93;
            y = Math.cos(rad(i * 6 + 180)) * this.radius * 0.93;
            if (i % 5 == 0) {
                txt = createDiv("brojevi", 1, this.cx + x - Math.round(this.radius / 16), this.cy + y - Math.round(this.radius / 16), Math.round(this.radius / 8), Math.round(this.radius / 8), "");
                txt.style.fontFamily = "sans-serif";
                txt.style.fontSize = Math.round(this.radius / 10) + "px";
                txt.style.textAlign = "center";
                txt.innerHTML = "" + Math.round(i / 5);
            } else {
                txt = createDiv("tocke", 1, this.cx + x, this.cy + y, Math.round(this.radius / 100), Math.round(this.radius / 100), "");
            }
            this.outerCircle.appendChild(txt);
        }
    
      //Draw the digital clock
        if (!this.text) {
            this.text = createDiv("digital", 1, "0", (this.radius >= 80) ? (this.cy + this.radius / 3) : (this.cy + this.radius + 5), "100%", "", "");
// this.text.style.paddingLeft=this.cx-70;
// this.text.style.paddingRight=this.cx-70;
 
//       this.text.style.color = '#00FF00';
//       this.text.appendChild(document.createTextNode(""))
//       this.text.style.fontFamily = 'courier';
//       this.text.style.fontSize = '20px';
//       this.text.style.zIndex = 1;
//       this.outerCircle.appendChild(this.text);
            this.text.innerHTML += "<table style=\"background-color:red\"><tr><td align=center>&nbsp;</td></tr></table>";
            this.outerCircle.appendChild(this.text);
//this.text.getElementsByTagName("TABLE").item(0).childNodes[0].childNodes[0].childNodes[0].appendChild(this.text)
        }
    };
    this.increment = function () {
        this.time = new Date();
     //render the analog clock
        if (this.hours != this.time.getHours()) {
            if (this.hourHand) {
                eraseLine(this.outerCircle, this.hourHand);
            }
            this.hours = this.time.getHours();
            this.hourHand = drawLine(this.outerCircle, this.cx, this.cy, Math.ceil(this.radius * 0.6), (this.hours % 12) * 30 + Math.round(this.time.getMinutes() / 2), Math.ceil(this.radius / 70), "hour");
      //this.hourHand = line(this.cx, this.cy, Math.ceil(this.radius * 0.6), (this.hours % 12)*30 + Math.round(this.time.getMinutes()/2), Math.ceil(this.radius/70), this.color);
      //this.parent.appendChild(this.hourHand);
      //this.hourHand.style.zIndex = 1;
        }
        if (this.minutes != this.time.getMinutes()) {
            if (this.minuteHand) {
                eraseLine(this.outerCircle, this.minuteHand);
            }
            this.minutes = this.time.getMinutes();
            this.minuteHand = drawLine(this.outerCircle, this.cx, this.cy, Math.ceil(this.radius * 0.75), this.minutes * 6, Math.ceil(this.radius / 100), "minut");
      //this.minuteHand = line(this.cx, this.cy, Math.ceil(this.radius * 0.75), this.minutes * 6, Math.ceil(this.radius/100), this.color);
      //this.parent.appendChild(this.minuteHand);
      //this.minuteHand.style.zIndex = 2;
        }
        if (this.seconds != this.time.getSeconds()) {
            if (this.secondHand) {
                eraseLine(this.outerCircle, this.secondHand);
            }
            this.seconds = this.time.getSeconds();
            this.secondHand = drawLine(this.outerCircle, this.cx, this.cy, Math.ceil(this.radius * 0.75), this.seconds * 6, Math.ceil(this.radius / 200), "second");
      //this.secondHand = line(this.cx, this.cy, Math.ceil(this.radius * 0.75), this.seconds * 6, Math.ceil(this.radius/200), this.color);
      //this.parent.appendChild(this.secondHand);
      //this.secondHand.style.zIndex = 3;
        }
    
    //render the digital clock below
        if (this.text) {
            this.text.getElementsByTagName("TABLE").item(0).childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeValue = pad(this.hours, 2) + ":" + pad(this.minutes, 2) + ":" + pad(this.seconds, 2) + "." + pad(this.time.getMilliseconds(), 3);
        }
    //this.text.childNodes[0].nodeValue = pad(this.hours, 2) + ':' + pad(this.minutes, 2) + ':' + pad(this.seconds, 2)
    //+ '.' + pad(this.time.getMilliseconds(), 3);
    };
}
  //Load Clock... loads the clock element and begins the timer.
var clock = null;
function loadClock(parentId) {
    clock = new Clock(parentId, 100, "#000000");
    clock.draw();
    window.setInterval("if (clock) clock.increment();", 10);
}
function toggleBg() {
    if (clock.outerCircle.style.visibility == "hidden") {
        clock.outerCircle.style.visibility = "visible";
        clock.text.style.visibility = "visible";
    } else {
        clock.outerCircle.style.visibility = "hidden";
        clock.text.style.visibility = "hidden";
    }
}

