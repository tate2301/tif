import React, { HTMLProps } from 'react'

type Props = {
  value: any
  setValue: any
  heading?: string
  placeholder: string
}

function CustomInput({ value, onChange: setValue, heading, placeholder, ...rest }: HTMLProps<HTMLInputElement> & {
  heading: string
}) {
  return (
    <div className="flex flex-col space-y-2">
      {heading && (
        <p className="text-sm text-zinc-600">{heading}</p>
      )}
      <input
        {...rest}
        type="text"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        className="bg-zinc-400/10 border-zinc-400/10 border focus:bg-transparent focus:border-zinc-400/30 focus:shadow-sm p-2 outline-none rounded-lg"
      />
    </div>
  )
}

export default CustomInput
