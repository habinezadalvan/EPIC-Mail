const createUser = `CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR (20) NOT NULL,
  lastname VARCHAR (20) NOT NULL,
  email VARCHAR (100) UNIQUE NOT NULL,
  password VARCHAR (100),
  createdOn TIMESTAMP
    );`;
const saveUsers = `INSERT INTO users(firstName, lastName, email, password, createdOn) 
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
