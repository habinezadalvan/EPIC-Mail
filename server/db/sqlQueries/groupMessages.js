const createGroupMessages = `CREATE TABLE IF NOT EXISTS 
groupMessages(
  id SERIAL  PRIMARY KEY NOT NULL,
  senderId  INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  groupId  INTEGER NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  createdON TIMESTAMP
);`;

const saveGroupMessages = `INSERT INTO groupMessages(senderId, groupId,message,createdOn) 
    VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING returning *`;

const getGroupMessages = 'SELECT * FROM groupMessages';

const getSingleMessage = 'SELECT * FROM groupMessages WHERE id = $1';

const dropGroupMessagesTable = 'DROP TABLE IF EXISTS groupMessages';

export default {
  createGroupMessages,
  saveGroupMessages,
  getGroupMessages,
  getSingleMessage,
  dropGroupMessagesTable,
};
