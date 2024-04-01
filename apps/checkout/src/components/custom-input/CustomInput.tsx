import React from 'react'

type Props = {
  value: any
  setValue: any
  heading?: string
  placeholder: string
}

function CustomInput({ value, setValue, heading, placeholder }: Props) {
  return (
    <div className="flex flex-col space-y-1">
      {heading && (
        <p className="text-sm text-slate-500 capitalize">{heading}</p>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="border border-zinc-400/20 shadow-sm p-2 outline-none rounded-lg"
      />
    </div>
  )
}

export default CustomInput
