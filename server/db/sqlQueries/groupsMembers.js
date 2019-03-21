const createGroupMembers = `CREATE TABLE IF NOT EXISTS 
groupmembers(
  id SERIAL PRIMARY KEY,
  userRole VARCHAR(50) NOT NULL,
  userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
  groupId INTEGER REFERENCES groups(id) ON DELETE CASCADE
);`;

const saveGroupMembers = `INSERT INTO groupmembers(userRole,userId,groupId) 
VALUES($1,$2,$3) ON CONFLICT DO NOTHING returning *`;

const addMember = 'INSERT INTO groupmembers WHERE userId = $1';

const getGroupMembers = 'SELECT * FROM groupmembers';

const getSingleGroupMember = 'SELECT * FROM groupmembers WHERE id = $1';

const dropGroupMembersTable = 'DROP TABLE IF EXISTS groupmembers';

export default {
  createGroupMembers,
  saveGroupMembers,
  getGroupMembers,
  addMember,
  getSingleGroupMember,
  dropGroupMembersTable,
};
