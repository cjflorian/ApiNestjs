export class CreateUserDto {
    email: string;  
    name: string;
    password: string;
    datecreated: Date;
    active: Boolean;
    roleid: number;
  }