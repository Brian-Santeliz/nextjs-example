import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
const About = () => {
  return (
    <>
      <Head>
        <title>About page | Example Next</title>
      </Head>
      <h1>Hello from About Page</h1>
      <Link href="/">
        <a className={styles.linkStyle}>Inicio</a>
      </Link>
    </>
  );
};

export default About;
