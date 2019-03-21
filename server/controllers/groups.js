import database from '../db/database';
import createGroups from '../db/sqlQueries/groups';


class Groups {
  // CREATES GROUP

  static async userCreatesGroup(req, res) {
    const queryContent = createGroups.saveGroups; // CALLS INSERT GROUP INTO GROUP TABLE
    const values = [
      req.body.name,
      req.body.role,
      req.user.id,
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

  // GET ALL GROUPS
  static async getAllGroups(req, res) {
    const queryContent = createGroups.getGroups; // SELECTS GROUPS FOR A PARTICULAR OWNER
    try {
      const { rows } = await database.query(queryContent, [req.user.id]);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'The group you are trying to get do not exists',
        });
      }
      res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
export default Groups;
