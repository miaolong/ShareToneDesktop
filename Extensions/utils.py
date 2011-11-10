from Globals import package_home
from Products.CMFCore.DirectoryView import addDirectoryViews
from Products.CMFCore.utils import getToolByName
import os, string


def getSkinsFolderNames(globals, skins_dir='skins'):
    # Get the content of the skins folder
    skins_path = os.path.join(package_home(globals), skins_dir)
    return [ filename for filename in os.listdir(skins_path)
        if (not filename.startswith('.') or filename in ('CVS', '{arch}'))
        and os.path.isdir(os.path.join(skins_path, filename)) ]

def setupSkin(self, out, skin_name, base_skin, select_skin, allow_any,
                                    cookie_persistence, request_varname,
                                    globals, skins_dir='skins'):
    skins_tool = getToolByName(self, 'portal_skins')

    # Add directory views
    addDirectoryViews (skins_tool, 'skins', globals)
    print >> out, "Added directory views: 'skins' to portal_skins."
 
    root = skins_tool.aq_parent
    if not hasattr(root, 'lib'):
        root.manage_addProduct['OFSP'].manage_addFolder(id='lib')
    lib = root['lib']        
    addDirectoryViews (lib, 'lib', globals)
    print >> out, "Added directory views: 'lib' to site root"
    
    #if not hasattr(root, 'ShareToneDesktop_Data'):
    #    root.manage_addFolder('ShareToneDesktop_Data')
    #    print >> out, "create new folder: /ShareToneDesktop_Data" 
    #else:
    #    print >> out, "/ShareToneDesktop_Data exists... use the existing folder" 

    #ShareToneDesktop_Data = root['ShareToneDesktop_Data']
    
    if not hasattr(lib, 'scripts'):
        lib.manage_addProduct['OFSP'].manage_addFolder(id='scripts')
        print >> out, "/lib/scripts folder is created"
    scripts = lib['scripts']        
    
    try:
        if not hasattr(scripts, 'load_profile'):
            scripts.manage_addProduct['PythonScripts'].manage_addPythonScript('load_profile')
        scripts['load_profile'].write(lib['profiles']['load_profile'].read())
        scripts['load_profile'].manage_proxy(roles=['Manager'])
        print >> out, "/lib/scripts/load_profile is created" 
    except:
        print >> out, "can't create /lib/scripts/load_profile" 
    try:
        if not hasattr(scripts, 'store_profile'):
            scripts.manage_addProduct['PythonScripts'].manage_addPythonScript('store_profile')
        scripts['store_profile'].write(lib['profiles']['store_profile'].read())
        scripts['store_profile'].manage_proxy(roles=['Manager'])
        print >> out, "/lib/scripts/store_profile is created" 
    except:
        print >> out, "can't create /lib/scripts/store_profile" 
    try:
        if not hasattr(scripts, 'get_default_profile'):
            scripts.manage_addProduct['PythonScripts'].manage_addPythonScript('get_default_profile')
        scripts['get_default_profile'].write(lib['profiles']['get_default_profile'].read())
        scripts['get_default_profile'].manage_proxy(roles=['Manager'])
        print >> out, "/lib/scripts/get_default_profile is created" 
    except:
        print >> out, "can't create /lib/scripts/get_default_profile" 
    
    root.manage_changeProperties(default_page='ShareToneDesktop')
    print >> out, "Property of site root: 'default_page' has been changed to 'ShareToneDesktop'"

    # Only add the skin selection if it doesn't already exist
    if skin_name not in skins_tool.getSkinSelections():

        # Get the skin layers of the base skin and convert to an array
        layers = skins_tool.getSkinPath(base_skin)
        layers = map(string.strip, string.split(layers, ','))

        # Add the skin folders to the layers, under 'custom'
        for filename in getSkinsFolderNames(globals):
            if filename not in layers:
                try:
                    layers.insert(layers.index('custom')+1, filename)
                except ValueError:
                    layers.insert(0, filename)

        # Add our skin selection
        layers = ', '.join(layers)
        skins_tool.addSkinSelection(skin_name, layers)
        print >> out, "Added skin selection to portal_skins."

        # Activate the skin selection
        if select_skin:
            skins_tool.default_skin = skin_name

        # Setup other tool properties
        skins_tool.allow_any = allow_any
        skins_tool.cookie_persistence = cookie_persistence
        if request_varname:
            skins_tool.request_varname = request_varname

    else:
        print >> out, "Skin selection already exists, leaving it alone."

def registerStylesheets(self, out, stylesheets):
    # register additional CSS stylesheets with portal_css
    csstool = getToolByName(self, 'portal_css')
    for css in stylesheets:
        csstool.registerStylesheet(**css)
    print >> out, "installed the Plone additional stylesheets."

def registerScripts(self, out, scripts):
    # register additional JS Scripts with portal_javascripts
    jstool = getToolByName(self, 'portal_javascripts')
    for js in scripts:
        jstool.registerScript(**js)
    print >> out, "installed the Plone additional javascripts."

def removeSkin(self, out, skin_name, base_skin, request_varname):
    # Delete the portal_skins property which holds the skin selection
    skins_tool = getToolByName(self, 'portal_skins')
    if skin_name in skins_tool.getSkinSelections():
        # Remove skin selection from portal_skins
        skins_tool.manage_skinLayers(del_skin=1, chosen=(skin_name,))
        # Restore the base skin as default one
        skins_tool.default_skin = base_skin
        # Restore Plone defaults for other settings
        skins_tool.allow_any = 0
        skins_tool.cookie_persistence = 0
        if skins_tool.request_varname == request_varname:
            skins_tool.request_varname = 'plone_skin'
        print >> out, "Removed skin selection from portal skins."

__all__ = (
    "setupSkin",
    "registerStylesheets",
    "registerScripts",
    "removeSkin",
        )
