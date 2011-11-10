from cStringIO import StringIO

# CHANGE 'ShareToneDesktop' to your product name in the following lines
from Products.ShareToneDesktop.Extensions.utils import *
from Products.ShareToneDesktop.config import *

def install(self):
    out = StringIO()

    setupSkin(self, out, SKINNAME, BASESKIN, SELECTSKIN, ALLOWSELECTION,
                            PERSISTENTCOOKIE, REQUESTVARNAME, GLOBALS)
    registerStylesheets(self, out, STYLESHEETS)
    registerScripts(self, out, JAVASCRIPTS)

    print >> out, "Installation completed."
    return out.getvalue()


def uninstall(self):
    out = StringIO()

    removeSkin(self, out, SKINNAME, BASESKIN, REQUESTVARNAME)
