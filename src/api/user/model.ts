import { IUser } from '../../shared/interfaces/user'
import User from '../../shared/models/user'

class UserModel {
    private user: any

    constructor() {
        this.user = User
    }

    async find(body: any){
        try {
            const user: IUser =  await this.user.findUser(body)
            return user

            }catch(error){
                return error

        }

    }
}

export default new UserModel()