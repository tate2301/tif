/* eslint-disable @typescript-eslint/ban-types */
import DashboardLayout from '../../layouts/DashboardLayout'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <DashboardLayout>
       <div className="flex w-full max-w-7xl mx-auto text-main flex-col space-y-8 md:p-8 p-4 min-h-screen">
        <p className="heading-text text-3xl font-bold">Products</p>
      </div>
    </DashboardLayout>
  )
}

export default Products