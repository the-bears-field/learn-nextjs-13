import Link from "next/link";
import { ReactNode } from "react";

export default function FirstPost(): ReactNode {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
