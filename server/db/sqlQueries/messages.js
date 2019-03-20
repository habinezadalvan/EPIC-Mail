const createMessage = `CREATE TABLE IF NOT EXISTS 
messages(
  id UUID PRIMARY KEY NOT NULL,
  senderId  UUID NOT NULL,
  receiverId UUID,
  parentMessageId  UUID,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR (10) NOT NULL,
  createdOn TIMESTAMP
    );`;

const saveMessages = `INSERT INTO messages(id, senderId, receiverId,parentMessageId, subject, message,status,createdOn) 
    VALUES($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT DO NOTHING returning *`;


const getAllMessages = 'SELECT * FROM messages';
const getUnreadMessage = "SELECT * FROM messages WHERE status = 'unread'";
const getSentMessages = "SELECT * FROM messages WHERE status = 'sent'";
const getReadMessage = "SELECT * FROM messages WHERE status = 'read'";
const getDraftMessages = "SELECT * FROM messages WHERE status = 'draft'";
const getSingleMessage = 'SELECT * FROM messages WHERE id = $1';
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
  dropMessagesTable,
};
