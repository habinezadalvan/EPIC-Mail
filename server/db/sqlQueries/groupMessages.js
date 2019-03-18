const groupMessages = `
CREATE TABLE IF NOT EXISTS groupMessages(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT NOT NULL,
    senderId INT NOT NULL REFERENCES users(id),
    groupId INT NOT NULL REFERENCES groups (id),
    createdON TIMESTAMP
)`;

const dropGroupMessagesTable = 'DROP TABLE IF EXISTS groupMessages';

export default {
  groupMessages,
  dropGroupMessagesTable,
};
