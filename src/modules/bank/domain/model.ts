export interface Bank {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

export default class BankValues implements Bank {
  description: string;
  age: number;
  url: string;
  bankName: string;
  /**
   *
   */
  constructor({age, bankName, description, url}: Bank) {
    this.description = description;
    this.age = age;
    this.bankName = bankName;
    this.url = url;
  }
}
