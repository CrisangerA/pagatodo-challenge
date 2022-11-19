import {Animated, RefreshControl, View} from 'react-native';
import React from 'react';
import {Bank} from '@modules/bank/domain/model';
import BankCard from './Card';
import Text from '@components/core/Text';
import {MainStyles} from '@components/core/styles';

interface Props {
  banks: Bank[];
  refreshing: boolean;
  onRefresh?: () => void;
}
BanksListView.defaultProps = {
  refreshing: false,
};
export default function BanksListView({banks, refreshing, onRefresh}: Props) {
  const style = banks.length === 0 ? {} : MainStyles.justifyCenterHeight100;
  return (
    <View style={style}>
      <View>
        <Animated.FlatList
          data={banks}
          renderItem={({item}) => <BankCard bank={item} />}
          keyExtractor={item => item.bankName}
          ListEmptyComponent={() => (
            <Text testID="NO_DATA" text="No se encontraron registros" />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
}
