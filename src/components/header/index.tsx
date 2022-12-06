import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <Image className={styles.logo} src="/images/vercel.svg" alt="logo" width={90} height={20} />
      <div className={styles.menu}>
        <Link className={styles.menu_item} href="/">
          首页
        </Link>
        <Link className={styles.menu_item} href="/about">
          关于
        </Link>
      </div>
    </header>
  );
}
