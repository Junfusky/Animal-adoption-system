export interface User {
    firstName: String,
    lastName: String,
    email: String,
    phone?: String,
    username: String,
    password: String,
    applyList?: Array<String>,
    isAdmin: boolean
}