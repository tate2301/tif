/* eslint-disable @typescript-eslint/ban-types */
import { Avatar } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const SaleItem = (props: Props) => {
  return (
    <div className="flex flex-row space-x-2 items-center flex-1 ">
      <Avatar name="tafara bako" size={'sm'} />
      <div className="flex flex-col space-y-1">
        <p className="heading-text font-semibold">Tatenda Bako</p>
        <p className="text-slate-400 dark:text-slate-500 text-sm">trewmane@gmail.com</p>
      </div>
      <div className="flex-1"></div>
      <p className='font-semibold heading-text'>+$1,999.00</p>
    </div>
  );
};

export default SaleItem;
