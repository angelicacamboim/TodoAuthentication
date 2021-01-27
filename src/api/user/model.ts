import { IUser } from '../../shared/interfaces/user'
import User from '../../shared/models/user'

class UserModel {
    private user: any

    constructor() {
        this.user = User
    }

    async index() {
        const users: IUser[] = await this.user.listUsers()
        return users
    }

    async find(id: any){
        try {
            const user: IUser =  await this.user.findUser(id)
            return user

            }catch(error){
                return error

        }

    }
    async create(body: any){
        const user: IUser =  await this.user.createUser(body)
        return user

    }

    async update(id:number, body: any){
        const user: IUser =  await this.user.updateUser(id,body)
        return user

    }

    async destroy(id:number){
        await this.user.deleteUser(id)

    }
}

export default new UserModel()