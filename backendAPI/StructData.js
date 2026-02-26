export class TaskStruct {
    constructor(id, content, status, date) {
        this.id = id;
        this.content = content;
        this.status = status;
        this.date = date;
    }
}

export class UserData {
    constructor(ID, login, password, password_1, email)
    {
        this.ID = ID;
        this.login = login;
        this.password = password;
        this.password_1 = password_1;
        this.email = email;
    }
}



