
// Correctly handle PNG transparency in Win IE 5.5 or higher.
// http://homepage.ntlworld.com/bobosola. Updated 31-May-2004

// *************************************************
// This extended version includes imagemap
// and input image functionality.
// It also requires a 1px transparent GIF
// *************************************************

var strGif = "transparentpixel.gif"
var strFilter = "progid:DXImageTransform.Microsoft.AlphaImageLoader"

function correctPNG() 
{
   for(var i=0; i<document.images.length; i++)
   {
	  var img = document.images[i]
	  var imgName = img.src.toUpperCase()
	  if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
	  {
		 var imgID = (img.id) ? "id='" + img.id + "' " : ""
		 var imgClass = (img.className) ? "class='" + img.className + "' " : ""
		 var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
		 var imgStyle = "display:inline-block;" + img.style.cssText 
		 if (img.align == "left") imgStyle = "float:left;" + imgStyle
		 if (img.align == "right") imgStyle = "float:right;" + imgStyle
		 if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
         if (img.useMap)
		 {		  
	      	 strAddMap = "<img style=\"position:relative; left:-" + img.width + "px;"
	         + "height:" + img.height + "px;width:" + img.width +"\" "
			 + "src=\"" + strGif + "\" usemap=\"" + img.useMap 
			 + "\" border=\"" + img.border + "\">"
		 }		
		 var strNewHTML = "<span " + imgID + imgClass + imgTitle
		 + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
	     + "filter:" + strFilter
		 + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
		 if (img.useMap) strNewHTML += strAddMap
		 img.outerHTML = strNewHTML
		 i = i-1
	  }
   }
   for(i=0; i < document.forms.length; i++)
   {
      findImgInputs(document.forms(i))
   }
}

function findImgInputs(oParent)
{
	var oChildren = oParent.children
    if (oChildren)
	{	
		for (var i=0; i < oChildren.length; i++ )
		{
		   var oChild = oChildren(i)
           if ((oChild.type == 'image') && (oChild.src))
		   {
		       var origSrc = oChild.src
		       oChild.src = strGif
		       oChild.style.filter = strFilter + "(src='" + origSrc + "')"
		   }
		   findImgInputs(oChild)	
	    }
	}
}
window.attachEvent("onload", correctPNG);
