import Image from 'next/image';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  return <div className={styles.container}>Hello World
  <Image src="/images/vercel.svg" alt='logo' width={100} height={100}/>
  </div>;
}
