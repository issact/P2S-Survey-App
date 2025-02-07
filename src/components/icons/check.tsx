import * as React from "react"
import { SVGProps } from "react"
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="current"
    {...props}
  >
    <path
      d="m11.265 3.86-6 6a.375.375 0 0 1-.53 0L2.11 7.235a.375.375 0 1 1 .53-.53L5 9.064l5.735-5.736a.375.375 0 0 1 .53.53Z"
    />
  </svg>
)
export default CheckIcon