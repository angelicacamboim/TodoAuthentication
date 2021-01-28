import Knex from 'knex'
import { IUser } from '../interfaces/user'
import connection from '../database/connection'

class User {
    private conn: Knex
    public table = 'users'

    constructor() {
        this.conn = connection
    }

    listUsers() {
        const promise = new Promise(( resolve, reject) => {
            try {
                this.conn.table(this.table).select()
                    .then((users: IUser[]) => {
                        resolve(users)
                })

            } catch(error){
                reject(error)
            }
        })
        return promise

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

    createUser(user: IUser){
        const promise = new Promise((resolve, reject ) => {
            this.conn.transaction(knex => {
                knex(this.table).transacting(knex).insert({...user})//INSERT INTO public.users("name", avatar, username, email, "password")VALUES(...user);
                .returning(['id', 'name', 'username', 'email'])//retornar apenas id, name, username e email
                .then((users: IUser[]) =>{
                    resolve(users[0])
            })
            .then(knex.commit)//se der certo commita
            .catch(knex.rollback)// se der errado rollback

            }).catch(error => {
                reject(error)
            })
        })
        
        return promise

    }

    updateUser(id: number, user: IUser){
        const promise = new Promise((resolve, reject ) => {
            this.conn.transaction(knex => {
                knex(this.table).transacting(knex).update({...user})//UPDATE public.users SET "name"='', avatar='', username='', email='', "password"='
                .where('id', id)//WHERE id=id;
                .returning(['id', 'name', 'username', 'email'])//retornar apenas id, name, username e email
                .then((users: IUser[]) =>{
                    resolve(users[0])
            })
            .then(knex.commit)//se der certo commita
            .catch(knex.rollback)// se der errado rollback

            }).catch(error => {
                reject(error)
            })
        })
        
        return promise

    }

    deleteUser(id: number){
        const promise = new Promise<void>((resolve, reject ) => {
            this.conn.transaction(knex => {
                knex(this.table).transacting(knex).del()
                .where('id', id)
                .then(() => { 
                    resolve()
            })
            .then(knex.commit)//se der certo commita
            .catch(knex.rollback)// se der errado rollback

            }).catch(error => {
                reject(error)
            })
        })
        
        return promise

    }
}

export default new User()