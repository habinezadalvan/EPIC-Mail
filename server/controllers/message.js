// eslint-disable-next-line no-unused-vars
import moment from 'moment';
import emails from '../models/message';
import validation from '../helpers/messageValidation';

const Message = {

  createMessages(req, res, next) {
    const { error } = validation.validateMessage(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const newId = (emails.length + 1);
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
      data: emails,
      Notification: 'Email was created successfully',
    });
    next();
  },

  getAllMessages(req, res) {
    if (!emails.length) res.status(404).send('No email found');
    res.status(200).json({
      status: 200,
      data: emails,
      message: 'List of messages',
    });
  },

  UnreadMessages(req, res, next) {
    const unreads = emails.filter(e => e.status === 'unread');
    if (!unreads.length) {
      res.status(404).send('Unread emails not found');
    } else {
      res.status(200).json({
        status: 200,
        data: unreads,
        Notification: 'List of unread of unread messages',
      });
    }
    next();
  },
  sentMessages(req, res, next) {
    const sentEmails = emails.filter(e => e.status === 'sent');
    if (!sentEmails.length) {
      res.status(404).send('No sent emails found');
    } else {
      res.status(200).json({
        status: 200,
        data: sentEmails,
        Notification: 'list of sent emails',
      });
    }
    next();
  },

  readMessages(req, res, next) {
    const readEmails = emails.filter(e => e.status === 'read');
    if (!readEmails.length) {
      res.status(404).send('No read emails found');
    } else {
      res.status(200).json({
        status: 200,
        data: readEmails,
        Notification: 'List of read emails',
      });
    }
    next();
  },

  draftMessages(req, res, next) {
    const draftEmails = emails.filter(e => e.status === 'draft');
    if (!draftEmails.length) {
      res.status(404).send('No Draft emails found');
    } else {
      res.status(200).json({
        status: 200,
        data: draftEmails,
        Notification: 'List of Draft emails',
      });
    }
    next();
  },

  getOneEmail(req, res, next) {
    const singleEmail = emails.find(e => e.id === Number(req.params.id));
    if (!singleEmail) {
      res.status(404).send('Email not found');
    } else {
      res.status(200).json({
        status: 200,
        data: singleEmail,
      });
    }
    next();
  },
  deleteOneEmail(req, res, next) {
    const deleteEmail = emails.find(e => e.id === Number(req.params.id));
    if (!deleteEmail) {
      res.status(404).send('That email can not be found to be deleted');
    } else {
      const index = emails.indexOf(deleteEmail);
      emails.splice(index, 1);
      res.status(200).json({
        status: 200,
        data: { message: ' Email deleted successfully' },
      });
    }
    next();
  },

};

export default Message;
