/* eslint-disable @typescript-eslint/ban-types */
import OverviewLayout from '../../../layouts/OverviewLayout';
import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import SaleItem from '../../../components/sale-item/SaleItem';

type Props = {};

const Transactions = (props: Props) => {
  return (
    <OverviewLayout heading="Transactions">
      <div className="flex flex-col w-full rounded space-y-8">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col items-center md:space-y-6 space-y-2 p-4 main-border rounded-lg">
            <p className="text-sm font-semibold heading-text">
              Your total balance
            </p>
            <p className="text-4xl font-bold text-primary-original dark:text-primary-light">
              $2,724.00
            </p>
            <p className="text-xs super-light-text">
              August 16, 2023 &bull; 14.13 PM
            </p>
            <div className="flex flex-row items-center space-x-1 p-2 rounded text-green-600 dark:text-green-200 bg-green-200 dark:bg-green-600">
              <ChevronUpIcon height={12} width={12} />
              <p className="text-xs">2.10%</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 p-4 main-border rounded-lg">
            <p className="text-sm font-semibold heading-text">Send Money</p>
            <input
              type="email"
              placeholder="john@doe.com"
              className="p-2 rounded-lg w-full bg-secondary outline-none text-sm"
            />
            <input
              type="number"
              placeholder="1.100"
              className="p-2 rounded-lg w-full bg-secondary outline-none text-sm"
            />
            <PrimaryButton text="Send Money" textStyles='text-sm' />
          </div>
        </div>
        <div className=" main-border col-span-2 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-1">
              Recent Sales
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm font-semibold pb-4">
              You made 26 sales this month
            </p>
            <div className="flex-col space-y-4">
              <SaleItem />
              <SaleItem />
              <SaleItem />
              <SaleItem />
              <SaleItem />
              <SaleItem />
            </div>
          </div>
      </div>
    </OverviewLayout>
  );
};

export default Transactions;
