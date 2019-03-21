const createGroupMembers = `CREATE TABLE IF NOT EXISTS 
groupmembers(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(20),
  lastname VARCHAR(20),
  role VARCHAR(50) NOT NULL,
  groupId INTEGER REFERENCES groups(id) ON DELETE CASCADE
);`;

const saveGroupMembers = `INSERT INTO groupmembers(firstname, lastname, role, groupId) 
VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING returning *`;

const getGroupMembers = 'SELECT * FROM groupmembers';

const getSingleGroupMember = 'SELECT * FROM groupmembers WHERE id = $1';

const dropGroupMembersTable = 'DROP TABLE IF EXISTS groupmembers';

export default {
  createGroupMembers,
  saveGroupMembers,
  getGroupMembers,
  getSingleGroupMember,
  dropGroupMembersTable,
};
