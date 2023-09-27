import type { ReactNode } from "react";
import styles from './FirstPost.module.css';

export default function FirstPostLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className={styles.container}>{ children }</div>
  );
}
