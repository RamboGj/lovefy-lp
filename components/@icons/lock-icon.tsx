import { IconProps } from './types'

export function LockIcon({ ...rest }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <path d="M0 48H48V0H0V48Z" fill="url(#pattern0_4045_17801)" />
      <pattern
        id="pattern0_4045_17801"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_4045_17801" transform="scale(0.00625)" />
      </pattern>
    </svg>
  )
}
