export class UpdateUserDto {
  name: string;
  email: string;
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
}