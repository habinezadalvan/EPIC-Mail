const createUser = `
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR (20) NOT NULL,
    lastName VARCHAR (20) NOT NULL,
    email VARCHAR (30) NOT NULL,
    password VARCHAR (12) NOT NULL,
    confirmPassword (12) NOT NULL
)`;

const dropUsersTable = 'DROP TABLE IF EXISTS createUser';

export default {
  createUser,
  dropUsersTable,
};
