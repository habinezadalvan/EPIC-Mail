const groups = `
CREATE TABLE IF NOT EXISTS groups(
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR NOT NULL,
createdOn TIMESTAMP
)`;

const dropGroupTable = 'DROP TABLE IF EXISTS groups';

export default {
  groups,
  dropGroupTable,
};
