export class ListAllUserDto {
    id: number;
    email: string;  
    name: string;
    password: string;
    datecreated: Date;
    active: Boolean;
    roleid: number;
    roles: string;
  }