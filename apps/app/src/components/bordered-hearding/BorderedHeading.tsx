import React from 'react'

type Props = {
  text: string
}

const BorderedHeading = ({ text }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="main-border-t flex-1"></div>
      <p className="text-center light-text text-sm">{text}</p>
      <div className="main-border-t flex-1"></div>
    </div>
  )
}

export default BorderedHeading