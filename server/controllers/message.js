/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
// eslint-disable-next-line no-unused-vars
import moment from 'moment';
import uuid from 'uuid';
// import emails from '../models/message';
import validation from '../helpers/messageValidation';
import database from '../db/database';
import createMessages from '../db/sqlQueries/messages';

// change object to class
class Message {
  // Old Validation
  static async createMessages(req, res) {
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
  }

  static async getAllMessages(req, res) {
    const queryContent = createMessages.getAllMessages;
    try {
      const { rows } = await database.query(queryContent);
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      {
        return res.status(400).json({
          error,
        });
      }
    }
  }

  static async UnreadMessages(req, res) {
    const queryContent = createMessages.getUnreadMessage;

    try {
      const { rows } = await database.query(queryContent);
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  }

  static async sentMessages(req, res) {
    const queryContent = createMessages.getSentMessages;
    try {
      const { rows } = await database.query(queryContent);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'Message not found',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  }

  static async readMessages(req, res) {
    const queryContent = createMessages.getReadMessage;
    try {
      const { rows } = await database.query(queryContent);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'No email found',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  static async draftMessages(req, res) {
    const queryContent = createMessages.getDraftMessages;
    try {
      const { rows } = await database.query(queryContent);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'No draft email found',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  static async getOneEmail(req, res) {
    const queryContent = createMessages.getSingleMessage;
    try {
      const { rows } = await database.query(queryContent, [req.params.id]);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'The email you are trying to get donot exists',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
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
