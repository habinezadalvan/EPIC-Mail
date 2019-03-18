const groupMembers = `
    CREATE TABLE IF NOT EXISTS groupmembers (
        id SERIAL PRIMARY KEY NOT NULL,
        memberId INT NOT NULL REFERENCES users(id),
        name VARCHAR (20) NOT NULL,
        adminId INT REFERENCES users (id);
    );
`;

const dropGroupMembersTable = 'DROP TABLE IF EXISTS groupMembers';

export default {
  groupMembers,
  dropGroupMembersTable,
};
