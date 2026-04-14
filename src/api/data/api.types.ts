
export enum Role {
    STUDENT ="STUDENT",
    INSTRUCTOR="INSTRUCTOR",
    ADMIN="ADMIN"
}


export type AuthState = {
  token?: string;
  user?:string
  name?:string
  role?: Role;
  success?: boolean;
  message?:string
  isVerified?: boolean;
};