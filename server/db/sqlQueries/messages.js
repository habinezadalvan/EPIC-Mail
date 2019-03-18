const createMessage = `
    CREATE TABLE messages(
        id SERIAL PRIMARY KEY NOT NULL,
        senderId INT NOT NULL REFERENCES users(id),
        receiverId INT NOT NULL REFERENCES users(id),
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        parentMessageId INT,
        status VARCHAR (10) NOT NULL,
        createdOn TIMESTAMP
    )
`;

const dropMessagesTable = 'DROP TABLE IF EXISTS messages';
export default {
  createMessage,
  dropMessagesTable,
};
