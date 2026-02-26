import connection from "../database/mysql.js";

class User {
    async register(login, password)
    {
     const RegistrationUser = new Promise((resolve, reject) => {
        
        const UserData  = [login, email, password]

        connection.query("INSERT INTO Users (login, email, password) VALUES (?, ?, ?)", UserData, (Error, results)=>
        {
            Error ? reject(Error) : resolve(results)
        })
        return RegistrationUser;
     });

    }
    async login(login, password)
    {
    const AuthenticationUser = new Promise((resolve, reject) => {
        
        const UserData = [login, password]

        connection.query("SELECT ID, login FROM Users WHERE password = ? AND WHERE email = ?", UserData, (Error, results)=>
        {
            Error ? reject(Error) : resolve(results)
        })
        return AuthenticationUser;
    });
    }
}

export default User;