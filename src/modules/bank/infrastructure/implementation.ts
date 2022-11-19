import {PAGATODO_API_ROUTES} from '@config/api.routes';
import HttpRepository from '@modules/shared/domain/repository/http.repository';
import StorageRepository from '@modules/shared/domain/repository/storage.repository';
import {Bank} from '../domain/model';
import BankRepository from '../domain/repository';

export default class BankRepositoryImpl implements BankRepository {
  constructor(
    private readonly http: HttpRepository,
    private readonly localStorage: StorageRepository,
  ) {}
  public static inject = ['HttpRepository', 'StorageRepository'] as const;

  async GetAll() {
    const res = await this.http.Get(PAGATODO_API_ROUTES.banks.list);
    return res.data as Bank[];
  }

  async GetCachedData() {
    const res = await this.localStorage.GetStoredLocalData('banks');
    if (res) {
      const banks = JSON.parse(res);
      return banks as Bank[];
    }
    return [];
  }
}
