import express from 'express';
// import { createMessages, getAllMessages } from '../controllers/message';
import message from '../controllers/message';


const router = express.Router();

router.post('/api/v1/messages', message.createMessages);

router.get('/api/v1/messages', message.getAllMessages);
router.get('/api/v1/messages/unread', message.UnreadMessages);
router.get('/api/v1/messages/sent', message.sentMessages);

export default router;
