##parameters=**kw
##title=load profile from /ShareToneDesktop_Data/user_id/desktop_id
##
request = context.REQUEST
user_id = "%s" % request.get('AUTHENTICATED_USER')
desktop_id = request.get('DESKTOP_ID')
if desktop_id == None or desktop_id == '':
   desktop_id = '0'
else:
   desktop_id = "%s" % desktop_id

if user_id == 'Anonymous User':
    return 'Error: User is not authenticated.'
else:
    try:
        root = container.restrictedTraverse('../../')
        if not hasattr(root, 'ShareToneDesktop_Data'):
            root.manage_addProduct['OFSP'].manage_addFolder(id='ShareToneDesktop_Data')
        ShareToneDesktop_Data = root['ShareToneDesktop_Data']
        profile = ShareToneDesktop_Data['users'][user_id][desktop_id]
        return "%s" % profile
    except:
        return 'Error: User is authenticated... but can\'t load the profile data'