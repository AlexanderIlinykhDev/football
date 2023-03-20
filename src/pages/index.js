import styles from './index.module.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className={styles.main}>
      <Navigation />

      <main className={styles.main}></main>
    </section>
  );
}
