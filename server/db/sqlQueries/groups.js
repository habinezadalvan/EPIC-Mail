const createGroups = `CREATE TABLE IF NOT EXISTS 
groups(
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR NOT NULL,
createdOn TIMESTAMP
);`;

const saveGroups = `INSERT INTO groups(id, name,createdOn) 
VALUES($1,$2,$3) ON CONFLICT DO NOTHING returning *`;

const getGroups = 'SELECT * FROM groups';

const getSingleGroup = `SELECT * FROM groups WHERE id = ${id}`;

const dropGroupTable = 'DROP TABLE IF EXISTS groups';

export default {
  createGroups,
  saveGroups,
  getGroups,
  getSingleGroup,
  dropGroupTable,
};
