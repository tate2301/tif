import { ProductItemProps } from '@/utils/types';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useState } from 'react'
 
const CartItem = ({ title, amount, picture, quantity }: ProductItemProps) => {
  const [qty, setQty] = useState(quantity)
  const increaseQty = () =>{
    setQty(qty+1)
  }
  const reduceQty = () =>{
    qty >= 1 ? setQty(qty+1) : 1
  }
  return (
    <div className="flex row items-center space-x-4">
      <div className="w-20 relative h-20 bg-slate-500 rounded-2xl overflow-hidden">
        <Image src={picture} alt="cap item" layout="fill" />
      </div>
      <div className="flex flex-col space-y-1 flex-1">
        <p className="text-lg font-medium text-slate-900">{title}</p>
        <p className=" text-slate-500">$ {amount}</p>
      </div>
      <div className="flex flex-row items-center space-x-1">
        <button onClick={reduceQty} className="bg-slate-100 rounded-full p-1">
          <MinusIcon height={16} width={16} className="text-slate-900" />
        </button>
        <p className="text-sm text-slate-700">{qty}</p>
        <button onClick={increaseQty} className="bg-slate-100 rounded-full p-1">
          <PlusIcon height={16} width={16} className="text-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default CartItem