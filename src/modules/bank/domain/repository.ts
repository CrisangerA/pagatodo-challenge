import {Bank} from './model';

export default interface BankRepository {
  GetAll(): Promise<Bank[]>;
  GetCachedData(): Promise<Bank[]>;
}
