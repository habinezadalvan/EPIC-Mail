const createGroups = `CREATE TABLE IF NOT EXISTS 
groups(
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
role VARCHAR(100) NOT NULL,
owner INTEGER REFERENCES users(id) ON DELETE CASCADE,
createdOn TIMESTAMP
);`;

const saveGroups = `INSERT INTO groups(name,role,owner,createdOn) 
VALUES($1,$2,$3,$4) ON CONFLICT DO NOTHING returning *`;

const getGroups = 'SELECT * FROM groups WHERE owner = $1';

const getSingleGroup = 'SELECT * FROM groups WHERE id = $1';

const dropGroupTable = 'DROP TABLE IF EXISTS groups';

export default {
  createGroups,
  saveGroups,
  getGroups,
  getSingleGroup,
  dropGroupTable,
};
