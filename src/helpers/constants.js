/* LIST OF CONSTANTS */

// Local Storage Key
export const LOCAL_STORAGE_KEY_1 = 'userLoginSession'

// URL
export const baseUrl = 'http://206.189.91.54//api/v1/'

export const loginUrl = 'auth/sign_in'
export const registrationUrl = 'auth'
export const userListUrl = 'users'
export const channelsBaseUrl = 'channels'
export const channelAddUserUrl = 'channel/add_member'
export const messagesBaseUrl = 'messages'

// Audit Trail
export const loginAuditText = 'Create User Session'
export const registerAuditText = 'User Registration'
export const userListAuditText = 'Retrieve All Users'
export const channelCreateAuditText = 'Create a New Channel with User'
export const channelRetrieveAuditText = 'Retrieve a Channel'
export const inviteToChannelAuditText = 'Invite User to a Channel'
export const channelListAuditText = 'Retrieve all Channels where User was invited'
export const channelMessagesAuditText = 'Retrieve All Messages in a Channel'
export const userMessagesAuditText = 'Retrieve All Messages with a User'
export const sendChannelMessageAuditText = 'Create Message in a Channel'
export const sendUserMessageAuditText = 'Create Direct Message to a User'