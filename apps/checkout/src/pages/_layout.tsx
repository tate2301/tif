import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

function Layout({children}: Props) {
  return (
    <div className='flex flex-col bg-slate-50'>
        {children}
    </div>
  )
}

export default Layout