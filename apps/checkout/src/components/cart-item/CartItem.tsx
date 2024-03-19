import { ProductItemProps } from '@/utils/types';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react'
 
const CartItem = ({ title, amount, picture, quantity }: ProductItemProps) => {
  return (
    <div className="flex row items-center space-x-4">
      <div className="w-20 relative h-20 bg-slate-500 rounded-2xl overflow-hidden">
        <Image src={picture} alt="cap item" layout="fill" />
      </div>
      <div className="flex flex-col space-y-1 flex-1">
        <p className="text-lg font-medium text-slate-900">{title}</p>
        <p className=" text-slate-500">{amount}</p>
      </div>
      <div className="flex flex-row items-center space-x-1">
        <button className="bg-slate-100 rounded-full p-1">
          <MinusIcon height={16} width={16} className="text-slate-900" />
        </button>
        <p className="text-sm text-slate-700">{quantity}</p>
        <button className="bg-slate-100 rounded-full p-1">
          <PlusIcon height={16} width={16} className="text-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default CartItem