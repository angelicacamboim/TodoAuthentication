function authLogin(email: string, password: string): boolean {
    if(email && email != "" && password && password != ""){
        return true
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