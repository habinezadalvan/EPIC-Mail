import express from 'express';
import message from '../controllers/message';
// eslint-disable-next-line import/no-named-as-default
import account from '../controllers/account';
import authorization from '../middleware/authantication';
import group from '../controllers/groups';
import members from '../controllers/groupMembers';

const router = express.Router();
// endpoints

router.post('/api/v1/messages', authorization, message.createMessages);
router.get('/api/v1/messages', authorization, message.getAllMessages);
router.get('/api/v1/messages/unread', authorization, message.UnreadMessages);
router.get('/api/v1/messages/sent', authorization, message.sentMessages);
router.get('/api/v1/messages/read', authorization, message.readMessages);
router.get('/api/v1/messages/draft', authorization, message.draftMessages);
router.delete('/api/v1/messages/:id', authorization, message.deleteOneEmail);
router.get('/api/v1/messages/:id', authorization, message.getOneEmail);

router.post('/api/v1/auth/signup', account.userSignup);
router.post('/api/v1/auth/login', account.userLogin);
router.get('/api/v2/users', account.getAllUsers);

router.post('/api/v2/groups', authorization, group.userCreatesGroup);
router.get('/api/v2/groups', authorization, group.getAllGroups);
router.post('/api/v2/groups/:groupId/users', authorization, members.addMember);


export default router;
