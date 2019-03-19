/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
// eslint-disable-next-line no-unused-vars
import moment from 'moment';
import uuid from 'uuid';
import emails from '../models/message';
import validation from '../helpers/messageValidation';
import database from '../db/database';
import createMessages from '../db/sqlQueries/messages';
// change object to class
class Message {
  static async createMessages(req, res, next) {
    const { error } = validation.validateMessage(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const sqlEmail = createMessages.saveMessages;
    const value = [
      uuid.v4(),
      uuid.v4(),
      uuid.v4(),
      uuid.v4(),
      req.body.subject,
      req.body.message,
      req.body.status,
      new Date(),
    ];
    console.log(value);
    try {
      const { rows } = await database.query(sqlEmail, value);
      console.log(rows[0]);
      return res.status(201).json({
        status: 201,
        data: rows[0],
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
    next();
  }

  static getAllMessages(req, res) {
    if (!emails.length) res.status(404).send('No email found');
    res.status(200).json({
      status: 200,
      data: emails,
      message: 'List of messages',
    });
  }

  static UnreadMessages(req, res, next) {
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
  }

  static sentMessages(req, res, next) {
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
  }

  static readMessages(req, res, next) {
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
  }

  static draftMessages(req, res, next) {
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
  }

  static getOneEmail(req, res, next) {
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
  }

  static deleteOneEmail(req, res, next) {
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
  }
}

export default Message;
