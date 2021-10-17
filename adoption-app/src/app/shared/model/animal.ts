export interface Animal {
    _id: String,
    name: String,
    sex: String,
    breed: String,
    species: String,
    shelter: String,
    state?: String,
    city?: String,
    zip?: String,
    DoB?: Date,
    pic?: String,
    requestList?: Array<String>,
    status: String
}