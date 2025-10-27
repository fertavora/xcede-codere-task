/**
 * This type is to create the new user registration data
 */
export type RegisterData = {
  firstName: string;
  firstSurname: string;
  birthDate: {
    birthDay: string;
    birthMonth: string;
    birthYear: string;
  },
  jobIndustry: string;
  personalId: string;
  address: {
    addressName: string;
    addressZipCode: string;
  },
  mobilePhoneNumber: string;
  email: string;
  username: string;
  password: string;
}