import React from 'react'

type Props = {
  onClick: () => void
  loading: boolean
  text: string
}

function CustomButton({ onClick, loading, text }: Props) {
  return (
    <button
      onClick={loading ? () => console.log('loading...') : onClick}
      className="bg-blue-600 text-white text-center w-full font-semibold px-6 py-2 rounded-lg"
    >
      {loading ? 'Loadding...' : text}
    </button>
  )
}

export default CustomButton
