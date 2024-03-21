/* eslint-disable @typescript-eslint/ban-types */
import { useRouter } from 'next/router';
import DashboardLayout from '../../layouts/DashboardLayout'
import React from 'react'

type Props = {}

const Customers = (props: Props) => {
  return (
    <DashboardLayout>
        <div className="flex w-full max-w-7xl mx-auto text-main flex-col space-y-8 md:p-8 p-4 min-h-screen">
        <p className="heading-text text-3xl font-bold">Customers</p>
      </div>
    </DashboardLayout>
  )
}

export default Customers