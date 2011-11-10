GLOBALS = globals()

# CHANGE this to the name of the new skin
#  This will be what the user sees when choosing skins, and will be the name
#  of a property in portal_skins.
SKINNAME = 'ShareTone Desktop'

# CHANGE this to the name of the skin on which the new skin is based
#  The new skin will be a copy of the base skin and will have the folders
#  from the 'skins' folder listed underneath 'custom' in its skin layers.
BASESKIN = 'Plone Default'

# CHANGE this tuple of python dictionnaries to list the stylesheets that
#  will be registered with the portal_css tool.
#  'id' (required):
#    it must respect the name of the css or DTML file (case sensitive).
#    '.dtml' suffixes must be ignored.
#  'expression' (optional - default: ''): a tal condition.
#  'media' (optional - default: ''): possible values: 'screen', 'print',
#    'projection', 'handheld'...
#  'rel' (optional - default: 'stylesheet')
#  'title' (optional - default: '')
#  'rendering' (optional - default: 'import'): 'import', 'link' or 'inline'.
#  'enabled' (optional - default: 1): boolean
#  'cookable' (optional - default: True): boolean (aka merging allowed)
#  See registerStylesheet() arguments in
#  ResourceRegistries/tools/CSSRegistry.py
#  for the latest list of all available keys and default values.
STYLESHEETS = (
    {'id': 'ShareToneDesktop.css', 'media': 'screen', 'rendering': 'import'},
        )

# CHANGE this tuple of python dictionnaries to list the javascripts that
#  will be registered with the portal_javascripts tool.
#  'id' (required): same rules as for stylesheets.
#  'expression' (optional - default: ''): a tal condition.
#  'inline' (optional - default: False): boolean
#  'enabled' (optional - default: True): boolean
#  'cookable' (optional - default: True): boolean (aka merging allowed)
#  See registerScript() arguments in ResourceRegistries/tools/JSRegistry.py
#  for the latest list of all available keys and default values.
JAVASCRIPTS = (
#    {'id': 'myjavascript.js.dtml',},
        )

# CHANGE it to false if you don't want the new skin selection to be selected
#  at installation.
SELECTSKIN = True

# CHANGE it to true if you want users to be able to select the skin to use
#  from their personal preferences management page.
ALLOWSELECTION = True

# CHANGE it to true if you want to make the skin cookie persist indefinitely.
PERSISTENTCOOKIE = False

# DON'T EDIT this unless you really know what you are doing.
REQUESTVARNAME = ''
