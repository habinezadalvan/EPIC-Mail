const createUser = `CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY NOT NULL,
  firstName VARCHAR (20) NOT NULL,
  lastName VARCHAR (20) NOT NULL,
  email VARCHAR (50) NOT NULL UNIQUE,
  password VARCHAR (100) NOT NULL,
  createdOn TIMESTAMP DEFAULT NOW()
    );`;
const saveUsers = `INSERT INTO users(id, firstName, lastName, email, password) 
VALUES($1,$2,$3,$4,$5) ON CONFLICT DO NOTHING returning *`;

const getUsers = 'SELECT * FROM users';

const dropUsersTable = 'DROP TABLE IF EXISTS users';
const GetUser = 'SELECT * FROM users WHERE email = $1';

const getSingleUser = 'SELECT * FROM users WHERE id = $1';

export default {
  createUser,
  saveUsers,
  getUsers,
  GetUser,
  getSingleUser,
  dropUsersTable,
};
