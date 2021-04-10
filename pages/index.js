import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Titulo de prueba</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello World</h1>
      </div>
	<p className={styles.paragraph}>
	Mi primer parrafo en next
	</p>
    </>
  );
};
export default Home
