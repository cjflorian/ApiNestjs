import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';
  
  const passwordRegEx =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
  
  
  export class AuthUserDto {
 
      @IsString()
      @MinLength(2, { message: 'Name must have atleast 2 characters.' })
      @IsNotEmpty()
      nameUser: string;
  
      @IsNotEmpty()
      @Matches(passwordRegEx, {
        message: `Password must contain Minimum 8 and maximum 20 characters, 
        at least one uppercase letter, 
        one lowercase letter, 
        one number and 
        one special character`,
      })
      passworduser: string;
      iduser: number;
      email: string;
    }