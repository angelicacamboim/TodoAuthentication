import Knex from 'knex'
import { IUser } from '../interfaces/user'
import connection from '../database/connection'

class User {
    private conn: Knex
    public table = 'users'

    constructor() {
        this.conn = connection
    }

    async findUser(user: IUser): Promise<IUser | any>{
        try{
            const users: IUser[] = await this.conn.table(this.table)
            .select('name', 'avatar', 'username', 'email', 'id').where({...user})

            return users[0]

        } catch(error){
            return error

        }
       

    }

}

export default new User()