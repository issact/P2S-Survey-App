import * as React from "react"
import { SVGProps } from "react"
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="currentColor"
    {...props}
  >
    <path
      d="M13.375 16.844a1.126 1.126 0 1 1-2.251 0 1.126 1.126 0 0 1 2.251 0ZM12.25 6.72c-2.068 0-3.75 1.514-3.75 3.375v.375a.75.75 0 1 0 1.5 0v-.375c0-1.031 1.01-1.875 2.25-1.875s2.25.844 2.25 1.875c0 1.032-1.01 1.875-2.25 1.875a.75.75 0 0 0-.75.75v.75a.75.75 0 1 0 1.5 0v-.067c1.71-.314 3-1.678 3-3.308 0-1.86-1.682-3.375-3.75-3.375ZM22 11.97a9.75 9.75 0 1 1-9.75-9.75A9.76 9.76 0 0 1 22 11.97Zm-1.5 0a8.25 8.25 0 1 0-8.25 8.25 8.259 8.259 0 0 0 8.25-8.25Z"
    />
  </svg>
)
export default InfoIcon;
