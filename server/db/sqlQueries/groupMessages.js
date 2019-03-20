const createGroupMessages = `CREATE TABLE IF NOT EXISTS 
groupMessages(
  id UUID PRIMARY KEY NOT NULL,
  senderId  UUID NOT NULL REFERENCES users(id),
  groupId  UUID NOT NULL REFERENCES groups(id),
  message TEXT NOT NULL,
  createdON TIMESTAMP
);`;

const saveGroupMessages = `INSERT INTO groupMessages(id, senderId, groupId,message,createdOn) 
    VALUES($1,$2,$3,$4,$5) ON CONFLICT DO NOTHING returning *`;

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
