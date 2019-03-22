/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import pool from './dbexporter';
import users from './sqlQueries/users';
import messages from './sqlQueries/messages';
import groups from './sqlQueries/groups';
import grpMessages from './sqlQueries/groupMessages';
import grpMembers from './sqlQueries/groupsMembers';


const createUserTable = async () => {
  const queryContent = users.createUser; // CALL CREATEUSER QUERY FROM USERS QUERY
  await pool.query(queryContent)
    .then((res) => {
      console.log('USERS TABLE created successfully');
    }).catch((error) => {
      console.log(error);
    });
};
const createMessageTable = async () => {
  const queryContent = messages.createMessage; // CALL CREATE MESSAGE QUERY FROM MESSAGES QUERY
  await pool.query(queryContent)
    .then((res) => {
      console.log('MESSAGES TABLE created successfully');
    }).catch((error) => {
      console.log(error);
    });
};
const createGroupTable = async () => {
  const queryContent = groups.createGroups; // CALL CREATE GROUP TABLE FROM GROUPS QUERY TABLE
  await pool.query(queryContent)
    .then((res) => {
      console.log('GROUPS TABLE created successfully');
    }).catch((error) => {
      console.log(error);
    });
};
const createGroupMessagesTable = async () => {
  const queryContent = grpMessages.createGroupMessages; // CALL CREATE GROUP MESSAGE TABLE QUERY FROM GROUP MESSAGES QUERY
  await pool.query(queryContent)
    .then((res) => {
      console.log('GROUP MESSAGES TABLE created successfully');
    }).catch((error) => {
      console.log(error);
    });
};

const groupMembersTable = async () => {
  const queryContent = grpMembers.createGroupMembers; // CALL CREATE GROUP MEMBERS TABLE QUERY FROM GROUP MEMBERS QUERY
  await pool.query(queryContent)
    .then((res) => {
      console.log('GROUP MEMBERS TABLE created successfully');
    }).catch((error) => {
      console.log(error);
    });
};

(async () => {
  await createUserTable();
  await createMessageTable();
  await createGroupTable();
  await createGroupMessagesTable();
  await groupMembersTable();

  // pool.end();

  console.log('Tables have been created successfully');
})().catch((error) => {
  console.log(error);
});


// exporting query function
export default {
  query: async (sql, params) => pool.query(sql, params), 
};
