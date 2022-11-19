import React from 'react';
import {ActivityIndicator} from 'react-native';
// @Config and @Modules
import injector from '@config/di';
import {PAGATODO_API_ROUTES} from '@config/api.routes';
import {Bank} from '@modules/bank/domain/model';
// @Hooks
import useQuery from '@hooks/useQuery';
// @Components
import Page from '@components/layout/Page';
import AuthBackground from '@components/layout/Background';
import ListView from '@components/bank/ListView';
import BankUseCase from '@modules/bank/application/useCase';

const bankUseCase = injector.injectClass(BankUseCase);
export default function Wrapper() {
  const {data, isLoading} = useQuery<Bank[]>({
    key: ['GetCachedData'],
    service: () => bankUseCase.GetCachedBanks(),
  });
  if (isLoading || data === undefined) {
    return <ActivityIndicator size="large" />;
  }
  return <LandingScreen initialData={data} />;
}

function LandingScreen({initialData}: {initialData: Bank[]}) {
  const {data, isLoading, isRefetching, refetch} = useQuery<Bank[]>({
    key: [PAGATODO_API_ROUTES.banks.list],
    service: () => bankUseCase.GetAllBanks(),
    options: {
      staleTime: 60 * 1000 * 60 * 24, // 24 Hours
      initialData,
    },
  });
  React.useEffect(() => {
    data?.length === 0 && refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page p={0}>
      <AuthBackground />
      <ListView
        refreshing={isLoading || isRefetching}
        onRefresh={refetch}
        banks={data || []}
      />
    </Page>
  );
}
