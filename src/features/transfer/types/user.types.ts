export interface SearchUser {
_id : string,
name : string,
email : string,

}

export interface SearchUserResponse{
successon: boolean,
users : SearchUser[];

}