import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { persons } from './data.json';
const Home = () => {
  return (
    <>
      <Head>
        <title>Title from Head of NextJS | Next Example</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello World</h1>
        <p className={styles.paragraph}>Mi firt paragraph in next</p>
        <Link href="/about">
          <a className={styles.linkStyle}>About</a>
        </Link>
      </div>
      {persons.map((e) => {
        return (
          <ul key={e.name}>
            <li>
              <strong>name</strong>:{e.name}
            </li>
            <li>
              <strong>lastname</strong>:{e.lastname}
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default Home;
