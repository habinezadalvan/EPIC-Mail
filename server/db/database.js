/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import pool from './dbexporter';
import users from './sqlQueries/users';
import messages from './sqlQueries/messages';
import groups from './sqlQueries/groups';
import grpMessages from './sqlQueries/groupMessages';
import grpMembers from './sqlQueries/groupsMembers';


const createUserTable = async () => {
  const queryContent = users.createUser;
  await pool.query(queryContent)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
};
const createMessageTable = async () => {
  const queryContent = messages.createMessage;
  await pool.query(queryContent)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
};
const createGroupTable = async () => {
  const queryContent = groups.createGroups;
  await pool.query(queryContent)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
};
const createGroupMessagesTable = async () => {
  const queryContent = grpMessages.createGroupMessages;
  await pool.query(queryContent)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
};

const groupMembersTable = async () => {
  const queryContent = grpMembers.createGroupMembers;
  await pool.query(queryContent)
    .then((res) => {
      console.log(res);
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

  //pool.end();

  console.log('Tables have been created successfully');
})().catch((error) => {
  console.log(error);
});

require('make-runnable');

export default {
  query: async (sql, params) => pool.query(sql, params),
};
