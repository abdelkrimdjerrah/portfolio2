import { SVGProps } from "react"
const IconCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path fill="#7B61FF" d="M41 5H7l3 34 14 4 14-4 3-34Z" />
    <path
      fill="#1A1A1A"
      d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5.5-8ZM24 13v4h-8.9l-.3-4H24Zm-4.6 8 .2 4H24v-4h-4.6Zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5Z"
    />
  </svg>
)
export default IconCss