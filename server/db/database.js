import pool from './dbexporter';
import messages from './sqlQueries/messages';
import users from './sqlQueries/users';
import groups from './sqlQueries/groups';
import grpMembers from './sqlQueries/groupsMembers';
import grpMessages from './sqlQueries/groupMessages';


export const createTables = () => {
  const createMessagesTable = messages.messages;
  const createUsersTable = users.createUser;
  const createGroupsTable = groups.groups;
  const createGroupMembersTable = grpMembers.groupMembers;
  const createGroupMessagesTable = grpMessages.groupMessages;
  const queries = `${createGroupMessagesTable}; ${createGroupMembersTable}; ${createGroupsTable}; ${createUsersTable}; ${createMessagesTable}`;
  pool.query(queries);
};

export const deleteTables = () => {
  const deleteMessagesTable = messages.dropMessagesTable;
  const deleteUsersTable = users.dropUsersTable;
  const deleteGroupsTable = groups.dropGroupTable;
  const deleteGroupMembersTable = grpMembers.dropGroupMembersTable;
  const deleteGroupMessagesTable = grpMessages.dropGroupMessagesTable;
  const drops = `${deleteGroupMembersTable}; ${deleteGroupMessagesTable}; ${deleteGroupsTable}; ${deleteMessagesTable}; ${deleteUsersTable}`;
  pool.query(drops);
};

require('make-runnable');


