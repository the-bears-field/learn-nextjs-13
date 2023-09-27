import Link from "next/link";
import FirstPostScript from "./FirstPostScript";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'First Post',
}

export default function FirstPost(): ReactNode {
  return (
    <>
      <FirstPostScript />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
