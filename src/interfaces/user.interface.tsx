export interface UserData {
    username: string;
    email: string;
    password: string;
    role?: string
    bio?: string;
    profileImg?: string;
}

export const RoleTypes = [
    "USER",
    "ADMIN"
]
