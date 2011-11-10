##parameters=**kw
##title=store profile to /ShareToneDesktop_Data/user_id/desktop_id
##
request = context.REQUEST
user_id = "%s" % request.get('AUTHENTICATED_USER')
desktop_id = request.get('DESKTOP_ID')
if desktop_id == None or desktop_id == '':
   desktop_id = '0'
else:
   desktop_id = "%s" % desktop_id

if user_id == 'Anonymous User':
    return 'Error: user is not authenticated.'
else:
    root = container.restrictedTraverse('../../')
    if not hasattr(root, 'ShareToneDesktop_Data'):
        root.manage_addProduct['OFSP'].manage_addFolder(id='ShareToneDesktop_Data')
    ShareToneDesktop_Data = root['ShareToneDesktop_Data']

    if not hasattr(ShareToneDesktop_Data, 'users'):
        ShareToneDesktop_Data.manage_addProduct['OFSP'].manage_addFolder(id='users')
    users = ShareToneDesktop_Data['users']
    if not hasattr(users, user_id):
        users.manage_addProduct['OFSP'].manage_addFolder(id=user_id)  
    profile = request.get('PROFILE')
    if profile == None:
        profile = ''
    else:
        profile = "%s" % profile
    if not hasattr(users[user_id], desktop_id):
        users[user_id].manage_addFile(desktop_id)
    users[user_id][desktop_id].manage_edit(title='', content_type='text/plain', filedata=profile)
    return 'Success: profile %s for user: %s is updated.' % (desktop_id, user_id)

