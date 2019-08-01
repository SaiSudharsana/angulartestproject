export class Employee {
  id: number;
  name: string;
  gender: string;
  email?: string; //optional
  phoneNumber?: number;
  contactPreference: string;
  dateOfBirth: Date;
  department: string;
  isActive: boolean;
  photoPath?: string;
}
