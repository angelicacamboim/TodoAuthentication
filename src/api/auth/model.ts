import jwt from 'jsonwebtoken'
import {config} from '../../shared/environments/environment'

//Mock
const user = {
    name: 'Angelica bayer',
    email: 'angel@gmail.com',
    id: 1
}
const role = {
    name: 'admin'
}
//end mock

function authLogin(email: string, password: string): boolean | string {
    if(email && email != "" && password && password != ""){
        const payload = {user, role}
        const jwtSecret = config.jwtSecret

        const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'})

        return token
    }
    return false
}

function authLogout(token: string): boolean {
    return !!token
}

function createUser(email: string, password: string): any {
    if(email && email != "" && password && password != "") {
        const token = 'eiowjtwioe'
        return token
    }

    return false
}

function getToken(strToken: any): string {
    if(strToken && typeof strToken === 'string'){
        const token = strToken.split('Bearer ')[1]
        return token
    }

    return ''
   
}

export { authLogin, authLogout, createUser, getToken }