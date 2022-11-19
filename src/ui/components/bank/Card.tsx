import React from 'react';
import {Image} from 'react-native';
// @Modules
import {Bank} from '@modules/bank/domain/model';
// @Components
import {Card, CardTitle} from '@components/core/Card';
import Text from '@components/core/Text';
import Box from '@components/layout/Box';
import {MainStyles} from '@components/core/styles';

export default function BankCard({bank}: {bank: Bank}) {
  return (
    <Card testID="BANK_CARD">
      <Box display="flexRowAlignCenter">
        <Image
          source={{
            uri: bank.url,
          }}
          style={MainStyles.imageAvatar}
          testID="BANK_CARD_IMAGE"
        />
        <Box mr={2} />
        <Box>
          <CardTitle testID="BANK_CARD_NAME" title={bank.bankName} />
          <Text type="text" text={bank.description} numberOfLines={2} />
          <Text type="input" text={`${bank.age} años`} />
        </Box>
      </Box>
    </Card>
  );
}
