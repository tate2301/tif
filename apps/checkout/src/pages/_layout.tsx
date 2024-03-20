import React, { ReactNode } from 'react'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

type Props = {
  children?: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className={`flex flex-col bg-white ${inter.className}`}>
      {children}
    </div>
  )
}

export default Layout
