import StorageRepository from '@modules/shared/domain/repository/storage.repository';
import BankRepository from '../domain/repository';

export default class BankUseCase {
  constructor(
    private readonly repository: BankRepository,
    private readonly localStorage: StorageRepository,
  ) {}
  public static inject = ['BankRepository', 'StorageRepository'] as const;
  async GetAllBanks() {
    const banks = await this.repository.GetAll();
    this.localStorage.StoreLocalData('banks', JSON.stringify(banks));
    return banks;
  }
  async GetCachedBanks() {
    return this.repository.GetCachedData();
  }
}
