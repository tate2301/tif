/* eslint-disable @typescript-eslint/ban-types */
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {};

const OverviewTile = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 main-border p-4 rounded">
      <div className="flex flex-row items-center w-full main-text justify-between">
        <p className='text-sm font-semibold mb-2'>Total Revenue</p>
        <p>
          <CurrencyDollarIcon height={16} width={16} />
        </p>
      </div>
      <p className='text-2xl font-bold heading-text'>$45,231.89</p>
      <p className='text-xs text-slate-500 dark:text-slate-500'>+20.1% from last month</p>
    </div>
  );
};

export default OverviewTile;
