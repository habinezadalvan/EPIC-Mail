import express from 'express';
// import { createMessages, getAllMessages } from '../controllers/message';
import message from '../controllers/message';
// eslint-disable-next-line import/no-named-as-default
import account from '../controllers/account';


const router = express.Router();
// the following lines are the routes for all endpoints

router.post('/api/v1/messages', message.createMessages);

router.get('/api/v1/messages', message.getAllMessages);
router.get('/api/v1/messages/unread', message.UnreadMessages);
router.get('/api/v1/messages/sent', message.sentMessages);
router.get('/api/v1/messages/:id', message.getOneEmail);
router.delete('/api/v1/messages/:id', message.deleteOneEmail);


router.post('/api/v1/auth/signup', account.userSignup);
router.post('/api/v1/auth/login', account.userLogin);


export default router;
