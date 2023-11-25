import React from "react"

type Props = {
  isAvailable?: boolean
  style?: React.CSSProperties
}

const BusSeatIcon: React.FC<Props> = ({
  isAvailable = true,
  style,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="24px"
      width="24px"
      style={style}
    >
      {isAvailable ? (
        <path d="M4 18v3h3v-3h10v3h3v-6H4v3m15-8h3v3h-3v-3M2 10h3v3H2v-3m15 3H7V5a2 2 0 012-2h6a2 2 0 012 2v8z" />
      ) : (
        <path d="M15 5v7H9V5h6m0-2H9a2 2 0 00-2 2v9h10V5a2 2 0 00-2-2m7 7h-3v3h3v-3M5 10H2v3h3v-3m15 5H4v6h2v-4h12v4h2v-6z" />
      )}
    </svg>
  )
}

export default BusSeatIcon
