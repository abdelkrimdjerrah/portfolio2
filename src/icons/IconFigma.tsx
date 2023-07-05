import * as React from "react"
import { SVGProps } from "react"
const IconFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <path
      fill="#009BC1"
      fillRule="evenodd"
      d="M21 21a5.25 5.25 0 1 1 10.5 0A5.25 5.25 0 0 1 21 21ZM10.5 31.5c0-2.9 2.35-5.25 5.25-5.25H21v5.25a5.25 5.25 0 0 1-10.5 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#009BC1"
      fillRule="evenodd"
      d="M21 5.25v10.5h5.25a5.25 5.25 0 0 0 0-10.5H21ZM10.5 10.5c0 2.9 2.35 5.25 5.25 5.25H21V5.25h-5.25a5.25 5.25 0 0 0-5.25 5.25ZM10.5 21c0 2.9 2.35 5.25 5.25 5.25H21v-10.5h-5.25A5.25 5.25 0 0 0 10.5 21Z"
      clipRule="evenodd"
    />
  </svg>
)
export default IconFigma
