import React from "react"

function MessengerIcon({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <svg
        height="512pt"
        viewBox="0 0 512 512"
        width="512pt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m241.574219 210.210938-82.953125 87.828124 75.492187-41.421874 39.445313 41.421874 82.488281-87.828124-74.65625 40.695312zm0 0" />
        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm2 393.035156c-15.847656 0-31.144531-2.238281-45.535156-6.382812l-51.625 29.347656v-55.210938c-34.578125-26.3125-56.660156-66.386718-56.660156-111.269531 0-79.265625 68.867187-143.519531 153.820312-143.519531 84.957031 0 153.820312 64.253906 153.820312 143.519531 0 79.257813-68.863281 143.515625-153.820312 143.515625zm0 0" />
      </svg>
    </a>
  )
}

export default MessengerIcon
