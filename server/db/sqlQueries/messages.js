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

const getMessages = 'SELECT * FROM messages';
const getSingleMessage = 'SELECT * FROM messages WHERE id =$1';
const dropMessagesTable = 'DROP TABLE IF EXISTS messages';

export default {
  createMessage,
  saveMessages,
  getMessages,
  getSingleMessage,
  dropMessagesTable,
};
