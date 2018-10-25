export class User {
  firstName: string;
  lastName: string;
  email: string;
  userType: number;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    userType: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userType = userType;
  }
}
