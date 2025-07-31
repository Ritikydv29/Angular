export interface UserInfo {
  FirstName: string;
    MiddleName?: string;
    LastName: string;
    Email: string;
    Mobile: string;
    Address: string;
    Password: string;
}
export interface UserLogin {
 
    Email: string;
 
    Password: string;
}

export interface User {
  userId: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  
}
export interface Customer{
  token: string;
  user:User;
}

