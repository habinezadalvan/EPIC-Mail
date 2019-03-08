// eslint-disable-next-line no-unused-vars
import moment from 'moment';
import emails from '../models/message';

const Message = {

  createMessages(req, res, next) {
    const newId = Number(emails.length + 21);
    const newEmail = {
      id: newId,
      createdOn: new Date(),
      subject: req.body.subject,
      message: req.body.message,
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      parentMessageId: req.body.parentMessageId,
      status: req.body.status,
    };
    emails.push(newEmail);
    res.status(201).json({
      status: 201,
      data: { emails },
      Notification: 'email was created successfully',
    });
    next();
  },

  getAllMessages(req, res, next) {
    res.status(200).json({
      status: 200,
      data: { emails },
      message: 'list of inbox message',
    });
    next();
  },
  

};

export default Message;
