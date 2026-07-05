export interface User {
    _id : string,
    name : string,
    email :string,
    createdAt:string,
    updatedAt : string,

}

export interface CurrentUserResponse{
    success : boolean,
    user : User
}