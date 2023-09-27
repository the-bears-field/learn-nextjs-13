'use client';

import Script from "next/script";
import type { ReactNode } from "react";

export default function FirstPostScript(): ReactNode {
  return (
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
  );
}