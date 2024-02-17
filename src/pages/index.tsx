import { useState } from 'react';
import logo from '@/assets/logo.png';
import queryString from 'query-string';
import styles from './index.module.css';

const {isDark = false} = queryString.parse(location.search);

export default function IndexPage() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div className={styles.app} style={{ background: isDark ? '#000' : '#fff'}}>
      <header>
        <img src={logo} alt="logo" />
        <p style={{color: isDark ? '#fff' : '#000'}}>
          Hello ice.js 3
        </p>
        <span style={{color: isDark ? '#fff' : '#000'}}>{window.location.href}</span>
      </header>
      <main>
        <button className={styles.button} type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
      </main>
    </div>
  );
}
