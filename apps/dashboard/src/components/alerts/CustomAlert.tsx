import React from 'react'

type Props = {
  type: string,
  message: string
}

const CustomAlert = ({type, message}: Props) => {
  return (
    <div className={`${type === 'error' ? "text-red-600 border-red-300 " : "text-red-600 border-red-200 "} border rounded-lg text-center text-sm font-medium p-2`}>
      {message}
    </div>
  )
}

export default CustomAlert