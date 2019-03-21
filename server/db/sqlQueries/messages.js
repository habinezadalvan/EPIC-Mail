const createMessage = `CREATE TABLE IF NOT EXISTS 
messages(
  id SERIAL PRIMARY KEY NOT NULL,
  senderId INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiverId INTEGER REFERENCES users(id) ON DELETE CASCADE,
  parentMessageId  INTEGER,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR (10) NOT NULL,
  createdOn TIMESTAMP
    );`;

const saveMessages = `INSERT INTO messages(senderId, receiverId,parentMessageId, subject, message,status,createdOn) 
    VALUES($1,$2,$3,$4,$5,$6,$7) ON CONFLICT DO NOTHING returning *`;


const getAllMessages = `SELECT * FROM messages WHERE receiverId = $1 AND (status ='unread' OR status ='read')`;
const getUnreadMessage = "SELECT * FROM messages WHERE status = 'unread'";
const getSentMessages = "SELECT * FROM messages WHERE status = 'sent'";
const getReadMessage = "SELECT * FROM messages WHERE status = 'read'";
const getDraftMessages = "SELECT * FROM messages WHERE status = 'draft'";
const getSingleMessage = 'SELECT * FROM messages WHERE id = $1';
const deleteSingleMessage = 'DELETE FROM messages WHERE id = $1';
const dropMessagesTable = 'DROP TABLE IF EXISTS messages';

export default {
  createMessage,
  saveMessages,
  getAllMessages,
  getUnreadMessage,
  getSentMessages,
  getReadMessage,
  getDraftMessages,
  getSingleMessage,
  deleteSingleMessage,
  dropMessagesTable,
};
