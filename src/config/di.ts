import {createInjector, Scope} from 'typed-inject';
import LocalStorage from '@modules/shared/infrastructure/localStorage';
import {PAGATODO_API_ROUTES} from './api.routes';
import Http from '@modules/shared/infrastructure/http.implementation';
import BankRepositoryImpl from '@modules/bank/infrastructure/implementation';

const injector = createInjector()
  .provideValue('API_ROUTE_ROOT', PAGATODO_API_ROUTES.root)
  .provideClass('HttpRepository', Http, Scope.Singleton)
  .provideClass('StorageRepository', LocalStorage, Scope.Singleton)
  .provideClass('BankRepository', BankRepositoryImpl, Scope.Singleton);

export default injector;
