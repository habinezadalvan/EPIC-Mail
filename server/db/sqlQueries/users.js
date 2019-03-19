const createUser = `CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY NOT NULL,
  firstName VARCHAR (20) NOT NULL,
  lastName VARCHAR (20) NOT NULL,
  email VARCHAR (30) NOT NULL,
  password VARCHAR (12) NOT NULL,
  confirmPassword VARCHAR(12) NOT NULL,
  createdOn TIMESTAMP
    );`;
const saveUsers = `INSERT INTO user(id, firstName, lastName, email, password, confirmPassword) 
VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT DO NOTHING returning *)`;

const getUsers = 'SELECT * FROM users';

const dropUsersTable = 'DROP TABLE IF EXISTS users';

export default {
  createUser,
  saveUsers,
  getUsers,
  dropUsersTable,
};
