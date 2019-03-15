import express from 'express';
import message from '../controllers/message';
// eslint-disable-next-line import/no-named-as-default
import account from '../controllers/account';


const router = express.Router();
// endpoints

router.post('/api/v1/messages', message.createMessages);
router.get('/api/v1/messages', message.getAllMessages);
router.get('/api/v1/messages/unread', message.UnreadMessages);
router.get('/api/v1/messages/sent', message.sentMessages);
router.get('/api/v1/messages/read', message.readMessages);
router.get('/api/v1/messages/draft', message.draftMessages);
router.delete('/api/v1/messages/:id', message.deleteOneEmail);
router.get('/api/v1/messages/:id', message.getOneEmail);

router.post('/api/v1/auth/signup', account.userSignup);
router.post('/api/v1/auth/login', account.userLogin);


export default router;
