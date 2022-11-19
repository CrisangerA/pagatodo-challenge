import '@testing-library/jest-native/extend-expect';
import React from 'react';
// Note: test renderer must be required after react-native.
import {render, screen} from '@testing-library/react-native';
// @Components
import ListView from '../src/ui/components/bank/ListView';
import BankCard from '@components/bank/Card';
import MockBankRepositoryImpl from '@modules/bank/infrastructure/mockimplement';

describe('1. BankPage Components', () => {
  it('[BankListView] Not have data', async () => {
    const expectedValue = 'No se encontraron registros';
    render(<ListView banks={[]} />);
    const valueOutput = await screen.findByTestId('NO_DATA');
    expect(valueOutput).toHaveTextContent(expectedValue);
  });
  it('[BankListView] Have data', async () => {
    const expectedBanks = await new MockBankRepositoryImpl().GetAll();
    render(<ListView banks={expectedBanks} />);
    const valueOutput = await screen.findAllByTestId('BANK_CARD');
    expect(valueOutput).toHaveLength(5);
  });
  it('[BankCard] Have data', async () => {
    const expectedBanks = await new MockBankRepositoryImpl().GetAll();
    const expectedValue = expectedBanks[0];
    render(<BankCard bank={expectedValue} />);
    const image = await screen.findAllByTestId('BANK_CARD_IMAGE');
    expect(image).toBeDefined();
    const valueOutput = await screen.findAllByTestId('BANK_CARD_NAME');
    expect(valueOutput[0]).toHaveTextContent(expectedValue.bankName);
  });
});
