import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();

class Database {
    constructor(){
        this.pool = new Pool({
            user: process.env.PGuserName,
            host: process.env.PGhostName,
            database: process.env.PGdatabase,
            password: process.env.PGpassword,
        });

        this.connect = async () => this.pool.connect();
    }
}