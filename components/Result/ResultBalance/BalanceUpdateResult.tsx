import React from 'react'
import { useAppSelector } from '../../../redux/store';

const BalanceUpdateResult = () => {
    const { balanceUpdate } = useAppSelector((state) => ({
        balanceUpdate: state.balance.balanceUpdate,
      }));
      return <pre>{JSON.stringify(balanceUpdate, null, 4)}</pre>;
}

export default BalanceUpdateResult