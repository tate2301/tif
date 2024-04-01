import React from 'react'

type Props = {
  text: string
}

const BorderedHeading = ({ text }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="border-t border-zinc-100 flex-1"></div>
      <p className="text-center text-zinc-400 text-sm">{text}</p>
      <div className="border-t border-zinc-100 flex-1"></div>
    </div>
  )
}

export default BorderedHeading
