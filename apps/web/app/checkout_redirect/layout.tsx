'use client'

// fallback if universal links fail. can happen in Chrome browsers

import { PUBLIC_ENV } from 'app/env/public-env'
import { useEffect } from 'react'

export default function CheckoutRedirectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(function redirect() {
    try {
      const { pathname, search } = new URL(window.location.href)

      let next = `${PUBLIC_ENV.SCHEME}://${pathname}`

      if (search) {
        next += `?${search}`
      }

      window.location.href = next
    } catch {}
  }, [])
  return <>{children}</>
}
