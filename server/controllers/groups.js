import uuid from 'uuid';
import database from '../db/database';
import createGroups from '../db/sqlQueries/groups';


class Groups {
  static async userCreatesGroup(req, res) {
    const queryContent = createGroups.saveGroups;
    const values = [
      uuid.v4(),
      req.body.name,
      req.body.role,
      new Date(),
    ];
    try {
      const { rows } = await database.query(queryContent, values);
      return res.status(201).json({
        status: 201,
        data: rows,
      });
    } catch (error) {
      return res.status(400).json({
        error: console.log(error),
      });
    }
  }
}
export default Groups;
