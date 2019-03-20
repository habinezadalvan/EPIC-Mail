// const createDrafts = `CREATE TABLE IF NOT EXISTS
// drafts(
//  id UUID PRIMARY KEY,
//  senderId UUID NOT NULL REFERENCES users(id),
//  parentMessageId UUID NOT NULL,
//  subject TEXT NOT NULL,
//  message TEXT NOT NULL,
//  status VARCHAR (10)  NOT NULL,
//  createdOn DATE
// )`;
// const saveDraftsTable = `INSERT INTO drafts(id, firstName, lastName, email, password, confirmPassword) 
// VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT DO NOTHING returning *)`;

// const getDraftsTable = 'SELECT * FROM drafts';

// const dropDraftsTable = 'DROP TABLE IF EXISTS drafts';

// export default {
//   createUser,
//   saveUsers,
//   getUsers,
//   dropUsersTable,
// };