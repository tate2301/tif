/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from 'react'
import Navbar from '../components/navigation/Navbar'
import Head from 'next/head'

type Props = {
    children?:ReactNode
}

const DashboardLayout = (props: Props) => {
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <div className='flex flex-col'>
        <div className="nav">
            <Navbar />
        </div>
        {props.children}
    </div>
    </>
  )
}

export default DashboardLayout