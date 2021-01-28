import jwt from 'jsonwebtoken'
import {config} from '../../shared/environments/environment'
import {IUser} from '../../shared/interfaces/user'
import User from '../../shared/models_database/user'

class AuthModel {
    private user: any
    private role: any

    constructor() {
        this.role = ({name: 'Admin'})
        this.user = User
    }

    async findUser (body: any){
        const user: IUser = await this.user.findUser(body)
        return user
    }

    generateToken (user: IUser){
        const payload ={ user, role: this.role}
        const jwtSecret = config.jwtSecret
    
        const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'})
    
        return token
        
    }

    async create (body: any){
        const user: IUser = await this.user.createUser(body)
        return user
    }

}

export default new AuthModel()


// function authLogout(token: string): boolean {
//     return !!token
// }

// function createUser(email: string, password: string): any {
//     if(email && email != "" && password && password != "") {
//         const user = {
//             password: password,
//             email: email
//         }
//         const payload = {user, role}
//         const jwtSecret = config.jwtSecret

//         const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'})

//         return token
//     }
//     return false
// }

// function getToken(strToken: any): string {
//     if(strToken && typeof strToken === 'string'){
//         const token = strToken.split('Bearer ')[1]
//         return token
//     }

//     return ''
   
// }

// export { authLogin, authLogout, createUser, getToken }