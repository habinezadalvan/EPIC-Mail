const createGroupMembers = `CREATE TABLE IF NOT EXISTS 
groupmembers(
  id UUID PRIMARY KEY NOT NULL,
  memberId  UUID NOT NULL REFERENCES users(id),
  name VARCHAR (20) NOT NULL,
  adminId INT REFERENCES users (id)
);`;

const saveGroupMembers = `INSERT INTO groupmembers(id, memberId, name, adminId) 
VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING returning *)`;

const getGroupMembers = 'SELECT * FROM groupmembers';

const dropGroupMembersTable = 'DROP TABLE IF EXISTS groupmembers';

export default {
  createGroupMembers,
  saveGroupMembers,
  getGroupMembers,
  dropGroupMembersTable,
};
